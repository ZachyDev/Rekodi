(function(e){function t(t){for(var n,s,o=t[0],d=t[1],c=t[2],u=0,p=[];u<o.length;u++)s=o[u],Object.prototype.hasOwnProperty.call(r,s)&&r[s]&&p.push(r[s][0]),r[s]=0;for(n in d)Object.prototype.hasOwnProperty.call(d,n)&&(e[n]=d[n]);l&&l(t);while(p.length)p.shift()();return i.push.apply(i,c||[]),a()}function a(){for(var e,t=0;t<i.length;t++){for(var a=i[t],n=!0,o=1;o<a.length;o++){var d=a[o];0!==r[d]&&(n=!1)}n&&(i.splice(t--,1),e=s(s.s=a[0]))}return e}var n={},r={app:0},i=[];function s(t){if(n[t])return n[t].exports;var a=n[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,s),a.l=!0,a.exports}s.m=e,s.c=n,s.d=function(e,t,a){s.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},s.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},s.t=function(e,t){if(1&t&&(e=s(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(s.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var n in e)s.d(a,n,function(t){return e[t]}.bind(null,n));return a},s.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return s.d(t,"a",t),t},s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},s.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],d=o.push.bind(o);o.push=t,o=o.slice();for(var c=0;c<o.length;c++)t(o[c]);var l=d;i.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0a89":function(e,t,a){},"0acf":function(e,t,a){"use strict";var n=a("0a89"),r=a.n(n);r.a},"2b1c":function(e,t,a){},"2bfb":function(e,t,a){"use strict";var n=a("2b1c"),r=a.n(n);r.a},"56d7":function(e,t,a){"use strict";a.r(t);a("e260"),a("e6cf"),a("cca6"),a("a79d");var n=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("router-view")],1)},i=[],s=a("2877"),o={},d=Object(s["a"])(o,r,i,!1,null,null,null),c=d.exports,l=a("8c4f"),u=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"home"},[a("nav",{staticClass:"navbar navbar-expand-lg navbar-light"},[a("span",{staticStyle:{"font-size":"33px","margin-top":"-10px"}},[e._v(" Rekodi Meetings")]),e._m(0),a("div",{staticClass:"collapse navbar-collapse",attrs:{id:"navbarText"}},[a("ul",{staticClass:"navbar-nav mr-auto"}),a("span",{staticClass:"navbar-text"},[a("i",{staticClass:"fas fa-plus",staticStyle:{color:"#fff"}},[a("router-link",{staticStyle:{"text-decoration":"none",color:"#fff"},attrs:{to:{name:"AddRecord"}}},[e._v("Add Record")])],1)])])]),e._l(e.meetings,(function(t){return a("div",{key:t.id,staticClass:"card border-primary mb-3"},[a("i",{staticClass:"material-icons delete",attrs:{id:"del"},on:{click:function(a){return e.deleteMeeting(t.id)}}},[e._v("delete")]),a("div",{staticClass:"card-header",staticStyle:{"text-transform":"uppercase"}},[e._v(e._s(t.type))]),a("div",{staticClass:"card-body text-primary"},[a("h5",{staticClass:"card-title"},[e._v("Department: "+e._s(t.department))]),a("p",{staticClass:"card-text"},[e._v("Summary: "+e._s(t.summary))]),a("p",{staticClass:"card-text"},[e._v("Attendees: "+e._s(t.attendees))]),a("p",{staticClass:"card-text"},[e._v("Date: "+e._s(t.date))])]),a("span",{staticClass:"btn-floating btn-large halfway-fab pink"},[a("router-link",{attrs:{to:{name:"EditRecord",params:{edit:t.id}}}},[a("i",{staticClass:"material-icons edit"},[e._v("edit")])])],1)])}))],2)},p=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("button",{staticClass:"navbar-toggler bg-light",attrs:{type:"button","data-toggle":"collapse","data-target":"#navbarText","aria-controls":"navbarText","aria-expanded":"false","aria-label":"Toggle navigation"}},[a("span",{staticClass:"navbar-toggler-icon"})])}],m=(a("4de4"),a("4160"),a("159b"),a("3ac8")),f=a.n(m),v=(a("10b8"),{apiKey:"AIzaSyCXXI7MVz3ucGSWeH7z5Edb8KdTEzN9brY",authDomain:"rekodii.firebaseapp.com",databaseURL:"https://rekodii.firebaseio.com",projectId:"rekodii",storageBucket:"rekodii.appspot.com",messagingSenderId:"824804778703",appId:"1:824804778703:web:ca12b6bd7fb5695e060dba"}),b=f.a.initializeApp(v),g=b.firestore(),y={name:"Home",data:function(){return{meetings:[]}},methods:{deleteMeeting:function(e){var t=this;g.collection("r_meetings").doc(e).delete().then((function(){t.meetings=t.meetings.filter((function(t){return t.id!==e}))}))}},created:function(){var e=this;g.collection("r_meetings").get().then((function(t){t.forEach((function(t){var a=t.data();a.id=t.id,e.meetings.push(a)}))}))}},h=y,_=(a("2bfb"),Object(s["a"])(h,u,p,!1,null,"2d7efb88",null)),x=_.exports,C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"add-meeting container"},[a("h2",{staticClass:"center-align indigo-text"},[e._v("Add New Meeting Record")]),a("form",{on:{submit:function(t){return t.preventDefault(),e.AddRecord(t)}}},[a("div",{staticClass:"field title"},[a("label",{attrs:{for:"type"}},[e._v("Meeting Type:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.type,expression:"type"}],attrs:{type:"text",name:"type"},domProps:{value:e.type},on:{input:function(t){t.target.composing||(e.type=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"dept"}},[e._v("Department:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.dept,expression:"dept"}],attrs:{type:"text",name:"dept"},domProps:{value:e.dept},on:{input:function(t){t.target.composing||(e.dept=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"attendees"}},[e._v("Attendees:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.attendees,expression:"attendees"}],attrs:{type:"number",name:"attendees"},domProps:{value:e.attendees},on:{input:function(t){t.target.composing||(e.attendees=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"summary"}},[e._v("Summary:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.summary,expression:"summary"}],attrs:{type:"text",name:"summary"},domProps:{value:e.summary},on:{input:function(t){t.target.composing||(e.summary=t.target.value)}}})]),a("div",[a("label",{attrs:{for:"date"}},[e._v("Date:")]),a("input",{directives:[{name:"model",rawName:"v-model",value:e.date,expression:"date"}],attrs:{type:"date",name:"date"},domProps:{value:e.date},on:{input:function(t){t.target.composing||(e.date=t.target.value)}}})]),a("div",{staticClass:"field center-align"},[e.feedback?a("p",{staticClass:"align-center"},[e._v(e._s(e.feedback))]):e._e(),a("button",{staticClass:"btn pink"},[e._v("Add Record")])])])])},w=[],k={name:"AddRecord",data:function(){return{type:"",dept:"",attendees:"",summary:"",date:"",feedback:""}},methods:{AddRecord:function(){var e=this;this.type&&this.dept&&this.attendees&&this.summary&&this.date&&g.collection("r_meetings").add({type:this.dept,attendees:this.attendees,department:this.dept,summary:this.summary}).then((function(){e.$router.push({name:"Home"})})).catch("failed to add record!")}}},O=k,j=(a("0acf"),Object(s["a"])(O,C,w,!1,null,"79272c80",null)),S=j.exports,R=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"edit container"},[a("h1",[e._v("Edit record / "+e._s(e.route))])])},A=[],E={name:"EditRecord",data:function(){return{route:this.$route.params.edit}}},P=E,M=Object(s["a"])(P,R,A,!1,null,"e94de41e",null),T=M.exports;n["a"].use(l["a"]);var $=[{path:"/",name:"Home",component:x},{path:"/add-record",name:"AddRecord",component:S},{path:"/edit-record/:edit",name:"EditRecord",component:T}],N=new l["a"]({mode:"history",base:"/",routes:$}),z=N;n["a"].config.productionTip=!1,new n["a"]({router:z,render:function(e){return e(c)}}).$mount("#app")}});
//# sourceMappingURL=app.1a0b1a06.js.map