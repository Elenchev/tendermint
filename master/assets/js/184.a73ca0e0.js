(window.webpackJsonp=window.webpackJsonp||[]).push([[184],{758:function(g,c,C){"use strict";C.r(c);var I=C(1),o=Object(I.a)({},(function(){var g=this,c=g.$createElement,C=g._self._c||c;return C("ContentSlotsDistributor",{attrs:{"slot-key":g.$parent.slotKey}},[C("h1",{attrs:{id:"tendermint-v4-markdown-pseudocode"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#tendermint-v4-markdown-pseudocode"}},[g._v("#")]),g._v(" Tendermint v4 Markdown pseudocode")]),g._v(" "),C("p",[g._v("This is a multi-threaded implementation of ABCI++,\nwhere ProcessProposal starts when the proposal is received, but ends before precommitting.")]),g._v(" "),C("h3",{attrs:{id:"initialization"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#initialization"}},[g._v("#")]),g._v(" Initialization")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"aF9wIOKGkCAwCnJvdW5kX3Ag4oaQIDAKc3RlcF9wIGlzIG9uZSBvZiB7cHJvcG9zZSwgcHJldm90ZSwgcHJlY29tbWl0fQpkZWNpc2lvbl9wIOKGkCBWZWN0b3IoKQpsb2NrZWRWYWx1ZV9wIOKGkCBuaWwKdmFsaWRWYWx1ZV9wIOKGkCBuaWwKdmFsaWRSb3VuZF9wIOKGkCAtMQo="}}),g._v(" "),C("h3",{attrs:{id:"startround-round"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#startround-round"}},[g._v("#")]),g._v(" StartRound(round)")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZnVuY3Rpb24gc3RhcnRSb3VuZChyb3VuZCkgewogICAgcm91bmRfcCDihpAgcm91bmQKICAgIHN0ZXBfcCDihpAgcHJvcG9zZQogICAgaWYgcHJvcG9zZXIoaF9wLCByb3VuZF9wKSA9IHAgewogICAgICAgIGlmIHZhbGlkVmFsdWVfcCAhPSBuaWwgewogICAgICAgICAgICBwcm9wb3NhbCDihpAgdmFsaWRWYWx1ZV9wCiAgICAgICAgfSBlbHNlIHsKICAgICAgICAgICAgdHhkYXRhIOKGkCBtZW1wb29sLkdldEJsb2NrKCkKICAgICAgICAgICAgLy8gZ2V0VW5wcmVwYXJlZEJsb2NrUHJvcG9zYWwgZmlsbHMgaW4gaGVhZGVyCiAgICAgICAgICAgIHVucHJlcGFyZWRQcm9wb3NhbCDihpAgZ2V0VW5wcmVwYXJlZEJsb2NrUHJvcG9zYWwodHhkYXRhKQogICAgICAgICAgICBwcm9wb3NhbCDihpAgQUJDSS5QcmVwYXJlUHJvcG9zYWwodW5wcmVwYXJlZFByb3Bvc2FsKQogICAgICAgIH0KICAgICAgICBicm9hZGNhc3Qg4p+oUFJPUE9TQUwsIGhfcCwgcm91bmRfcCwgcHJvcG9zYWwsIHZhbGlkUm91bmRfcOKfqQogICAgfSBlbHNlIHsKICAgICAgICBzY2hlZHVsZSBPblRpbWVvdXRQcm9wb3NlKGhfcCxyb3VuZF9wKSB0byBiZSBleGVjdXRlZCBhZnRlciB0aW1lb3V0UHJvcG9zZShyb3VuZF9wKQogICAgfQp9Cg=="}}),g._v(" "),C("h3",{attrs:{id:"receiveproposal"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#receiveproposal"}},[g._v("#")]),g._v(" ReceiveProposal")]),g._v(" "),C("p",[g._v("In the case where the local node is not locked on any round, the following is ran:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCDiiJIxKSBmcm9tIHByb3Bvc2VyKGhfcCwgcm91bmRfcCkgd2hpbGUgc3RlcF9wID0gcHJvcG9zZSBkbyB7CiAgICBpZiB2YWxpZCh2KSDiiKcgQUJDSS5WZXJpZnlIZWFkZXIoaF9wLCB2LmhlYWRlcikg4oinIChsb2NrZWRSb3VuZF9wID0g4oiSMSDiiKggbG9ja2VkVmFsdWVfcCA9IHYpIHsKICAgICAgICAvLyBXZSBmb3JrIHByb2Nlc3MgcHJvcG9zYWwgaW50byBhIHBhcmFsbGVsIHByb2Nlc3MKICAgICAgICBGb3JrIEFCQ0kuUHJvY2Vzc1Byb3Bvc2FsKGhfcCwgdikKICAgICAgICBicm9hZGNhc3Qg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBpZCh2KeKfqSAKICAgIH0gZWxzZSB7CiAgICAgICAgYnJvYWRjYXN0IOKfqFBSRVZPVEUsIGhfcCwgcm91bmRfcCwgbmls4p+pIAogICAgfQogICAgc3RlcF9wIOKGkCBwcmV2b3RlCn0K"}}),g._v(" "),C("p",[g._v("In the case where the node is locked on a round, the following is ran:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCB2cuKfqQogIGZyb20gcHJvcG9zZXIoaF9wLCByb3VuZF9wKQogIEFORCAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCB2ciwgaWQodinin6kgCiAgd2hpbGUgc3RlcF9wID0gcHJvcG9zZSDiiKcgKHZyIOKJpSAwIOKIpyB2ciAmbHQ7IHJvdW5kX3ApIGRvIHsKICAgIGlmIHZhbGlkKHYpIOKIpyBBQkNJLlZlcmlmeUhlYWRlcihoX3AsIHYuaGVhZGVyKSDiiKcgKGxvY2tlZFJvdW5kX3Ag4omkIHZyIOKIqCBsb2NrZWRWYWx1ZV9wID0gdikgewogICAgICAgIC8vIFdlIGZvcmsgcHJvY2VzcyBwcm9wb3NhbCBpbnRvIGEgcGFyYWxsZWwgcHJvY2VzcwogICAgICAgIEZvcmsgQUJDSS5Qcm9jZXNzUHJvcG9zYWwoaF9wLCB2KQogICAgICAgIGJyb2FkY2FzdCDin6hQUkVWT1RFLCBoX3AsIHJvdW5kX3AsIGlkKHYp4p+pCiAgICB9IGVsc2UgewogICAgICAgIGJyb2FkY2FzdCDin6hQUkVWT1RFLCBoX3AsIHJvdW5kX3AsIG5pbOKfqQogICAgfQogICAgc3RlcF9wIOKGkCBwcmV2b3RlCn0K"}}),g._v(" "),C("h3",{attrs:{id:"prevote-timeout"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#prevote-timeout"}},[g._v("#")]),g._v(" Prevote timeout")]),g._v(" "),C("p",[g._v("Upon receiving 2f + 1 prevotes, setup a timeout.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCB2ciwgLTHin6kgCiAgd2l0aCBzdGVwX3AgPSBwcmV2b3RlIGZvciB0aGUgZmlyc3QgdGltZSwgZG8gewogICAgc2NoZWR1bGUgT25UaW1lb3V0UHJldm90ZShoX3AsIHJvdW5kX3ApIHRvIGJlIGV4ZWN1dGVkIGFmdGVyIHRpbWVvdXRQcmV2b3RlKHJvdW5kX3ApCn0K"}}),g._v(" "),C("p",[g._v("with OnTimeoutPrevote defined as:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGVmIE9uVGltZW91dFByZXZvdGUoaGVpZ2h0LCByb3VuZCkgewogICAgaWYgKGhlaWdodCA9IGhfcCAmYW1wOyZhbXA7IHJvdW5kID0gcm91bmRfcCAmYW1wOyZhbXA7IHN0ZXBfcCA9IHByZXZvdGUpIHsKICAgICAgICAvLyBKb2luIHRoZSBQcm9jZXNzUHJvcG9zYWwsIGFuZCBvdXRwdXQgYW55IGV2aWRlbmNlIGluIGNhc2UgaXQgaGFzIHNvbWUuCiAgICAgICAgcHJvY2Vzc1Byb3Bvc2FsT3V0cHV0IOKGkCBKb2luIEFCQ0kuUHJvY2Vzc1Byb3Bvc2FsKGhfcCwgdikKICAgICAgICBmb3IgZXZpZGVuY2UgaW4gcHJvY2Vzc1Byb3Bvc2FsT3V0cHV0LmV2aWRlbmNlX2xpc3QgewogICAgICAgICAgICBicm9hZGNhc3Qg4p+oRVZJREVOQ0UsIGV2aWRlbmNl4p+pIAogICAgICAgIH0KCiAgICAgICAgcHJlY29tbWl0X2V4dGVuc2lvbiDihpAgQUJDSS5FeHRlbmRWb3RlKGhfcCwgcm91bmRfcCwgbmlsKQogICAgICAgIGJyb2FkY2FzdCDin6hQUkVDT01NSVQsIGhfcCwgcm91bmRfcCwgbmlsLCBwcmVjb21taXRfZXh0ZW5zaW9u4p+pCiAgICAgICAgc3RlcF9wIOKGkCBwcmVjb21taXQKICAgIH0KfQo="}}),g._v(" "),C("h3",{attrs:{id:"receiving-enough-prevotes-to-precommit"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#receiving-enough-prevotes-to-precommit"}},[g._v("#")]),g._v(" Receiving enough prevotes to precommit")]),g._v(" "),C("p",[g._v("The following code is ran upon receiving 2f + 1 prevotes for the same block")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByb3VuZF9wLCB2LCAq4p+pCiAgZnJvbSBwcm9wb3NlcihoX3AsIHJvdW5kX3ApCiAgQU5EIDJmICsgMSDin6hQUkVWT1RFLCBoX3AsIHZyLCBpZCh2KeKfqSAKd2hpbGUgdmFsaWQodikg4oinIHN0ZXBfcCAmZ3Q7PSBwcmV2b3RlIGZvciB0aGUgZmlyc3QgdGltZSBkbyB7CiAgICBpZiAoc3RlcF9wID0gcHJldm90ZSkgewogICAgICAgIGxvY2tlZFZhbHVlX3Ag4oaQIHYKICAgICAgICBsb2NrZWRSb3VuZF9wIOKGkCByb3VuZF9wCiAgICAgICAgcHJvY2Vzc1Byb3Bvc2FsT3V0cHV0IOKGkCBKb2luIEFCQ0kuUHJvY2Vzc1Byb3Bvc2FsKGhfcCwgdikKICAgICAgICAvLyBJZiB0aGUgcHJvcG9zYWwgaXMgdmFsaWQgcHJlY29tbWl0IGFzIGJlZm9yZS4KICAgICAgICAvLyBJZiBpdCB3YXMgaW52YWxpZCwgcHJlY29tbWl0IG5pbC4KICAgICAgICAvLyBOb3RlIHRoYXQgQUJDSS5Qcm9jZXNzUHJvcG9zYWwoaF9wLCB2KS5hY2NlcHQgaXMgZGV0ZXJtaW5pc3RpYyBmb3IgYWxsIGhvbmVzdCBub2Rlcy4KICAgICAgICBwcmVjb21taXRfdmFsdWUg4oaQIG5pbAogICAgICAgIGlmIHByb2Nlc3NQcm9wb3NhbE91dHB1dC5hY2NlcHQgewogICAgICAgICAgICBwcmVjb21taXRfdmFsdWUg4oaQIGlkKHYpCiAgICAgICAgfQogICAgICAgIHByZWNvbW1pdF9leHRlbnNpb24g4oaQIEFCQ0kuRXh0ZW5kVm90ZShoX3AsIHJvdW5kX3AsIHByZWNvbW1pdF92YWx1ZSkKICAgICAgICBicm9hZGNhc3Qg4p+oUFJFQ09NTUlULCBoX3AsIHJvdW5kX3AsIHByZWNvbW1pdF92YWx1ZSwgcHJlY29tbWl0X2V4dGVuc2lvbuKfqQogICAgICAgIGZvciBldmlkZW5jZSBpbiBwcm9jZXNzUHJvcG9zYWxPdXRwdXQuZXZpZGVuY2VfbGlzdCB7CiAgICAgICAgICAgIGJyb2FkY2FzdCDin6hFVklERU5DRSwgZXZpZGVuY2Xin6kgCiAgICAgICAgfQoKICAgICAgICBzdGVwX3Ag4oaQIHByZWNvbW1pdAogICAgfQogICAgdmFsaWRWYWx1ZV9wIOKGkCB2CiAgICB2YWxpZFJvdW5kX3Ag4oaQIHJvdW5kX3AKfQo="}}),g._v(" "),C("p",[g._v("And upon receiving 2f + 1 prevotes for nil:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFVk9URSwgaF9wLCByb3VuZF9wLCBuaWzin6kgCiAgd2hpbGUgc3RlcF9wID0gcHJldm90ZSBkbyB7CiAgICAvLyBKb2luIEFCQ0kuUHJvY2Vzc1Byb3Bvc2FsLCBhbmQgYnJvYWRjYXN0IGFueSBldmlkZW5jZSBpZiBpdCBleGlzdHMuCiAgICBwcm9jZXNzUHJvcG9zYWxPdXRwdXQg4oaQIEpvaW4gQUJDSS5Qcm9jZXNzUHJvcG9zYWwoaF9wLCB2KQogICAgZm9yIGV2aWRlbmNlIGluIHByb2Nlc3NQcm9wb3NhbE91dHB1dC5ldmlkZW5jZV9saXN0IHsKICAgICAgICBicm9hZGNhc3Qg4p+oRVZJREVOQ0UsIGV2aWRlbmNl4p+pIAogICAgfQoKICAgIHByZWNvbW1pdF9leHRlbnNpb24g4oaQIEFCQ0kuRXh0ZW5kVm90ZShoX3AsIHJvdW5kX3AsIG5pbCkKICAgIGJyb2FkY2FzdCDin6hQUkVDT01NSVQsIGhfcCwgcm91bmRfcCwgbmlsLCBwcmVjb21taXRfZXh0ZW5zaW9u4p+pCiAgICBzdGVwX3Ag4oaQIHByZWNvbW1pdAp9Cg=="}}),g._v(" "),C("h3",{attrs:{id:"upon-receiving-a-precommit"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#upon-receiving-a-precommit"}},[g._v("#")]),g._v(" Upon receiving a precommit")]),g._v(" "),C("p",[g._v("Upon receiving a precommit "),C("code",[g._v("precommit")]),g._v(", we ensure that "),C("code",[g._v("ABCI.VerifyVoteExtension(precommit.precommit_extension) = true")]),g._v("\nbefore accepting the precommit. This is akin to how we check the signature on precommits normally, hence its not wrapped\nin the syntax of methods from the paper.")]),g._v(" "),C("h3",{attrs:{id:"precommit-timeout"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#precommit-timeout"}},[g._v("#")]),g._v(" Precommit timeout")]),g._v(" "),C("p",[g._v("Upon receiving 2f + 1 precommits, setup a timeout.")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiAyZiArIDEg4p+oUFJFQ09NTUlULCBoX3AsIHZyLCAq4p+pIGZvciB0aGUgZmlyc3QgdGltZSwgZG8gewogICAgc2NoZWR1bGUgT25UaW1lb3V0UHJlY29tbWl0KGhfcCwgcm91bmRfcCkgdG8gYmUgZXhlY3V0ZWQgYWZ0ZXIgdGltZW91dFByZWNvbW1pdChyb3VuZF9wKQp9Cg=="}}),g._v(" "),C("p",[g._v("with OnTimeoutPrecommit defined as:")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"ZGVmIE9uVGltZW91dFByZWNvbW1pdChoZWlnaHQsIHJvdW5kKSB7CiAgICBpZiAoaGVpZ2h0ID0gaF9wICZhbXA7JmFtcDsgcm91bmQgPSByb3VuZF9wKSB7CiAgICAgICAgU3RhcnRSb3VuZChyb3VuZF9wICsgMSkKICAgIH0KfQo="}}),g._v(" "),C("h3",{attrs:{id:"upon-receiving-2f-1-precommits"}},[C("a",{staticClass:"header-anchor",attrs:{href:"#upon-receiving-2f-1-precommits"}},[g._v("#")]),g._v(" Upon Receiving 2f + 1 precommits")]),g._v(" "),C("p",[g._v("The following code is ran upon receiving 2f + 1 precommits for the same block")]),g._v(" "),C("tm-code-block",{staticClass:"codeblock",attrs:{language:"go",base64:"dXBvbiDin6hQUk9QT1NBTCwgaF9wLCByLCB2LCAq4p+pCiAgZnJvbSBwcm9wb3NlcihoX3AsIHIpCiAgQU5EIDJmICsgMSDin6ggUFJFQ09NTUlULCBoX3AsIHIsIGlkKHYp4p+pIAogIHdoaWxlIGRlY2lzaW9uX3BbaF9wXSA9IG5pbCBkbyB7CiAgICBpZiAodmFsaWQodikpIHsKICAgICAgICBkZWNpc2lvbl9wW2hfcF0g4oaQIHYKICAgICAgICBoX3Ag4oaQIGhfcCArIDEKICAgICAgICByZXNldCBsb2NrZWRSb3VuZF9wLCBsb2NrZWRWYWx1ZV9wLHZhbGlkUm91bmRfcCBhbmQgdmFsaWRWYWx1ZV9wIHRvIGluaXRpYWwgdmFsdWVzCiAgICAgICAgQUJDSS5GaW5hbGl6ZUJsb2NrKGlkKHYpKQogICAgICAgIFN0YXJ0Um91bmQoMCkKICAgIH0KfQo="}}),g._v(" "),C("p",[g._v("If we don't see 2f + 1 precommits for the same block, we wait until we get 2f + 1 precommits, and the timeout occurs.")])],1)}),[],!1,null,null,null);c.default=o.exports}}]);