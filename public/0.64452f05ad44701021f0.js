webpackJsonp([0],{261:function(t,e,n){var s=n(121)(n(264),n(265),null,null,null);t.exports=s.exports},264:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={asyncData:function(t){return t.store.dispatch("getTestData")},computed:{testData:function(){return this.$store.state.testData}}}},265:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("h1",[t._v("Goofies Firebase Vue SSR Template")]),t._v("\n  "+t._s(t.testData)+"\n")])},staticRenderFns:[]}}});