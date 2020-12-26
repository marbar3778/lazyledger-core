package main

import (
	"bytes"
	"context"
	"fmt"
	"os"

	abcicli "github.com/lazyledger/lazyledger-core/abci/client"
	"github.com/lazyledger/lazyledger-core/abci/types"
	"github.com/lazyledger/lazyledger-core/libs/log"
)

var ctx = context.Background()

func startClient(abciType string) abcicli.Client {
	// Start client
	client, err := abcicli.NewClient("tcp://127.0.0.1:26658", abciType, true)
	if err != nil {
		panic(err.Error())
	}
	logger := log.NewTMLogger(log.NewSyncWriter(os.Stdout))
	client.SetLogger(logger.With("module", "abcicli"))
	if err := client.Start(); err != nil {
		panicf("connecting to abci_app: %v", err.Error())
	}

	return client
}

func commit(client abcicli.Client, hashExp []byte) {
	res, err := client.CommitSync(ctx)
	if err != nil {
		panicf("client error: %v", err)
	}
	if !bytes.Equal(res.Data, hashExp) {
		panicf("Commit hash was unexpected. Got %X expected %X", res.Data, hashExp)
	}
}

// todo rename to finalizeBlock
func deliverTx(client abcicli.Client, txBytes []byte, codeExp uint32, dataExp []byte) {
	res, err := client.FinalizeBlockSync(ctx, types.RequestFinalizeBlock{Txs: [][]byte{txBytes}})
	if err != nil {
		panicf("client error: %v", err)
	}
	txRes := res.DeliveredTxs[0]
	if txRes.Code != codeExp {
		panicf("DeliverTx response code was unexpected. Got %v expected %v. Log: %v", txRes.Code, codeExp, txRes.Log)
	}
	if !bytes.Equal(txRes.Data, dataExp) {
		panicf("DeliverTx response data was unexpected. Got %X expected %X", txRes.Data, dataExp)
	}
}

func panicf(format string, a ...interface{}) {
	panic(fmt.Sprintf(format, a...))
}
