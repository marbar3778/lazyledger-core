package example

import (
	"context"
	"fmt"
	"math/rand"
	"net"
	"os"
	"reflect"
	"testing"
	"time"

	"github.com/stretchr/testify/assert"
	"github.com/stretchr/testify/require"
	"google.golang.org/grpc"

	"github.com/lazyledger/lazyledger-core/libs/log"
	tmnet "github.com/lazyledger/lazyledger-core/libs/net"

	abcicli "github.com/lazyledger/lazyledger-core/abci/client"
	"github.com/lazyledger/lazyledger-core/abci/example/code"
	"github.com/lazyledger/lazyledger-core/abci/example/kvstore"
	abciserver "github.com/lazyledger/lazyledger-core/abci/server"
	"github.com/lazyledger/lazyledger-core/abci/types"
)

func init() {
	rand.Seed(time.Now().UnixNano())
}

func TestKVStore(t *testing.T) {
	fmt.Println("### Testing KVStore")
	testStream(t, kvstore.NewApplication())
}

func TestBaseApp(t *testing.T) {
	fmt.Println("### Testing BaseApp")
	testStream(t, types.NewBaseApplication())
}

func TestGRPC(t *testing.T) {
	fmt.Println("### Testing GRPC")
	testGRPCSync(t, types.NewGRPCApplication(types.NewBaseApplication()))
}

func testStream(t *testing.T, app types.Application) {
	const numDeliverTxs = 20000
	socketFile := fmt.Sprintf("test-%08x.sock", rand.Int31n(1<<30))
	defer os.Remove(socketFile)
	socket := fmt.Sprintf("unix://%v", socketFile)

	// Start the listener
	server := abciserver.NewSocketServer(socket, app)
	server.SetLogger(log.TestingLogger().With("module", "abci-server"))
	err := server.Start()
	require.NoError(t, err)
	t.Cleanup(func() {
		if err := server.Stop(); err != nil {
			t.Error(err)
		}
	})

	// Connect to the socket
	client := abcicli.NewSocketClient(socket, false)
	client.SetLogger(log.TestingLogger().With("module", "abci-client"))
	err = client.Start()
	require.NoError(t, err)
	t.Cleanup(func() {
		if err := client.Stop(); err != nil {
			t.Error(err)
		}
	})

	done := make(chan struct{})
	counter := 0
	client.SetResponseCallback(func(req *types.Request, res *types.Response) {
		// Process response
		switch r := res.Value.(type) {
		case *types.Response_FinalizeBlock:
			counter++

			for _, tx := range r.FinalizeBlock.DeliveredTxs {
				if tx.Code != code.CodeTypeOK {
					t.Error("DeliverTx failed with ret_code", tx.Code)
				}
				if counter > numDeliverTxs {
					t.Fatalf("Too many DeliverTx responses. Got %d, expected %d", counter, numDeliverTxs)
				}
			}

			if counter == numDeliverTxs {
				go func() {
					time.Sleep(time.Second * 1) // Wait for a bit to allow counter overflow
					close(done)
				}()
				return
			}
		case *types.Response_Flush:
			// ignore
		default:
			t.Error("Unexpected response type", reflect.TypeOf(res.Value))
		}
	})

	ctx := context.Background()

	// Write requests
	for counter := 0; counter < numDeliverTxs; counter++ {
		// Send request
		reqRes, err := client.FinalizeBlockAsync(ctx, types.RequestFinalizeBlock{Txs: [][]byte{[]byte("test")}})
		assert.NoError(t, err)
		_ = reqRes
		// check err ?

		// Sometimes send flush messages
		if counter%128 == 0 {
			err = client.FlushSync(context.Background())
			require.NoError(t, err)
		}
	}

	// Send final flush message
	_, err = client.FlushAsync(ctx)
	require.NoError(t, err)

	<-done
}

//-------------------------
// test grpc

func dialerFunc(ctx context.Context, addr string) (net.Conn, error) {
	return tmnet.Connect(addr)
}

func testGRPCSync(t *testing.T, app types.ABCIApplicationServer) {
	numDeliverTxs := 2000
	socketFile := fmt.Sprintf("test-%08x.sock", rand.Int31n(1<<30))
	defer os.Remove(socketFile)
	socket := fmt.Sprintf("unix://%v", socketFile)

	// Start the listener
	server := abciserver.NewGRPCServer(socket, app)
	server.SetLogger(log.TestingLogger().With("module", "abci-server"))
	if err := server.Start(); err != nil {
		t.Fatalf("Error starting GRPC server: %v", err.Error())
	}

	t.Cleanup(func() {
		if err := server.Stop(); err != nil {
			t.Error(err)
		}
	})

	// Connect to the socket
	conn, err := grpc.Dial(socket, grpc.WithInsecure(), grpc.WithContextDialer(dialerFunc))
	if err != nil {
		t.Fatalf("Error dialing GRPC server: %v", err.Error())
	}

	t.Cleanup(func() {
		if err := conn.Close(); err != nil {
			t.Error(err)
		}
	})

	client := types.NewABCIApplicationClient(conn)

	// Write requests
	for counter := 0; counter < numDeliverTxs; counter++ {
		// Send request
		response, err := client.FinalizeBlock(context.Background(), &types.RequestFinalizeBlock{Txs: [][]byte{[]byte("test")}}) //todo should we batch or send individually
		if err != nil {
			t.Fatalf("Error in GRPC DeliverTx: %v", err.Error())
		}
		counter++
		for _, tx := range response.DeliveredTxs {
			if tx.Code != code.CodeTypeOK {
				t.Error("DeliverTx failed with ret_code", tx.Code)
			}
			if counter > numDeliverTxs {
				t.Fatal("Too many DeliverTx responses")
			}
		}
		t.Log("response", counter)
		if counter == numDeliverTxs {
			go func() {
				time.Sleep(time.Second * 1) // Wait for a bit to allow counter overflow
			}()
		}

	}
}
