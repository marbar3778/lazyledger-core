(window.webpackJsonp=window.webpackJsonp||[]).push([[173],{690:function(e,t,s){"use strict";s.r(t);var a=s(1),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"blockchain-reactor-v1"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockchain-reactor-v1"}},[e._v("#")]),e._v(" Blockchain Reactor v1")]),e._v(" "),s("h2",{attrs:{id:"data-structures"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#data-structures"}},[e._v("#")]),e._v(" Data Structures")]),e._v(" "),s("p",[e._v("The data structures used are illustrated below.")]),e._v(" "),s("p",[s("img",{attrs:{src:"img/bc-reactor-new-datastructs.png",alt:"Data Structures"}})]),e._v(" "),s("h3",{attrs:{id:"blockchainreactor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockchainreactor"}},[e._v("#")]),e._v(" BlockchainReactor")]),e._v(" "),s("ul",[s("li",[e._v("is a "),s("code",[e._v("p2p.BaseReactor")]),e._v(".")]),e._v(" "),s("li",[e._v("has a "),s("code",[e._v("store.BlockStore")]),e._v(" for persistence.")]),e._v(" "),s("li",[e._v("executes blocks using an "),s("code",[e._v("sm.BlockExecutor")]),e._v(".")]),e._v(" "),s("li",[e._v("starts the FSM and the "),s("code",[e._v("poolRoutine()")]),e._v(".")]),e._v(" "),s("li",[e._v("relays the fast-sync responses and switch messages to the FSM.")]),e._v(" "),s("li",[e._v("handles errors from the FSM and when necessarily reports them to the switch.")]),e._v(" "),s("li",[e._v("implements the blockchain reactor interface used by the FSM to send requests, errors to the switch and state timer resets.")]),e._v(" "),s("li",[e._v("registers all the concrete types and interfaces for serialisation.")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCbG9ja2NoYWluUmVhY3RvciBzdHJ1Y3QgewogcDJwLkJhc2VSZWFjdG9yCgogaW5pdGlhbFN0YXRlIHNtLlN0YXRlIC8vIGltbXV0YWJsZQogc3RhdGUgICAgICAgIHNtLlN0YXRlCgogYmxvY2tFeGVjICpzbS5CbG9ja0V4ZWN1dG9yCiBzdG9yZSAgICAgKnN0b3JlLkJsb2NrU3RvcmUKCiBmYXN0U3luYyBib29sCgogZnNtICAgICAgICAgICpCY1JlYWN0b3JGU00KIGJsb2Nrc1N5bmNlZCBpbnQKCiAvLyBSZWNlaXZlIGdvcm91dGluZSBmb3J3YXJkcyBtZXNzYWdlcyB0byB0aGlzIGNoYW5uZWwgdG8gYmUgcHJvY2Vzc2VkIGluIHRoZSBjb250ZXh0IG9mIHRoZSBwb29sUm91dGluZS4KIG1lc3NhZ2VzRm9yRlNNQ2ggY2hhbiBiY1JlYWN0b3JNZXNzYWdlCgogLy8gU3dpdGNoIGdvcm91dGluZSBtYXkgc2VuZCBSZW1vdmVQZWVyIHRvIHRoZSBibG9ja2NoYWluIHJlYWN0b3IuIFRoaXMgaXMgYW4gZXJyb3IgbWVzc2FnZSB0aGF0IGlzIHJlbGF5ZWQKIC8vIHRvIHRoaXMgY2hhbm5lbCB0byBiZSBwcm9jZXNzZWQgaW4gdGhlIGNvbnRleHQgb2YgdGhlIHBvb2xSb3V0aW5lLgogZXJyb3JzRm9yRlNNQ2ggY2hhbiBiY1JlYWN0b3JNZXNzYWdlCgogLy8gVGhpcyBjaGFubmVsIGlzIHVzZWQgYnkgdGhlIEZTTSBhbmQgaW5kaXJlY3RseSB0aGUgYmxvY2sgcG9vbCB0byByZXBvcnQgZXJyb3JzIHRvIHRoZSBibG9ja2NoYWluIHJlYWN0b3IgYW5kCiAvLyB0aGUgc3dpdGNoLgogZXZlbnRzRnJvbUZTTUNoIGNoYW4gYmNGc21NZXNzYWdlCn0K"}}),e._v(" "),s("h4",{attrs:{id:"bcreactorfsm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bcreactorfsm"}},[e._v("#")]),e._v(" BcReactorFSM")]),e._v(" "),s("ul",[s("li",[e._v("implements a simple finite state machine.")]),e._v(" "),s("li",[e._v("has a state and a state timer.")]),e._v(" "),s("li",[e._v("has a "),s("code",[e._v("BlockPool")]),e._v(" to keep track of block requests sent to peers and blocks received from peers.")]),e._v(" "),s("li",[e._v("uses an interface to send status requests, block requests and reporting errors. The interface is implemented by the "),s("code",[e._v("BlockchainReactor")]),e._v(" and tests.")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCY1JlYWN0b3JGU00gc3RydWN0IHsKIGxvZ2dlciBsb2cuTG9nZ2VyCiBtdHggICAgc3luYy5NdXRleAoKIHN0YXJ0VGltZSB0aW1lLlRpbWUKCiBzdGF0ZSAgICAgICpiY1JlYWN0b3JGU01TdGF0ZQogc3RhdGVUaW1lciAqdGltZS5UaW1lcgogcG9vbCAgICAgICAqQmxvY2tQb29sCgogLy8gaW50ZXJmYWNlIHVzZWQgdG8gY2FsbCB0aGUgQmxvY2tjaGFpbiByZWFjdG9yIHRvIHNlbmQgU3RhdHVzUmVxdWVzdCwgQmxvY2tSZXF1ZXN0LCByZXBvcnRpbmcgZXJyb3JzLCBldGMuCiB0b0JjUiBiY1JlYWN0b3IKfQo="}}),e._v(" "),s("h4",{attrs:{id:"blockpool"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#blockpool"}},[e._v("#")]),e._v(" BlockPool")]),e._v(" "),s("ul",[s("li",[e._v("maintains a peer set, implemented as a map of peer ID to "),s("code",[e._v("BpPeer")]),e._v(".")]),e._v(" "),s("li",[e._v("maintains a set of requests made to peers, implemented as a map of block request heights to peer IDs.")]),e._v(" "),s("li",[e._v("maintains a list of future block requests needed to advance the fast-sync. This is a list of block heights.")]),e._v(" "),s("li",[e._v("keeps track of the maximum height of the peers in the set.")]),e._v(" "),s("li",[e._v("uses an interface to send requests and report errors to the reactor (via FSM).")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCbG9ja1Bvb2wgc3RydWN0IHsKIGxvZ2dlciBsb2cuTG9nZ2VyCiAvLyBTZXQgb2YgcGVlcnMgdGhhdCBoYXZlIHNlbnQgc3RhdHVzIHJlc3BvbnNlcywgd2l0aCBoZWlnaHQgYmlnZ2VyIHRoYW4gcG9vbC5IZWlnaHQKIHBlZXJzIG1hcFtwMnAuSURdKkJwUGVlcgogLy8gU2V0IG9mIGJsb2NrIGhlaWdodHMgYW5kIHRoZSBjb3JyZXNwb25kaW5nIHBlZXJzIGZyb20gd2hlcmUgYSBibG9jayByZXNwb25zZSBpcyBleHBlY3RlZCBvciBoYXMgYmVlbiByZWNlaXZlZC4KIGJsb2NrcyBtYXBbaW50NjRdcDJwLklECgogcGxhbm5lZFJlcXVlc3RzICAgbWFwW2ludDY0XXN0cnVjdHt9IC8vIGxpc3Qgb2YgYmxvY2tzIHRvIGJlIGFzc2lnbmVkIHBlZXJzIGZvciBibG9ja1JlcXVlc3QKIG5leHRSZXF1ZXN0SGVpZ2h0IGludDY0ICAgICAgICAgICAgICAvLyBuZXh0IGhlaWdodCB0byBiZSBhZGRlZCB0byBwbGFubmVkUmVxdWVzdHMKCiBIZWlnaHQgICAgICAgIGludDY0IC8vIGhlaWdodCBvZiBuZXh0IGJsb2NrIHRvIGV4ZWN1dGUKIE1heFBlZXJIZWlnaHQgaW50NjQgLy8gbWF4aW11bSBoZWlnaHQgb2YgYWxsIHBlZXJzCiB0b0JjUiAgICAgICAgIGJjUmVhY3Rvcgp9Cg=="}}),e._v(" "),s("p",[e._v("Some reasons for the "),s("code",[e._v("BlockPool")]),e._v(" data structure content:")]),e._v(" "),s("ol",[s("li",[e._v("If a peer is removed by the switch fast access is required to the peer and the block requests made to that peer in order to redo them.")]),e._v(" "),s("li",[e._v("When block verification fails fast access is required from the block height to the peer and the block requests made to that peer in order to redo them.")]),e._v(" "),s("li",[e._v("The "),s("code",[e._v("BlockchainReactor")]),e._v(" main routine decides when the block pool is running low and asks the "),s("code",[e._v("BlockPool")]),e._v(" (via FSM) to make more requests. The "),s("code",[e._v("BlockPool")]),e._v(" creates a list of requests and triggers the sending of the block requests (via the interface). The reason it maintains a list of requests is the redo operations that may occur during error handling. These are redone when the "),s("code",[e._v("BlockchainReactor")]),e._v(" requires more blocks.")])]),e._v(" "),s("h4",{attrs:{id:"bppeer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#bppeer"}},[e._v("#")]),e._v(" BpPeer")]),e._v(" "),s("ul",[s("li",[e._v("keeps track of a single peer, with height bigger than the initial height.")]),e._v(" "),s("li",[e._v("maintains the block requests made to the peer and the blocks received from the peer until they are executed.")]),e._v(" "),s("li",[e._v("monitors the peer speed when there are pending requests.")]),e._v(" "),s("li",[e._v("it has an active timer when pending requests are present and reports error on timeout.")])]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dHlwZSBCcFBlZXIgc3RydWN0IHsKIGxvZ2dlciBsb2cuTG9nZ2VyCiBJRCAgICAgcDJwLklECgogSGVpZ2h0ICAgICAgICAgICAgICAgICAgaW50NjQgICAgICAgICAgICAgICAgICAvLyB0aGUgcGVlciByZXBvcnRlZCBoZWlnaHQKIE51bVBlbmRpbmdCbG9ja1JlcXVlc3RzIGludCAgICAgICAgICAgICAgICAgICAgLy8gbnVtYmVyIG9mIHJlcXVlc3RzIHN0aWxsIHdhaXRpbmcgZm9yIGJsb2NrIHJlc3BvbnNlcwogYmxvY2tzICAgICAgICAgICAgICAgICAgbWFwW2ludDY0XSp0eXBlcy5CbG9jayAvLyBibG9ja3MgcmVjZWl2ZWQgb3IgZXhwZWN0ZWQgdG8gYmUgcmVjZWl2ZWQgZnJvbSB0aGlzIHBlZXIKIGJsb2NrUmVzcG9uc2VUaW1lciAgICAgICp0aW1lLlRpbWVyCiByZWN2TW9uaXRvciAgICAgICAgICAgICAqZmxvdy5Nb25pdG9yCiBwYXJhbXMgICAgICAgICAgICAgICAgICAqQnBQZWVyUGFyYW1zIC8vIHBhcmFtZXRlcnMgZm9yIHRpbWVyIGFuZCBtb25pdG9yCgogb25FcnIgZnVuYyhlcnIgZXJyb3IsIHBlZXJJRCBwMnAuSUQpIC8vIGZ1bmN0aW9uIHRvIGNhbGwgb24gZXJyb3IKfQo="}}),e._v(" "),s("h3",{attrs:{id:"concurrency-model"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#concurrency-model"}},[e._v("#")]),e._v(" Concurrency Model")]),e._v(" "),s("p",[e._v("The diagram below shows the goroutines (depicted by the gray blocks), timers (shown on the left with their values) and channels (colored rectangles). The FSM box shows some of the functionality and it is not a separate goroutine.")]),e._v(" "),s("p",[e._v("The interface used by the FSM is shown in light red with the "),s("code",[e._v("IF")]),e._v(" block. This is used to:")]),e._v(" "),s("ul",[s("li",[e._v("send block requests")]),e._v(" "),s("li",[e._v("report peer errors to the switch - this results in the reactor calling "),s("code",[e._v("switch.StopPeerForError()")]),e._v(" and, if triggered by the peer timeout routine, a "),s("code",[e._v("removePeerEv")]),e._v(" is sent to the FSM and action is taken from the context of the "),s("code",[e._v("poolRoutine()")])]),e._v(" "),s("li",[e._v("ask the reactor to reset the state timers. The timers are owned by the FSM while the timeout routine is defined by the reactor. This was done in order to avoid running timers in tests and will change in the next revision.")])]),e._v(" "),s("p",[e._v("There are two main goroutines implemented by the blockchain reactor. All I/O operations are performed from the "),s("code",[e._v("poolRoutine()")]),e._v(" context while the CPU intensive operations related to the block execution are performed from the context of the "),s("code",[e._v("executeBlocksRoutine()")]),e._v(". All goroutines are detailed in the next sections.")]),e._v(" "),s("p",[s("img",{attrs:{src:"img/bc-reactor-new-goroutines.png",alt:"Go Routines Diagram"}})]),e._v(" "),s("h4",{attrs:{id:"receive"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#receive"}},[e._v("#")]),e._v(" Receive()")]),e._v(" "),s("p",[e._v("Fast-sync messages from peers are received by this goroutine. It performs basic validation and:")]),e._v(" "),s("ul",[s("li",[e._v("in helper mode (i.e. for request message) it replies immediately. This is different than the proposal in adr-040 that specifies having the FSM handling these.")]),e._v(" "),s("li",[e._v("forwards response messages to the "),s("code",[e._v("poolRoutine()")]),e._v(".")])]),e._v(" "),s("h4",{attrs:{id:"poolroutine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#poolroutine"}},[e._v("#")]),e._v(" poolRoutine()")]),e._v(" "),s("p",[e._v("(named kept as in the previous reactor).\nIt starts the "),s("code",[e._v("executeBlocksRoutine()")]),e._v(" and the FSM. It then waits in a loop for events. These are received from the following channels:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("sendBlockRequestTicker.C")]),e._v(" - every 10msec the reactor asks FSM to make more block requests up to a maximum. Note: currently this value is constant but could be changed based on low/ high watermark thresholds for the number of blocks received and waiting to be processed, the number of blockResponse messages waiting in messagesForFSMCh, etc.")]),e._v(" "),s("li",[s("code",[e._v("statusUpdateTicker.C")]),e._v(" - every 10 seconds the reactor broadcasts status requests to peers. While adr-040 specifies this to run within the FSM, at this point this functionality is kept in the reactor.")]),e._v(" "),s("li",[s("code",[e._v("messagesForFSMCh")]),e._v(" - the "),s("code",[e._v("Receive()")]),e._v(" goroutine sends status and block response messages to this channel and the reactor calls FSM to handle them.")]),e._v(" "),s("li",[s("code",[e._v("errorsForFSMCh")]),e._v(" - this channel receives the following events:\n"),s("ul",[s("li",[e._v("peer remove - when the switch removes a peer")]),e._v(" "),s("li",[e._v("sate timeout event - when FSM state timers trigger\nThe reactor forwards this messages to the FSM.")])])]),e._v(" "),s("li",[s("code",[e._v("eventsFromFSMCh")]),e._v(" - there are two type of events sent over this channel:\n"),s("ul",[s("li",[s("code",[e._v("syncFinishedEv")]),e._v(" - triggered when FSM enters "),s("code",[e._v("finished")]),e._v(" state and calls the switchToConsensus() interface function.")]),e._v(" "),s("li",[s("code",[e._v("peerErrorEv")]),e._v("- peer timer expiry goroutine sends this event over the channel for processing from poolRoutine() context.")])])])]),e._v(" "),s("h4",{attrs:{id:"executeblocksroutine"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#executeblocksroutine"}},[e._v("#")]),e._v(" executeBlocksRoutine()")]),e._v(" "),s("p",[e._v("Started by the "),s("code",[e._v("poolRoutine()")]),e._v(", it retrieves blocks from the pool and executes them:")]),e._v(" "),s("ul",[s("li",[s("code",[e._v("processReceivedBlockTicker.C")]),e._v(" - a ticker event is received over the channel every 10msec and its handling results in a signal being sent to the doProcessBlockCh channel.")]),e._v(" "),s("li",[e._v("doProcessBlockCh - events are received on this channel as described as above and upon processing blocks are retrieved from the pool and executed.")])]),e._v(" "),s("h3",{attrs:{id:"fsm"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#fsm"}},[e._v("#")]),e._v(" FSM")]),e._v(" "),s("p",[s("img",{attrs:{src:"img/bc-reactor-new-fsm.png",alt:"fsm"}})]),e._v(" "),s("h4",{attrs:{id:"states"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#states"}},[e._v("#")]),e._v(" States")]),e._v(" "),s("h5",{attrs:{id:"init-aka-unknown"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#init-aka-unknown"}},[e._v("#")]),e._v(" init (aka unknown)")]),e._v(" "),s("p",[e._v("The FSM is created in "),s("code",[e._v("unknown")]),e._v(" state. When started, by the reactor ("),s("code",[e._v("startFSMEv")]),e._v("), it broadcasts Status requests and transitions to "),s("code",[e._v("waitForPeer")]),e._v(" state.")]),e._v(" "),s("h5",{attrs:{id:"waitforpeer"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#waitforpeer"}},[e._v("#")]),e._v(" waitForPeer")]),e._v(" "),s("p",[e._v('In this state, the FSM waits for a Status responses from a "tall" peer. A timer is running in this state to allow the FSM to finish if there are no useful peers.')]),e._v(" "),s("p",[e._v("If the timer expires, it moves to "),s("code",[e._v("finished")]),e._v(" state and calls the reactor to switch to consensus.\nIf a Status response is received from a peer within the timeout, the FSM transitions to "),s("code",[e._v("waitForBlock")]),e._v(" state.")]),e._v(" "),s("h5",{attrs:{id:"waitforblock"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#waitforblock"}},[e._v("#")]),e._v(" waitForBlock")]),e._v(" "),s("p",[e._v("In this state the FSM makes Block requests (triggered by a ticker in reactor) and waits for Block responses. There is a timer running in this state to detect if a peer is not sending the block at current processing height. If the timer expires, the FSM removes the peer where the request was sent and all requests made to that peer are redone.")]),e._v(" "),s("p",[e._v("As blocks are received they are stored by the pool. Block execution is independently performed by the reactor and the result reported to the FSM:")]),e._v(" "),s("ul",[s("li",[e._v("if there are no errors, the FSM increases the pool height and resets the state timer.")]),e._v(" "),s("li",[e._v("if there are errors, the peers that delivered the two blocks (at height and height+1) are removed and the requests redone.")])]),e._v(" "),s("p",[e._v("In this state the FSM may receive peer remove events in any of the following scenarios:")]),e._v(" "),s("ul",[s("li",[e._v("the switch is removing a peer")]),e._v(" "),s("li",[e._v("a peer is penalized because it has not responded to some block requests for a long time")]),e._v(" "),s("li",[e._v("a peer is penalized for being slow")])]),e._v(" "),s("p",[e._v("When processing of the last block (the one with height equal to the highest peer height minus one) is successful, the FSM transitions to "),s("code",[e._v("finished")]),e._v(" state.\nIf after a peer update or removal the pool height is same as maxPeerHeight, the FSM transitions to "),s("code",[e._v("finished")]),e._v(" state.")]),e._v(" "),s("h5",{attrs:{id:"finished"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#finished"}},[e._v("#")]),e._v(" finished")]),e._v(" "),s("p",[e._v("When entering this state, the FSM calls the reactor to switch to consensus and performs cleanup.")]),e._v(" "),s("h4",{attrs:{id:"events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#events"}},[e._v("#")]),e._v(" Events")]),e._v(" "),s("p",[e._v("The following events are handled by the FSM:")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Y29uc3QgKAogc3RhcnRGU01FdiA9IGlvdGEgKyAxCiBzdGF0dXNSZXNwb25zZUV2CiBibG9ja1Jlc3BvbnNlRXYKIHByb2Nlc3NlZEJsb2NrRXYKIG1ha2VSZXF1ZXN0c0V2CiBzdG9wRlNNRXYKIHBlZXJSZW1vdmVFdiA9IGlvdGEgKyAyNTYKIHN0YXRlVGltZW91dEV2CikK"}}),e._v(" "),s("h3",{attrs:{id:"examples-of-scenarios-and-termination-handling"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#examples-of-scenarios-and-termination-handling"}},[e._v("#")]),e._v(" Examples of Scenarios and Termination Handling")]),e._v(" "),s("p",[e._v("A few scenarios are covered in this section together with the current/ proposed handling.\nIn general, the scenarios involving faulty peers are made worse by the fact that they may quickly be re-added.")]),e._v(" "),s("h4",{attrs:{id:"_1-no-tall-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_1-no-tall-peers"}},[e._v("#")]),e._v(" 1. No Tall Peers")]),e._v(" "),s("p",[e._v("S: In this scenario a node is started and while there are status responses received, none of the peers are at a height higher than this node.")]),e._v(" "),s("p",[e._v("H: The FSM times out in "),s("code",[e._v("waitForPeer")]),e._v(" state, moves to "),s("code",[e._v("finished")]),e._v(" state where it calls the reactor to switch to consensus.")]),e._v(" "),s("h4",{attrs:{id:"_2-typical-fast-sync"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_2-typical-fast-sync"}},[e._v("#")]),e._v(" 2. Typical Fast Sync")]),e._v(" "),s("p",[e._v("S: A node fast syncs blocks from honest peers and eventually downloads and executes the penultimate block.")]),e._v(" "),s("p",[e._v("H: The FSM in "),s("code",[e._v("waitForBlock")]),e._v(" state will receive the processedBlockEv from the reactor and detect that the termination height is achieved.")]),e._v(" "),s("h4",{attrs:{id:"_3-peer-claims-big-height-but-no-blocks"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_3-peer-claims-big-height-but-no-blocks"}},[e._v("#")]),e._v(" 3. Peer Claims Big Height but no Blocks")]),e._v(" "),s("p",[e._v("S: In this scenario a faulty peer claims a big height (for which there are no blocks).")]),e._v(" "),s("p",[e._v("H: The requests for the non-existing block will timeout, the peer removed and the pool's "),s("code",[e._v("MaxPeerHeight")]),e._v(" updated. FSM checks if the termination height is achieved when peers are removed.")]),e._v(" "),s("h4",{attrs:{id:"_4-highest-peer-removed-or-updated-to-short"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_4-highest-peer-removed-or-updated-to-short"}},[e._v("#")]),e._v(" 4. Highest Peer Removed or Updated to Short")]),e._v(" "),s("p",[e._v("S: The fast sync node is caught up with all peers except one tall peer. The tall peer is removed or it sends status response with low height.")]),e._v(" "),s("p",[e._v("H: FSM checks termination condition on peer removal and updates.")]),e._v(" "),s("h4",{attrs:{id:"_5-block-at-current-height-delayed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#_5-block-at-current-height-delayed"}},[e._v("#")]),e._v(" 5. Block At Current Height Delayed")]),e._v(" "),s("p",[e._v("S: A peer can block the progress of fast sync by delaying indefinitely the block response for the current processing height (h1).")]),e._v(" "),s("p",[e._v("H: Currently, given h1 < h2, there is no enforcement at peer level that the response for h1 should be received before h2. So a peer will timeout only after delivering all blocks except h1. However the "),s("code",[e._v("waitForBlock")]),e._v(" state timer fires if the block for current processing height is not received within a timeout. The peer is removed and the requests to that peer (including the one for current height) redone.")])],1)}),[],!1,null,null,null);t.default=r.exports}}]);