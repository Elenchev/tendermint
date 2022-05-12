(window.webpackJsonp=window.webpackJsonp||[]).push([[200],{775:function(e,o,t){"use strict";t.r(o);var s=t(1),v=Object(s.a)({},(function(){var e=this,o=e.$createElement,t=e._self._c||o;return t("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[t("h1",{attrs:{id:"pbts-system-model-and-properties"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-system-model-and-properties"}},[e._v("#")]),e._v(" PBTS: System Model and Properties")]),e._v(" "),t("h2",{attrs:{id:"outline"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#outline"}},[e._v("#")]),e._v(" Outline")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#system-model"}},[e._v("System model")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#synchronized-clocks"}},[e._v("Synchronized clocks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#message-delays"}},[e._v("Message delays")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#problem-statement"}},[e._v("Problem Statement")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#protocol-analysis---timely-proposals"}},[e._v("Protocol Analysis - Timely Proposals")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#timely-proof-of-locks"}},[e._v("Timely Proof-of-Locks")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#derived-proof-of-locks"}},[e._v("Derived Proof-of-Locks")])])])]),e._v(" "),t("li",[t("a",{attrs:{href:"#temporal-analysis"}},[e._v("Temporal Analysis")]),e._v(" "),t("ul",[t("li",[t("a",{attrs:{href:"#safety"}},[e._v("Safety")])]),e._v(" "),t("li",[t("a",{attrs:{href:"#liveness"}},[e._v("Liveness")])])])])]),e._v(" "),t("h2",{attrs:{id:"system-model"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#system-model"}},[e._v("#")]),e._v(" System Model")]),e._v(" "),t("h4",{attrs:{id:"pbts-clock-newton-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-newton-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CLOCK-NEWTON.0]")])]),e._v(" "),t("p",[e._v("There is a reference Newtonian real-time "),t("code",[e._v("t")]),e._v(".")]),e._v(" "),t("p",[e._v("No process has direct access to this reference time, used only for specification purposes.\nThe reference real-time is assumed to be aligned with the Coordinated Universal Time (UTC).")]),e._v(" "),t("h3",{attrs:{id:"synchronized-clocks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#synchronized-clocks"}},[e._v("#")]),e._v(" Synchronized clocks")]),e._v(" "),t("p",[e._v("Processes are assumed to be equipped with synchronized clocks,\naligned with the Coordinated Universal Time (UTC).")]),e._v(" "),t("p",[e._v("This requires processes to periodically synchronize their local clocks with an\nexternal and trusted source of the time (e.g. NTP servers).\nEach synchronization cycle aligns the process local clock with the external\nsource of time, making it a "),t("em",[e._v("fairly accurate")]),e._v(" source of real time.\nThe periodic (re)synchronization aims to correct the "),t("em",[e._v("drift")]),e._v(" of local clocks,\nwhich tend to pace slightly faster or slower than the real time.")]),e._v(" "),t("p",[e._v("To avoid an excessive level detail in the parameters and guarantees of\nsynchronized clocks, we adopt a single system parameter "),t("code",[e._v("PRECISION")]),e._v(" to\nencapsulate the potential inaccuracy of the synchronization mechanisms,\nand drifts of local clocks from real time.")]),e._v(" "),t("h4",{attrs:{id:"pbts-clock-precision-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-precision-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CLOCK-PRECISION.0]")])]),e._v(" "),t("p",[e._v("There exists a system parameter "),t("code",[e._v("PRECISION")]),e._v(", such that\nfor any two processes "),t("code",[e._v("p")]),e._v(" and "),t("code",[e._v("q")]),e._v(", with local clocks "),t("code",[e._v("C_p")]),e._v(" and "),t("code",[e._v("C_q")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("If "),t("code",[e._v("p")]),e._v(" and "),t("code",[e._v("q")]),e._v(" are equipped with synchronized clocks,\nthen for any real-time "),t("code",[e._v("t")]),e._v(" we have "),t("code",[e._v("|C_p(t) - C_q(t)| <= PRECISION")]),e._v(".")])]),e._v(" "),t("p",[t("code",[e._v("PRECISION")]),e._v(" thus bounds the difference on the times simultaneously read by processes\nfrom their local clocks, so that their clocks can be considered synchronized.")]),e._v(" "),t("h4",{attrs:{id:"accuracy"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#accuracy"}},[e._v("#")]),e._v(" Accuracy")]),e._v(" "),t("p",[e._v("A second relevant clock parameter is accuracy, which binds the values read by\nprocesses from their clocks to real time.")]),e._v(" "),t("h5",{attrs:{id:"pbts-clock-accuracy-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-clock-accuracy-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-CLOCK-ACCURACY.0]")])]),e._v(" "),t("p",[e._v("For the sake of completeness, we define a parameter "),t("code",[e._v("ACCURACY")]),e._v(" such that:")]),e._v(" "),t("ul",[t("li",[e._v("At real time "),t("code",[e._v("t")]),e._v(" there is at least one correct process "),t("code",[e._v("p")]),e._v(" which clock marks\n"),t("code",[e._v("C_p(t)")]),e._v(" with "),t("code",[e._v("|C_p(t) - t| <= ACCURACY")]),e._v(".")])]),e._v(" "),t("p",[e._v("As a consequence, applying the definition of "),t("code",[e._v("PRECISION")]),e._v(", we have:")]),e._v(" "),t("ul",[t("li",[e._v("At real time "),t("code",[e._v("t")]),e._v(" the synchronized clock of any correct process "),t("code",[e._v("p")]),e._v(" marks\n"),t("code",[e._v("C_p(t)")]),e._v(" with "),t("code",[e._v("|C_p(t) - t| <= ACCURACY + PRECISION")]),e._v(".")])]),e._v(" "),t("p",[e._v("The reason for not adopting "),t("code",[e._v("ACCURACY")]),e._v(" as a system parameter is the assumption\nthat "),t("code",[e._v("PRECISION >> ACCURACY")]),e._v(".\nThis allows us to consider, for practical purposes, that the "),t("code",[e._v("PRECISION")]),e._v(" system\nparameter embodies the "),t("code",[e._v("ACCURACY")]),e._v(" model parameter.")]),e._v(" "),t("h3",{attrs:{id:"message-delays"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#message-delays"}},[e._v("#")]),e._v(" Message Delays")]),e._v(" "),t("p",[e._v("The assumption that processes have access to synchronized clocks ensures that proposal times\nassigned by "),t("em",[e._v("correct processes")]),e._v(" have a bounded relation with the real time.\nIt is not enough, however, to identify (and reject) proposal times proposed by Byzantine processes.")]),e._v(" "),t("p",[e._v("To properly evaluate whether the time assigned to a proposal is consistent with the real time,\nwe need some information regarding the time it takes for a message carrying a proposal\nto reach all its (correct) destinations.\nMore precisely, the "),t("em",[e._v("maximum delay")]),e._v(" for delivering a proposal to its destinations allows\ndefining a lower bound, a "),t("em",[e._v("minimum time")]),e._v(" that a correct process assigns to proposal.\nWhile "),t("em",[e._v("minimum delay")]),e._v(" for delivering a proposal to a destination allows defining\nan upper bound, the "),t("em",[e._v("maximum time")]),e._v(" assigned to a proposal.")]),e._v(" "),t("h4",{attrs:{id:"pbts-msg-delay-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-msg-delay-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-MSG-DELAY.0]")])]),e._v(" "),t("p",[e._v("There exists a system parameter "),t("code",[e._v("MSGDELAY")]),e._v(" for end-to-end delays of proposal messages,\nsuch for any two correct processes "),t("code",[e._v("p")]),e._v(" and "),t("code",[e._v("q")]),e._v(":")]),e._v(" "),t("ul",[t("li",[e._v("If "),t("code",[e._v("p")]),e._v(" sends a proposal message "),t("code",[e._v("m")]),e._v(" at real time "),t("code",[e._v("t")]),e._v(" and "),t("code",[e._v("q")]),e._v(" receives "),t("code",[e._v("m")]),e._v(" at\nreal time "),t("code",[e._v("t'")]),e._v(", then "),t("code",[e._v("t <= t' <= t + MSGDELAY")]),e._v(".")])]),e._v(" "),t("p",[e._v("Notice that, as a system parameter, "),t("code",[e._v("MSGDELAY")]),e._v(" should be observed for any\nproposal message broadcast by correct processes: it is a "),t("em",[e._v("worst-case")]),e._v(" parameter.\nAs message delays depends on the message size, the above requirement implicitly\nindicates that the size of proposal messages is either fixed or upper bounded.")]),e._v(" "),t("h2",{attrs:{id:"problem-statement"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#problem-statement"}},[e._v("#")]),e._v(" Problem Statement")]),e._v(" "),t("p",[e._v("In this section we define the properties of Tendermint consensus\n(cf. the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),t("OutboundLink")],1),e._v(") in this system model.")]),e._v(" "),t("h3",{attrs:{id:"pbts-propose-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-propose-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-PROPOSE.0]")])]),e._v(" "),t("p",[e._v("A proposer proposes a consensus value "),t("code",[e._v("v")]),e._v(" that includes a proposal time\n"),t("code",[e._v("v.time")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("We then restrict the allowed decisions along the following lines:")])]),e._v(" "),t("h4",{attrs:{id:"pbts-inv-agreement-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-agreement-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-AGREEMENT.0]")])]),e._v(" "),t("ul",[t("li",[e._v("[Agreement] No two correct processes decide on different values "),t("code",[e._v("v")]),e._v(".")])]),e._v(" "),t("p",[e._v("This implies that no two correct processes decide on different proposal times\n"),t("code",[e._v("v.time")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"pbts-inv-valid-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-valid-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-VALID.0]")])]),e._v(" "),t("ul",[t("li",[e._v("[Validity] If a correct process decides on value "),t("code",[e._v("v")]),e._v(", then "),t("code",[e._v("v")]),e._v(" satisfies a\npredefined "),t("code",[e._v("valid")]),e._v(" predicate.")])]),e._v(" "),t("p",[e._v("With respect to PBTS, the "),t("code",[e._v("valid")]),e._v(" predicate requires proposal times to be\n"),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/pbts-algorithm_002_draft.html#time-monotonicity"}},[e._v("monotonic")]),e._v(" over heights of\nconsensus:")],1),e._v(" "),t("h5",{attrs:{id:"pbts-inv-monotonicity-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-monotonicity-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-MONOTONICITY.0]")])]),e._v(" "),t("ul",[t("li",[e._v("If a correct process decides on value "),t("code",[e._v("v")]),e._v(" at the height "),t("code",[e._v("h")]),e._v(" of consensus,\nthus setting "),t("code",[e._v("decision[h] = v")]),e._v(", then "),t("code",[e._v("v.time > decision[h'].time")]),e._v(" for all\nprevious heights "),t("code",[e._v("h' < h")]),e._v(".")])]),e._v(" "),t("p",[e._v("The monotonicity of proposal times, and external validity in general,\nimplicitly assumes that heights of consensus are executed in order.")]),e._v(" "),t("h4",{attrs:{id:"pbts-inv-timely-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-inv-timely-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-INV-TIMELY.0]")])]),e._v(" "),t("ul",[t("li",[e._v("[Time-Validity] If a correct process decides on value "),t("code",[e._v("v")]),e._v(", then the proposal\ntime "),t("code",[e._v("v.time")]),e._v(" was considered "),t("code",[e._v("timely")]),e._v(" by at least one correct process.")])]),e._v(" "),t("p",[e._v("PBTS introduces a "),t("code",[e._v("timely")]),e._v(" predicate that restricts the allowed decisions based\non the proposal time "),t("code",[e._v("v.time")]),e._v(" associated with a proposed value "),t("code",[e._v("v")]),e._v(".\nAs a synchronous predicate, the time at which it is evaluated impacts on\nwhether a process accepts or reject a proposal time.\nFor this reason, the Time-Validity property refers to the previous evaluation\nof the "),t("code",[e._v("timely")]),e._v(" predicate, detailed in the following section.")]),e._v(" "),t("h2",{attrs:{id:"protocol-analysis-timely-proposals"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#protocol-analysis-timely-proposals"}},[e._v("#")]),e._v(" Protocol Analysis - Timely proposals")]),e._v(" "),t("p",[e._v("For PBTS, a "),t("code",[e._v("proposal")]),e._v(" is a tuple "),t("code",[e._v("(v, v.time, v.round)")]),e._v(", where:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("v")]),e._v(" is the proposed value;")]),e._v(" "),t("li",[t("code",[e._v("v.time")]),e._v(" is the associated proposal time;")]),e._v(" "),t("li",[t("code",[e._v("v.round")]),e._v(" is the round at which "),t("code",[e._v("v")]),e._v(" was first proposed.")])]),e._v(" "),t("p",[e._v("We include the proposal round "),t("code",[e._v("v.round")]),e._v(" in the proposal definition because a\nvalue "),t("code",[e._v("v")]),e._v(" and its associated proposal time "),t("code",[e._v("v.time")]),e._v(" can be proposed in multiple\nrounds, but the evaluation of the "),t("code",[e._v("timely")]),e._v(" predicate is only relevant at round\n"),t("code",[e._v("v.round")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Considering the algorithm in the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),t("OutboundLink")],1),e._v(", a new proposal is\nproduced by the "),t("code",[e._v("getValue()")]),e._v(" method, invoked by the proposer "),t("code",[e._v("p")]),e._v(" of round\n"),t("code",[e._v("round_p")]),e._v(" when starting its proposing round with a nil "),t("code",[e._v("validValue_p")]),e._v(".\nThe first round at which a value "),t("code",[e._v("v")]),e._v(" is proposed is then the round at which\nthe proposal for "),t("code",[e._v("v")]),e._v(" was produced, and broadcast in a "),t("code",[e._v("PROPOSAL")]),e._v(" message with\n"),t("code",[e._v("vr = -1")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"pbts-proposal-reception-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-proposal-reception-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-PROPOSAL-RECEPTION.0]")])]),e._v(" "),t("p",[e._v("The "),t("code",[e._v("timely")]),e._v(" predicate is evaluated when a process receives a proposal.\nMore precisely, let "),t("code",[e._v("p")]),e._v(" be a correct process:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("proposalReceptionTime(p,r)")]),e._v(" is the time "),t("code",[e._v("p")]),e._v(" reads from its local clock when\n"),t("code",[e._v("p")]),e._v(" is at round "),t("code",[e._v("r")]),e._v(" and receives the proposal of round "),t("code",[e._v("r")]),e._v(".")])]),e._v(" "),t("h4",{attrs:{id:"pbts-timely-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-timely-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-TIMELY.0]")])]),e._v(" "),t("p",[e._v("The proposal "),t("code",[e._v("(v, v.time, v.round)")]),e._v(" is considered "),t("code",[e._v("timely")]),e._v(" by a correct process\n"),t("code",[e._v("p")]),e._v(" if:")]),e._v(" "),t("ol",[t("li",[t("code",[e._v("proposalReceptionTime(p,v.round)")]),e._v(" is set, and")]),e._v(" "),t("li",[t("code",[e._v("proposalReceptionTime(p,v.round) >= v.time - PRECISION")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("proposalReceptionTime(p,v.round) <= v.time + MSGDELAY + PRECISION")]),e._v(".")])]),e._v(" "),t("p",[e._v("A correct process at round "),t("code",[e._v("v.round")]),e._v(" only sends a "),t("code",[e._v("PREVOTE")]),e._v(" for "),t("code",[e._v("v")]),e._v(" if the\nassociated proposal time "),t("code",[e._v("v.time")]),e._v(" is considered "),t("code",[e._v("timely")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Considering the algorithm in the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),t("OutboundLink")],1),e._v(", the "),t("code",[e._v("timely")]),e._v(" predicate\nis evaluated by a process "),t("code",[e._v("p")]),e._v(" when it receives a valid "),t("code",[e._v("PROPOSAL")]),e._v(" message\nfrom the proposer of the current round "),t("code",[e._v("round_p")]),e._v(" with "),t("code",[e._v("vr = -1")]),e._v(".")])]),e._v(" "),t("h3",{attrs:{id:"timely-proof-of-locks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#timely-proof-of-locks"}},[e._v("#")]),e._v(" Timely Proof-of-Locks")]),e._v(" "),t("p",[e._v("A "),t("em",[e._v("Proof-of-Lock")]),e._v(" is a set of "),t("code",[e._v("PREVOTE")]),e._v(" messages of round of consensus for the\nsame value from processes whose cumulative voting power is at least "),t("code",[e._v("2f + 1")]),e._v(".\nWe denote as "),t("code",[e._v("POL(v,r)")]),e._v(" a proof-of-lock of value "),t("code",[e._v("v")]),e._v(" at round "),t("code",[e._v("r")]),e._v(".")]),e._v(" "),t("p",[e._v("For PBTS, we are particularly interested in the "),t("code",[e._v("POL(v,v.round)")]),e._v(" produced in\nthe round "),t("code",[e._v("v.round")]),e._v(" at which a value "),t("code",[e._v("v")]),e._v(" was first proposed.\nWe call it a "),t("em",[e._v("timely")]),e._v(" proof-of-lock for "),t("code",[e._v("v")]),e._v(" because it can only be observed\nif at least one correct process considered it "),t("code",[e._v("timely")]),e._v(":")]),e._v(" "),t("h4",{attrs:{id:"pbts-timely-pol-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-timely-pol-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-TIMELY-POL.0]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid "),t("code",[e._v("POL(v,r)")]),e._v(" with "),t("code",[e._v("r = v.round")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,v.round)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process,")])]),e._v(" "),t("p",[e._v("Then, let "),t("code",[e._v("p")]),e._v(" is a such correct process:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("p")]),e._v(" received a "),t("code",[e._v("PROPOSAL")]),e._v(" message of round "),t("code",[e._v("v.round")]),e._v(", and")]),e._v(" "),t("li",[e._v("the "),t("code",[e._v("PROPOSAL")]),e._v(" message contained a proposal "),t("code",[e._v("(v, v.time, v.round)")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("p")]),e._v(" was in round "),t("code",[e._v("v.round")]),e._v(" and evaluated the proposal time "),t("code",[e._v("v.time")]),e._v(" as "),t("code",[e._v("timely")]),e._v(".")])]),e._v(" "),t("p",[e._v("The existence of a such correct process "),t("code",[e._v("p")]),e._v(" is guaranteed provided that the\nvoting power of Byzantine processes is bounded by "),t("code",[e._v("2f")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"derived-proof-of-locks"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#derived-proof-of-locks"}},[e._v("#")]),e._v(" Derived Proof-of-Locks")]),e._v(" "),t("p",[e._v("The existence of "),t("code",[e._v("POL(v,r)")]),e._v(" is a requirement for the decision of "),t("code",[e._v("v")]),e._v(" at round\n"),t("code",[e._v("r")]),e._v(" of consensus.")]),e._v(" "),t("p",[e._v("At the same time, the Time-Validity property establishes that if "),t("code",[e._v("v")]),e._v(" is decided\nthen a timely proof-of-lock "),t("code",[e._v("POL(v,v.round)")]),e._v(" must have been produced.")]),e._v(" "),t("p",[e._v("So, we need to demonstrate here that any valid "),t("code",[e._v("POL(v,r)")]),e._v(" is either a timely\nproof-of-lock or it is derived from a timely proof-of-lock:")]),e._v(" "),t("h4",{attrs:{id:"pbts-derived-pol-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-derived-pol-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-DERIVED-POL.0]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid "),t("code",[e._v("POL(v,r)")]),e._v(", and")]),e._v(" "),t("li",[t("code",[e._v("POL(v,r)")]),e._v(" contains a "),t("code",[e._v("PREVOTE")]),e._v(" message from at least one correct process,")])]),e._v(" "),t("p",[e._v("Then")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid "),t("code",[e._v("POL(v,v.round)")]),e._v(" with "),t("code",[e._v("v.round <= r")]),e._v(" which is a timely proof-of-lock.")])]),e._v(" "),t("p",[e._v("The above relation is trivially observed when "),t("code",[e._v("r = v.round")]),e._v(", as "),t("code",[e._v("POL(v,r)")]),e._v(" must\nbe a timely proof-of-lock.\nNotice that we cannot have "),t("code",[e._v("r < v.round")]),e._v(", as "),t("code",[e._v("v.round")]),e._v(" is defined as the first\nround at which "),t("code",[e._v("v")]),e._v(" was proposed.")]),e._v(" "),t("p",[e._v("For "),t("code",[e._v("r > v.round")]),e._v(" we need to demonstrate that if there is a valid "),t("code",[e._v("POL(v,r)")]),e._v(",\nthen a timely "),t("code",[e._v("POL(v,v.round)")]),e._v(" was previously obtained.\nWe observe that a condition for observing a "),t("code",[e._v("POL(v,r)")]),e._v(" is that the proposer of\nround "),t("code",[e._v("r")]),e._v(" has broadcast a "),t("code",[e._v("PROPOSAL")]),e._v(" message for "),t("code",[e._v("v")]),e._v(".\nAs "),t("code",[e._v("r > v.round")]),e._v(", we can affirm that "),t("code",[e._v("v")]),e._v(" was not produced in round "),t("code",[e._v("r")]),e._v(".\nInstead, by the protocol operation, "),t("code",[e._v("v")]),e._v(" was a "),t("em",[e._v("valid value")]),e._v(" for the proposer of\nround "),t("code",[e._v("r")]),e._v(", which means that if the proposer has observed a "),t("code",[e._v("POL(v,vr)")]),e._v(" with "),t("code",[e._v("vr < r")]),e._v(".\nThe above operation considers a "),t("em",[e._v("correct")]),e._v(" proposer, but since a "),t("code",[e._v("POL(v,r)")]),e._v(" was\nproduced (by hypothesis) we can affirm that at least one correct process (also)\nobserved a "),t("code",[e._v("POL(v,vr)")]),e._v(".")]),e._v(" "),t("blockquote",[t("p",[e._v("Considering the algorithm in the "),t("a",{attrs:{href:"https://arxiv.org/pdf/1807.04938.pdf",target:"_blank",rel:"noopener noreferrer"}},[e._v("arXiv paper"),t("OutboundLink")],1),e._v(", "),t("code",[e._v("v")]),e._v(" was proposed by\nthe proposer "),t("code",[e._v("p")]),e._v(" of round "),t("code",[e._v("round_p")]),e._v(" because its "),t("code",[e._v("validValue_p")]),e._v(" variable was\nset to "),t("code",[e._v("v")]),e._v(".\nThe "),t("code",[e._v("PROPOSAL")]),e._v(" message broadcast by the proposer, in this case, had "),t("code",[e._v("vr > -1")]),e._v(",\nand it could only be accepted by processes that also observed a "),t("code",[e._v("POL(v,vr)")]),e._v(".")])]),e._v(" "),t("p",[e._v("Thus, if there is a "),t("code",[e._v("POL(v,r)")]),e._v(" with "),t("code",[e._v("r > v.round")]),e._v(", then there is a valid\n"),t("code",[e._v("POL(v,vr)")]),e._v(" with "),t("code",[e._v("v.round <= vr < r")]),e._v(".\nIf "),t("code",[e._v("vr = v.round")]),e._v(" then "),t("code",[e._v("POL(vr,v)")]),e._v(" is a timely proof-of-lock and we are done.\nOtherwise, there is another valid "),t("code",[e._v("POL(v,vr')")]),e._v(" with "),t("code",[e._v("v.round <= vr' < vr")]),e._v(",\nand the above reasoning can be recursively applied until we get "),t("code",[e._v("vr' = v.round")]),e._v("\nand observe a timely proof-of-lock.")]),e._v(" "),t("h2",{attrs:{id:"temporal-analysis"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#temporal-analysis"}},[e._v("#")]),e._v(" Temporal analysis")]),e._v(" "),t("p",[e._v("In this section we present invariants that need be observed for ensuring that\nPBTS is both safe and live.")]),e._v(" "),t("p",[e._v("In addition to the variables and system parameters already defined, we use\n"),t("code",[e._v("beginRound(p,r)")]),e._v(" as the value of process "),t("code",[e._v("p")]),e._v("'s local clock\nwhen it starts round "),t("code",[e._v("r")]),e._v(" of consensus.")]),e._v(" "),t("h3",{attrs:{id:"safety"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#safety"}},[e._v("#")]),e._v(" Safety")]),e._v(" "),t("p",[e._v("The safety of PBTS requires that if a value "),t("code",[e._v("v")]),e._v(" is decided, then at least one\ncorrect process "),t("code",[e._v("p")]),e._v(" considered the associated proposal time "),t("code",[e._v("v.time")]),e._v(" timely.\nFollowing the definition of "),t("a",{attrs:{href:"#pbts-timely0"}},[e._v("timely proposals")]),e._v(" and\nproof-of-locks, we require this condition to be asserted at a specific round of\nconsensus, defined as "),t("code",[e._v("v.round")]),e._v(":")]),e._v(" "),t("h4",{attrs:{id:"pbts-safety-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-safety-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-SAFETY.0]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("there is a valid commit "),t("code",[e._v("C")]),e._v(" for a value "),t("code",[e._v("v")])]),e._v(" "),t("li",[t("code",[e._v("C")]),e._v(" contains a "),t("code",[e._v("PRECOMMIT")]),e._v(" message from at least one correct process")])]),e._v(" "),t("p",[e._v("then there is a correct process "),t("code",[e._v("p")]),e._v(" (not necessarily the same above considered) such that:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("beginRound(p,v.round) <= proposalReceptionTime(p,v.round) <= beginRound(p,v.round+1)")]),e._v(" and")]),e._v(" "),t("li",[t("code",[e._v("proposalReceptionTime (p,v.round) - MSGDELAY - PRECISION <= v.time <= proposalReceptionTime(p,v.round) + PRECISION")])])]),e._v(" "),t("p",[e._v("That is, a correct process "),t("code",[e._v("p")]),e._v(" started round "),t("code",[e._v("v.round")]),e._v(" and, while still at\nround "),t("code",[e._v("v.round")]),e._v(", received a "),t("code",[e._v("PROPOSAL")]),e._v(" message from round "),t("code",[e._v("v.round")]),e._v(" proposing\n"),t("code",[e._v("v")]),e._v(".\nMoreover, the reception time of the original proposal for "),t("code",[e._v("v")]),e._v(", according with\n"),t("code",[e._v("p")]),e._v("'s local clock, enabled "),t("code",[e._v("p")]),e._v(" to consider the proposal time "),t("code",[e._v("v.time")]),e._v(" as\n"),t("code",[e._v("timely")]),e._v(".\nThis is the requirement established by PBTS for issuing a "),t("code",[e._v("PREVOTE")]),e._v(" for the\nproposal "),t("code",[e._v("(v, v.time, v.round)")]),e._v(", so for the eventual decision of "),t("code",[e._v("v")]),e._v(".")]),e._v(" "),t("h3",{attrs:{id:"liveness"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#liveness"}},[e._v("#")]),e._v(" Liveness")]),e._v(" "),t("p",[e._v("The liveness of PBTS relies on correct processes accepting proposal times\nassigned by correct proposers.\nWe thus present a set of conditions for assigning a proposal time "),t("code",[e._v("v.time")]),e._v(" so\nthat every correct process should be able to issue a "),t("code",[e._v("PREVOTE")]),e._v(" for "),t("code",[e._v("v")]),e._v(".")]),e._v(" "),t("h4",{attrs:{id:"pbts-liveness-0"}},[t("a",{staticClass:"header-anchor",attrs:{href:"#pbts-liveness-0"}},[e._v("#")]),e._v(" "),t("strong",[e._v("[PBTS-LIVENESS.0]")])]),e._v(" "),t("p",[e._v("If")]),e._v(" "),t("ul",[t("li",[e._v("the proposer of a round "),t("code",[e._v("r")]),e._v(" of consensus is correct")]),e._v(" "),t("li",[e._v("and it proposes a value "),t("code",[e._v("v")]),e._v(" for the first time, with associated proposal time "),t("code",[e._v("v.time")])])]),e._v(" "),t("p",[e._v("then the proposal "),t("code",[e._v("(v, v.time, r)")]),e._v(" is accepted by every correct process provided that:")]),e._v(" "),t("ul",[t("li",[t("code",[e._v("min{p is correct : beginRound(p,r)} <= v.time <= max{p is correct : beginRound(p,r)}")]),e._v(" and")]),e._v(" "),t("li",[t("code",[e._v("max{p is correct : beginRound(p,r)} <= v.time + MSGDELAY + PRECISION <= min{p is correct : beginRound(p,r+1)}")])])]),e._v(" "),t("p",[e._v("The first condition establishes a range of safe proposal times "),t("code",[e._v("v.time")]),e._v(" for round "),t("code",[e._v("r")]),e._v(".\nThis condition is trivially observed if a correct proposer "),t("code",[e._v("p")]),e._v(" sets "),t("code",[e._v("v.time")]),e._v(" to the time it\nreads from its clock when starting round "),t("code",[e._v("r")]),e._v(" and proposing "),t("code",[e._v("v")]),e._v(".\nA "),t("code",[e._v("PROPOSAL")]),e._v(" message sent by "),t("code",[e._v("p")]),e._v(" at local time "),t("code",[e._v("v.time")]),e._v(" should not be received\nby any correct process before its local clock reads "),t("code",[e._v("v.time - PRECISION")]),e._v(", so\nthat condition 2 of [PBTS-TIMELY.0] is observed.")]),e._v(" "),t("p",[e._v("The second condition establishes that every correct process should start round\n"),t("code",[e._v("v.round")]),e._v(" at a local time that allows "),t("code",[e._v("v.time")]),e._v(" to still be considered timely,\naccording to condition 3. of [PBTS-TIMELY.0].\nIn addition, it requires correct processes to stay long enough in round\n"),t("code",[e._v("v.round")]),e._v(" so that they can receive the "),t("code",[e._v("PROPOSAL")]),e._v(" message of round "),t("code",[e._v("v.round")]),e._v(".\nIt assumed here that the proposer of "),t("code",[e._v("v")]),e._v(" broadcasts a "),t("code",[e._v("PROPOSAL")]),e._v(" message at\ntime "),t("code",[e._v("v.time")]),e._v(", according to its local clock, so that every correct process\nshould receive this message by time "),t("code",[e._v("v.time + MSGDELAY + PRECISION")]),e._v(", according\nto their local clocks.")]),e._v(" "),t("p",[e._v("Back to "),t("RouterLink",{attrs:{to:"/spec/consensus/proposer-based-timestamp/"}},[e._v("main document")]),e._v(".")],1)])}),[],!1,null,null,null);o.default=v.exports}}]);