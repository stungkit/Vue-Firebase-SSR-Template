webpackJsonp([2],{117:function(t,e){t.exports={"/":{title:"Vue.js 2 Material Component Framework",description:"My Vuetify.js Project",keywords:"vue 2.0, vuetify"}}},118:function(t,e,n){"use strict";function a(t){var e=n.i(d.a)(),a=n.i(l.a)();return n.i(m.sync)(e,a),{app:new u.a({router:a,store:e,ssrContext:t,render:function(t){return t(s.a)}}),router:a,store:e}}e.a=a;var o=n(208),r=n.n(o),i=n(27),u=n.n(i),c=n(254),s=n.n(c),f=n(199),p=n(200),d=n(206),l=n(203),m=n(258);n.n(m);r()(f.a).forEach(function(t){u.a.component(t,f.a[t])}),r()(p.a).forEach(function(t){u.a.component(t,p.a[t])})},196:function(t,e,n){"use strict";function a(t){var e=t.config;return r.a.initializeApp(e),r.a}e.a=a;var o=n(249),r=n.n(o)},197:function(t,e,n){"use strict";(function(t){n.d(e,"a",function(){return o});var a=n(196),o=(t.env.DEBUG_API,n.i(a.a)({config:{apiKey:"AIzaSyCrz78jQd0gtCL9yhuO9xhb4I3hi7N-Sgs",authDomain:"goofies-vue-template.firebaseapp.com",databaseURL:"https://goofies-vue-template.firebaseio.com",projectId:"goofies-vue-template",storageBucket:"goofies-vue-template.appspot.com",messagingSenderId:"1056039060834"}}))}).call(e,n(62))},198:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(119),o=n.n(a),r=n(27),i=(n.n(r),n(120)),u=(n.n(i),n(118)),c=n.i(u.a)(),s=c.app,f=c.router,p=c.store;window.__INITIAL_STATE__&&p.replaceState(window.__INITIAL_STATE__),f.onReady(function(){f.beforeResolve(function(t,e,n){var a=f.getMatchedComponents(t),r=f.getMatchedComponents(e),i=!1,u=a.filter(function(t,e){return i||(i=r[e]!==t)});if(!u.length)return n();o.a.all(u.map(function(e){if(e.asyncData)return e.asyncData({store:p,route:t})})).then(function(){n()}).catch(n)}),s.$mount("#app")})},199:function(t,e,n){"use strict";e.a={}},200:function(t,e,n){"use strict";e.a={}},201:function(t,e,n){"use strict";var a=n(117);e.a={watch:{$route:function(){this.setMeta()}},created:function(){return},mounted:function(){this.setMeta()},methods:{setMeta:function(){if("undefined"!=typeof document){var t=a[this.$route.path]||{};document.title=t.title,document.querySelector('meta[name="description"]').setAttribute("content",t.description),document.querySelector('meta[name="keywords"]').setAttribute("content",t.keywords)}}}}},202:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=n(201);e.default={mixins:[a.a],data:function(){return{}}}},203:function(t,e,n){"use strict";(function(t){function a(t,e){return{path:t,meta:c[t],component:function(t){return n(260)("./"+e+"View.vue").then(t)}}}function o(){var e=new u.a({base:t,mode:"history",scrollBehavior:function(){return{y:0}},routes:[a("/","Welcome"),{path:"*",redirect:"/"}]});return e.beforeEach(function(t,e,n){"undefined"!=typeof ga&&(ga("set","page",t.path),ga("send","pageview")),n()}),e}e.a=o;var r=n(27),i=n.n(r),u=n(256),c=n(117);i.a.use(u.a)}).call(e,"/")},204:function(t,e,n){"use strict";var a=n(197);e.a={getTestData:function(t){var e=t.commit;return a.a.database().ref("test").once("value").then(function(t){e("setTestData",t.val())})}}},205:function(t,e,n){"use strict";e.a={}},206:function(t,e,n){"use strict";function a(){return new i.a.Store({state:{testData:""},actions:u.a,mutations:c.a,getters:s.a})}e.a=a;var o=n(27),r=n.n(o),i=n(259),u=n(204),c=n(207),s=n(205);r.a.use(i.a)},207:function(t,e,n){"use strict";e.a={setTestData:function(t,e){t.testData=e}}},245:function(t,e){},254:function(t,e,n){function a(t){n(245)}var o=n(121)(n(202),n(255),a,null,null);t.exports=o.exports},255:function(t,e){t.exports={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[n("router-view")],1)},staticRenderFns:[]}},260:function(t,e,n){function a(t){var e=o[t];return e?n.e(e[1]).then(function(){return n(e[0])}):Promise.reject(new Error("Cannot find module '"+t+"'."))}var o={"./WelcomeView.vue":[261,0]};a.keys=function(){return Object.keys(o)},t.exports=a,a.id=260}},[198]);