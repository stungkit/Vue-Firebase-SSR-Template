webpackJsonp([0],{262:function(t,e,n){function s(t){n(266)}var a=n(121)(n(264),n(267),s,null,null);t.exports=a.exports},264:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default={asyncData:function(t){return t.store.dispatch("getTrueFacts")},computed:{trueFacts:function(){return this.$store.state.trueFacts}}}},265:function(t,e,n){e=t.exports=n(261)(void 0),e.push([t.i,"body{background:-o-radial-gradient(center,ellipse,#111 0,#212121 100%);background:radial-gradient(ellipse at center,#111 0,#212121 100%);color:#757575}.brand{display:-webkit-box;display:-ms-flexbox;display:flex;-webkit-box-align:center;-ms-flex-align:center;align-items:center;-webkit-box-pack:center;-ms-flex-pack:center;justify-content:center;color:#111;font-size:48px}.brand img{margin-right:10px;height:50px;width:50px}.description{text-align:center;font-style:italic;font-weight:100;color:#616161}.true-facts{list-style:none;padding:0 30px}.true-facts .fact{padding:10px 20px;border-bottom:2px dashed}",""])},266:function(t,e,n){var s=n(265);"string"==typeof s&&(s=[[t.i,s,""]]),s.locals&&(t.exports=s.locals);n(263)("581e8038",s,!0)},267:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"facts-page"},[t._m(0),n("h4",{staticClass:"description"},[t._v("Goofies Firebase Vue SSR Template")]),n("ul",{staticClass:"true-facts"},t._l(t.trueFacts,function(e){return n("li",{key:e,staticClass:"fact"},[t._v("\n      "+t._s(e)+"\n    ")])}))])},staticRenderFns:[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("h1",{staticClass:"brand"},[n("img",{attrs:{src:"/images/square.png",alt:""}}),t._v("Goofies")])}]}}});