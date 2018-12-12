(function(e){function t(t){for(var i,a,r=t[0],o=t[1],u=t[2],p=0,v=[];p<r.length;p++)a=r[p],l[a]&&v.push(l[a][0]),l[a]=0;for(i in o)Object.prototype.hasOwnProperty.call(o,i)&&(e[i]=o[i]);c&&c(t);while(v.length)v.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],i=!0,r=1;r<n.length;r++){var o=n[r];0!==l[o]&&(i=!1)}i&&(s.splice(t--,1),e=a(a.s=n[0]))}return e}var i={},l={app:0},s=[];function a(t){if(i[t])return i[t].exports;var n=i[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,a),n.l=!0,n.exports}a.m=e,a.c=i,a.d=function(e,t,n){a.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},a.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},a.t=function(e,t){if(1&t&&(e=a(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(a.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var i in e)a.d(n,i,function(t){return e[t]}.bind(null,i));return n},a.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return a.d(t,"a",t),t},a.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},a.p="/";var r=window["webpackJsonp"]=window["webpackJsonp"]||[],o=r.push.bind(r);r.push=t,r=r.slice();for(var u=0;u<r.length;u++)t(r[u]);var c=o;s.push([0,"chunk-vendors"]),n()})({0:function(e,t,n){e.exports=n("56d7")},"034f":function(e,t,n){"use strict";var i=n("64a9"),l=n.n(i);l.a},"36f4":function(e,t,n){},"424d":function(e,t,n){"use strict";var i=n("8fb1"),l=n.n(i);l.a},"56d7":function(e,t,n){"use strict";n.r(t);n("cadf"),n("551c"),n("097d");var i=n("2b0e"),l=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{attrs:{id:"app"}},[n("nav",[n("router-link",{attrs:{to:"/"}},[e._v("Home")]),n("router-link",{attrs:{to:"/about"}},[e._v("About")])],1),n("router-view")],1)},s=[],a=function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{staticClass:"hello"},[n("div",{staticClass:"holder"},[n("form",{on:{submit:function(t){return t.preventDefault(),e.addSkill(t)}}},[n("input",{directives:[{name:"model",rawName:"v-model",value:e.skill,expression:"skill"},{name:"validate",rawName:"v-validate",value:"min:5",expression:"'min:5'"}],attrs:{type:"text",placeholder:"Enter a skill you have..",name:"skill"},domProps:{value:e.skill},on:{input:function(t){t.target.composing||(e.skill=t.target.value)}}}),n("transition",{attrs:{name:"alert-in","enter-active-class":"animated flipInX","leave-active-class":"animated flipOutX"}},[e.errors.has("skill")?n("p",{staticClass:"alert"},[e._v(e._s(e.errors.first("skill")))]):e._e()])],1),n("ul",e._l(e.skills,function(t,i){return n("li",{key:i},[e._v("\n          "+e._s(t.skill)+"\n          "),n("i",{staticClass:"fa fa-minus-circle",on:{click:function(t){e.remove(i)}}})])})),n("p",[e._v("These are the skills I possess.")])])])},r=[],o={name:"Skills",data:function(){return{skill:"",skills:[{skill:"Html5"},{skill:"CSS3"},{skill:"Sass"},{skill:"Javascript"},{skill:"React"},{skill:"Vue.js"},{skill:"Php"},{skill:"Redux"},{skill:"Node.js"},{skill:"Express"},{skill:"git"},{skill:"REST"},{skill:"Mongo"}]}},methods:{addSkill:function(){var e=this;this.$validator.validateAll().then(function(t){t?(e.skills.push({skill:e.skill}),e.skill=""):console.log("Not valid")})},remove:function(e){this.skills.splice(e,1)}}},u=o,c=(n("424d"),n("2877")),p=Object(c["a"])(u,a,r,!1,null,"47c52d25",null);p.options.__file="Skills.vue";var v=p.exports,f={name:"skills",components:{Skills:v}},d=f,m=(n("034f"),Object(c["a"])(d,l,s,!1,null,null,null));m.options.__file="App.vue";var k=m.exports,_=n("7bb1"),h=n("8c4f"),b=function(){var e=this,t=e.$createElement;e._self._c;return e._m(0)},g=[function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"about"},[i("img",{attrs:{src:n("f774"),alt:""}}),i("h1",[e._v("About this app..")]),i("p",[e._v(" This app is actually my first app in "),i("strong",[e._v("vue")]),e._v(". I developed a strong interest to learn vue\n   after realising how powerful it is and also how similar it is to "),i("strong",[e._v("react")]),e._v(" which i already know ")]),i("p",[e._v("Basically what this app does is enable me to keep a record of my "),i("strong",[e._v("skills")]),e._v(". It's actually a very \n  basic app but i still think it's a good starting point to develop my skills in vue ")]),i("p",[e._v("I was able to implement concepts like "),i("i",[e._v("Interpolation")]),e._v(","),i("i",[e._v("routing")]),e._v(","),i("i",[e._v("Linting")]),e._v("... just to name a few.")]),i("p",[e._v("While I enjoy using plain  "),i("strong",[e._v("Css")]),e._v(" media queries to make simple sites like this "),i("i",[e._v("responsive")]),e._v(",\n  ")]),i("p"),i("p")])}],y=(n("7f7f"),{name:"About",data:function(){return{their_name:this.$route.params.name}}}),w=y,j=(n("b8ab"),Object(c["a"])(w,b,g,!1,null,null,null));j.options.__file="About.vue";var x=j.exports;i["a"].use(h["a"]);var S=new h["a"]({routes:[{path:"/",name:"skills",component:v},{path:"/about",name:"about",component:x}]});i["a"].use(_["a"]),i["a"].config.productionTip=!1,new i["a"]({router:S,render:function(e){return e(k)}}).$mount("#app")},"64a9":function(e,t,n){},"8fb1":function(e,t,n){},b8ab:function(e,t,n){"use strict";var i=n("36f4"),l=n.n(i);l.a},f774:function(e,t,n){e.exports=n.p+"img/about.3a28d1af.png"}});
//# sourceMappingURL=app.60f23ba9.js.map