(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{584:function(e,t,o){e.exports=o.p+"assets/img/node-dependency-tree.da9cd25c.svg"},740:function(e,t,o){"use strict";o.r(t);var s=o(1),n=Object(s.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"rfc-016-node-architecture"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#rfc-016-node-architecture"}},[e._v("#")]),e._v(" RFC 016: Node Architecture")]),e._v(" "),s("h2",{attrs:{id:"changelog"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changelog"}},[e._v("#")]),e._v(" Changelog")]),e._v(" "),s("ul",[s("li",[e._v("April 8, 2022: Initial draft (@cmwaters)")]),e._v(" "),s("li",[e._v("April 15, 2022: Incorporation of feedback")])]),e._v(" "),s("h2",{attrs:{id:"abstract"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#abstract"}},[e._v("#")]),e._v(" Abstract")]),e._v(" "),s("p",[e._v("The "),s("code",[e._v("node")]),e._v(" package is the entry point into the Tendermint codebase, used both by the command line and programatically to create the nodes that make up a network. The package has suffered the most from the evolution of the codebase, becoming bloated as developers clipped on their bits of code here and there to get whatever feature they wanted working.")]),e._v(" "),s("p",[e._v("The decisions made at the node level have the biggest impact to simplifying the protocols within them, unlocking better internal designs and making Tendermint more intuitive to use and easier to understand from the outside. Work, in minor increments, has already begun on this section of the codebase. This document exists to spark forth the necessary discourse in a few related areas that will help the team to converge on the long term makeup of the node.")]),e._v(" "),s("h2",{attrs:{id:"discussion"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#discussion"}},[e._v("#")]),e._v(" Discussion")]),e._v(" "),s("p",[e._v("The following is a list of points of discussion around the architecture of the node:")]),e._v(" "),s("h3",{attrs:{id:"dependency-tree"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#dependency-tree"}},[e._v("#")]),e._v(" Dependency Tree")]),e._v(" "),s("p",[e._v("The node object is currently stuffed with every component that possibly exists within Tendermint. In the constructor, all objects are built and interlaid with one another in some awkward dance. My guiding principle is that the node should only be made up of the components that it wants to have direct control of throughout its life. The node is a service which currently has the purpose of starting other services up in a particular order and stopping them all when commanded to do so. However, there are many services which are not direct dependents i.e. the mempool and evidence services should only be working when the consensus service is running. I propose to form more of a hierarchical structure of dependents which forces us to be clear about the relations that one component has to the other. More concretely, I propose the following dependency tree:")]),e._v(" "),s("p",[s("img",{attrs:{src:o(584),alt:"node dependency tree"}})]),e._v(" "),s("p",[e._v("Many of the further discussion topics circle back to this representation of the node.")]),e._v(" "),s("p",[e._v("It's also important to distinguish two dimensions which may require different characteristics of the architecture. There is the starting and stopping of services and their general lifecycle management. What is the correct order of operations to starting a node for example. Then there is the question of the needs of the service during actual operation. Then there is the question of what resources each service needs access to during its operation. Some need to publish events, others need access to data stores, and so forth.")]),e._v(" "),s("p",[e._v("An alternative model and one that perhaps better suits the latter of these dimensions is the notion of an internal message passing system. Either the events bus or p2p layer could serve as a viable transport. This would essentially allow all services to communicate with any other service and could perhaps provide a solution to the coordination problem (presented below) without a centralized coordinator. The other main advantage is that such a system would be more robust to disruptions and changes to the code which may make a hierarchical structure quickly outdated and suboptimal. The addition of message routing is an added complexity to implement, will increase the degree of asynchronicity in the system and may make it harder to debug problems that are across multiple services.")]),e._v(" "),s("h3",{attrs:{id:"coordination-of-state-advancing-mechanisms"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#coordination-of-state-advancing-mechanisms"}},[e._v("#")]),e._v(" Coordination of State Advancing Mechanisms")]),e._v(" "),s("p",[e._v('Advancement of state in Tendermint is simply defined in heights: If the node is at height n, how does it get to height n + 1 and so on. Based on this definition we have three components that help a node to advance in height: consensus, statesync and blocksync. The way these components behave currently is very tightly coupled to one another with references passed back and forth. My guiding principle is that each of these should be able to operate completely independently of each other, e.g. a node should be able to run solely blocksync indefinitely. There have been several ideas suggested towards improving this flow. I\'ve been leaning strongly towards a centralized system, whereby an orchestrator (in this case the node) decides what services to start and stop.\nIn a decentralized message passing system, individual services make their decision based upon a "global" shared state i.e. if my height is less that 10 below the average peer height, I as consensus, should stop (knowing that blocksync has the same condition for starting). As the example illustrates, each mechanism will still need to be aware of the presence of other mechanisms.')]),e._v(" "),s("p",[e._v("Both centralized and decentralized systems rely on the communication of the nodes current height and a judgement on the height of the head of the chain. The latter, working out the head of the chain, is quite a difficult challenge as their is nothing preventing the node from acting maliciously and providing a different height. Currently both blocksync, consensus (and to a certain degree statesync), have parallel systems where peers communicate their height. This could be streamlined with the consensus (or even the p2p layer), broadcasting peer heights and either the node or the other state advancing mechanisms acting accordingly.")]),e._v(" "),s("p",[e._v("Currently, when a node starts, it turns on every service that it is attached to. This means that while a node is syncing up by requesting blocks, it is also receiving transactions and votes, as well as snapshot and block requests. This is a needless use of bandwidth. An implementation of an orchestrator, regardless of whether the system is heirachical or not, should look to be able to open and close channels dynamically and effectively broadcast which services it is running. Integrating this with service discovery may also lead to a better serivce to peers.")]),e._v(" "),s("p",[e._v("The orchestrator allows for some deal of variablity in how a node is constructed. Does it just run blocksync, shadowing the head of the chain and be highly available for querying. Does it rely on state sync at all? An important question that arises from this dynamicism is we ideally want to encourage nodes to provide as much of their resources as possible so that their is a healthy amount of providers to consumers. Do we make all services compulsory or allow for them to be disabled? Arguably it's possible that a user forks the codebase and rips out the blocksync code because they want to reduce bandwidth so this is more a question of how easy do we want to make this for users.")]),e._v(" "),s("h3",{attrs:{id:"block-executor"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#block-executor"}},[e._v("#")]),e._v(" Block Executor")]),e._v(" "),s("p",[e._v("The block executor is an important component that is currently used by both consensus and blocksync to execute transactions and update application state. Principally, I think it should be the only component that can write (and possibly even read) the block and state stores, and we should clean up other direct dependencies on the storage engine if we can. This would mean:")]),e._v(" "),s("ul",[s("li",[e._v("The reactors Consensus, BlockSync and StateSync should all import the executor for advancing state ie.  "),s("code",[e._v("ApplyBlock")]),e._v(" and "),s("code",[e._v("BootstrapState")]),e._v(".")]),e._v(" "),s("li",[e._v("Pruning should also be a concern of the block executor as well as "),s("code",[e._v("FinalizeBlock")]),e._v(" and "),s("code",[e._v("Commit")]),e._v(". This can simplify consensus to focus just on the consensus part.")])]),e._v(" "),s("h3",{attrs:{id:"the-interprocess-communication-systems-rpc-p2p-abci-and-events"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#the-interprocess-communication-systems-rpc-p2p-abci-and-events"}},[e._v("#")]),e._v(" The Interprocess communication systems: RPC, P2P, ABCI, and Events")]),e._v(" "),s("p",[e._v("The schematic supplied above shows the relations between the different services, the node, the block executor, and the storage layer. Represented as colored dots are the components responsible for different roles of interprocess communication (IPC). These components permeate throughout the code base, seeping into most services. What can provide powerful functionality on one hand can also become a twisted vine, creating messy corner cases and convoluting the protocols themselves. A lot of the thinking around\nhow we want our IPC systens to function has been summarised in this "),s("RouterLink",{attrs:{to:"/rfc/rfc-002-ipc-ecosystem.html"}},[e._v("RFC")]),e._v(". In this section, I'd like to focus the reader on the relation between the IPC and the node structure. An issue that has frequently risen is that the RPC has control of the components where it strikes me as being more logical for the component to dictate the information that is emitted/available and the knobs it wishes to expose. The RPC is also inextricably tied to the node instance and has situations where it is passed pointers directly to the storage engine and other components.")],1),e._v(" "),s("p",[e._v("I am currently convinced of the approach that the p2p layer takes and would like to see other IPC components follow suit. This would mean that the RPC and events system would be constructed in the node yet would pass the adequate methods to register endpoints and topics to the sub components. For example,")]),e._v(" "),s("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"Ly8gTWV0aG9kcyBmcm9tIHRoZSBSUEMgYW5kIGV2ZW50IGJ1cyB0aGF0IHdvdWxkIGJlIHBhc3NlZCBpbnRvIHRoZSBjb25zdHJ1Y3RvciBvZiBjb21wb25lbnRzIGxpa2UgJnF1b3Q7Y29uc2Vuc3VzJnF1b3Q7Ci8vIE5PVEU6IFRoaXMgaXMgYSBoeXBvdGhldGljYWwgY29uc3RydWN0aW9uIHRvIGNvbnZleSB0aGUgaWRlYS4gQW4gYWN0dWFsIGltcGxlbWVudGF0aW9uIG1heSBkaWZmZXIuCmZ1bmMgUmVnaXN0ZXJSb3V0ZShwYXRoIHN0cmluZywgaGFuZGxlciBmdW5jKGh0dHAuUmVzcG9uc2VXcml0ZXIsICpodHRwLlJlcXVlc3QpKQoKZnVuYyBSZWdpc3RlclRvcGljKG5hbWUgc3RyaW5nKSBFdmVudFB1Ymxpc2hlcgoKdHlwZSBFdmVudFB1Ymxpc2hlciBmdW5jIChjb250ZXh0LkNvbnRleHQsIHR5cGVzLkV2ZW50RGF0YSwgW11hYmNpLkV2ZW50KQo="}}),e._v(" "),s("p",[e._v("This would give the components control to the information they want to expose and keep all relevant logic within that package. It accomodates more to a dynamic system where services can switch on and off. Each component would also receive access to the logger and metrics system for introspection and debuggability.")]),e._v(" "),s("h4",{attrs:{id:"ipc-rubric"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#ipc-rubric"}},[e._v("#")]),e._v(" IPC Rubric")]),e._v(" "),s("p",[e._v("I'd like to aim to reach a state where we as a team have either an implicit or explicit rubric which can determine, in the event of some new need to communicate information, what tool it should use for doing this. In the case of inter node communication, this is obviously the p2p stack (with perhaps the exception of the light client). Metrics and logging also have clear usage patterns. RPC and the events system are less clear. The RPC is used for debugging data and fine tuned operator control as it is for general public querying and transaction submission. The RPC is also known to have been plumbed back into the application for historical queries. The events system, similarly, is used for consuming transaction events as it is for the testing of consensus state transitions.")]),e._v(" "),s("p",[e._v("Principally, I think we should look to change our language away from what the actual transport is and more towards what it's being used for and to whom. We call it a peer to peer layer and not the underlying tcp connection. In the same way, we should look to split RPC into an operator interface (RPC Internal), a public interface (RPC External) and a bidirectional ABCI.")]),e._v(" "),s("h3",{attrs:{id:"seperation-of-consumers-and-suppliers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#seperation-of-consumers-and-suppliers"}},[e._v("#")]),e._v(" Seperation of consumers and suppliers")]),e._v(" "),s("p",[e._v("When a service such as blocksync is turned on, it automatically begins requesting blocks to verify and apply them as it also tries to serve them to other peers catching up. We should look to distinguish these two aspects: supplying of information and consuming of information in many of these components. More concretely, I'd suggest:")]),e._v(" "),s("ul",[s("li",[e._v("The blocksync and statesync service, i.e. supplying information for those trying to catch up should only start running once a node has caught up i.e. after running the blocksync and/or state sync "),s("em",[e._v("processes")])]),e._v(" "),s("li",[e._v("The blocksync and state sync processes have defined termination clauses that inform the orchestrator when they are done and where they finished.\n"),s("ul",[s("li",[e._v("One way of achieving this would be that every process both passes and returns the "),s("code",[e._v("State")]),e._v(" object")]),e._v(" "),s("li",[e._v("In some cases, a node may specify that it wants to run blocksync indefinitely.")])])]),e._v(" "),s("li",[e._v("The mempool should also indicate whether it wants to receive transactions or to send them only (one-directional mempool)")]),e._v(" "),s("li",[e._v("Similarly, the light client itself only requests information whereas the light client service (currently part of state sync) can do both.")]),e._v(" "),s("li",[e._v("This distinction needs to be communicated in the p2p layer handshake itself but should also be changeable over the lifespan of the connection.")])])],1)}),[],!1,null,null,null);t.default=n.exports}}]);