webpackJsonp([5],{Mi7c:function(t,e){},NHnr:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("7+uW"),r={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{attrs:{id:"app"}},[e("router-view")],1)},staticRenderFns:[]};var i=n("VU/8")({name:"App"},r,!1,function(t){n("XEcX")},null,null).exports,a=n("/ocq"),l=(n("gVpZ"),n("uxEq"),n("gZMs"),n("lbHh")),c=n.n(l),s={data:function(){return{isLogin:c.a.get("token")}},methods:{logout:function(){c.a.remove("token"),location.reload()}}},u={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-menu",{staticClass:"navbar",attrs:{mode:"horizontal"}},[n("el-menu-item",{staticClass:"welcome-wrapper",attrs:{index:"1"}}),t._v(" "),n("el-dropdown",{staticClass:"avatar-container",attrs:{trigger:"click"}},[n("div",{staticClass:"avatar-wrapper"},[n("i",{staticClass:"el-icon-setting"}),t._v(" "),n("i",{staticClass:"el-icon-caret-bottom"})]),t._v(" "),n("el-dropdown-menu",{staticClass:"user-dropdown",attrs:{slot:"dropdown"},slot:"dropdown"},[n("el-dropdown-item",[n("router-link",{staticClass:"inlineBlock",attrs:{to:"/"}},[t._v("Home")])],1),t._v(" "),t.isLogin?n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:t.logout}},[t._v("LogOut")])]):n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:function(e){t.$router.push("/login")}}},[t._v("Login")])]),t._v(" "),t.isLogin?t._e():n("el-dropdown-item",{attrs:{divided:""}},[n("span",{staticStyle:{display:"block"},on:{click:function(e){t.$router.push("/registration")}}},[t._v("Join")])])],1)],1)],1)},staticRenderFns:[]};var d={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("el-scrollbar",{attrs:{"wrap-class":"scrollbar-wrapper"}},[n("el-menu",{attrs:{"show-timeout":200,"default-active":t.$route.path,mode:"vertical","background-color":"#304156","text-color":"#bfcbd9","active-text-color":"#409EFF"}},[n("el-menu-item",{attrs:{index:"0"},on:{click:function(e){t.$router.push("/")}}},[t._v("HOME")]),t._v(" "),n("el-menu-item",{attrs:{index:"1"}},[n("router-link",{attrs:{to:"/notice/list"}},[t._v("NOTICE")])],1),t._v(" "),n("el-menu-item",{attrs:{index:"2"}},[n("router-link",{attrs:{to:"/popup/register"}},[t._v("POPUP")])],1)],1)],1)},staticRenderFns:[]},f={components:{Navbar:n("VU/8")(s,u,!1,function(t){n("ZSIK")},"data-v-0dfb000f",null).exports,Sidebar:n("VU/8")({},d,!1,null,null,null).exports}},p={render:function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"app-wrapper"},[e("Sidebar",{staticClass:"sidebar-container"}),this._v(" "),e("div",{staticClass:"main-container"},[e("Navbar"),this._v(" "),e("section",{staticClass:"app-main"},[e("transition",{attrs:{name:"fade-transform",mode:"out-in"}},[e("router-view")],1)],1)],1)],1)},staticRenderFns:[]};var m=n("VU/8")(f,p,!1,function(t){n("s1q2")},null,null).exports,h={render:function(){var t=this.$createElement;return(this._self._c||t)("div",[this._v("\n  페이지를 찾을 수 없습니다\n")])},staticRenderFns:[]};var v=n("VU/8")({},h,!1,function(t){n("bFWL")},null,null).exports;o.default.use(a.a);var b=[{path:"/login",component:function(){return n.e(1).then(n.bind(null,"T+/8"))}},{path:"/",name:"HelloWorld",component:m,redirect:"/helloworld",children:[{path:"/helloworld",component:function(){return n.e(3).then(n.bind(null,"q/3a"))}}]},{path:"/notice",component:m,children:[{path:"list",name:"NoticeList",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"gVpZ"))},beforeEnter:function(t,e,n){console.log(t),console.log(e),c.a.get("token")?"/login"===t.path?n({path:"/"}):n():"/login"!==t.path?n({path:"/login"}):n()}},{path:"register",name:"NoticeRegister",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"gZMs"))}},{path:"detail",name:"NoticeDetail",component:function(){return new Promise(function(t){t()}).then(n.bind(null,"uxEq"))}}]},{path:"/popup",component:m,children:[{path:"register",name:"PopupRegister",component:function(){return n.e(0).then(n.bind(null,"k3Lc"))}}]},{path:"/",component:m,children:[{path:"registration",name:"Registration",component:function(){return n.e(2).then(n.bind(null,"KwhX"))}}]},{path:"*",component:v}],g=new a.a({routes:b}),_=n("zL8q"),y=n.n(_),k=(n("tvR6"),n("wUZ8")),w=n.n(k),x=(n("yh13"),n("NYxO")),$=(n("mtWM"),n("mof7")),E={state:{id:"",loading:!1},mutations:{SET_ID:function(t,e){t.id=e},SET_LOADING:function(t,e){t.loading=e}},actions:{Login:function(t,e){var n=t.commit;Object($.b)({userInfo:e}).then(function(t){console.log("============= res ========="),console.log(t),console.log("============= res ========="),n("SET_ID",t.data.body),c.a.set("token",t.data.body,{expires:1})}).catch(function(t){console.log(t),alert(t.response.data.error)}).finally(function(t){n("SET_LOADING",!1)})}}};o.default.use(x.a);var I=new x.a.Store({modules:{user:E,modal:{state:{showModal:!1},mutations:{SET_MODAL:function(t,e){t.showModal=e}}}}});o.default.use(y.a,{locale:w.a}),new o.default({el:"#app",router:g,store:I,render:function(t){return t(i)}})},XEcX:function(t,e){},ZSIK:function(t,e){},bFWL:function(t,e){},gVpZ:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("mtWM"),r=n.n(o),i=(n("lbHh"),{data:function(){return{noticeData:[],total:1,pageSize:10,currentPage:1}},created:function(){this.onList()},methods:{onList:function(){var t=this;r.a.get("http://15.164.101.68:3000/notice").then(function(e){console.log("========res========="),console.log(e),console.log("========res=========");var n=e.data.noticeData;t.total=n.length;var o=t.currentPage*t.pageSize,r=o-t.pageSize;console.log(o,r),t.noticeData=n.slice(r,o)}).catch(function(t){console.log(t)}).finally(function(t){})},onDetail:function(t){console.log(t),this.$router.push({path:"/notice/detail",query:{noticeId:t.row.id}})},onPageChange:function(t){this.onList()}}}),a={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",[n("el-table",{attrs:{data:t.noticeData}},[n("el-table-column",{attrs:{prop:"id",label:"No",width:"70",align:"center"}}),t._v(" "),n("el-table-column",{attrs:{prop:"subj",label:"제목","header-align":"center"},scopedSlots:t._u([{key:"default",fn:function(e){return[n("span",{staticClass:"link",on:{click:function(n){t.onDetail(e)}}},[t._v(t._s(e.row.subj))])]}}])}),t._v(" "),n("el-table-column",{attrs:{prop:"tp",align:"center",label:"구분",width:"150"}}),t._v(" "),n("el-table-column",{attrs:{prop:"createdAt",align:"center",label:"등록일",width:"220"}})],1),t._v(" "),n("el-pagination",{attrs:{layout:"prev, pager, next","page-size":t.pageSize,total:t.total,"current-page":t.currentPage},on:{"update:currentPage":function(e){t.currentPage=e},"current-change":t.onPageChange}}),t._v(" "),n("div",{staticClass:"bottomBtns"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push("/notice/register")}}},[t._v("공지사항 등록")])],1)],1)},staticRenderFns:[]},l=n("VU/8")(i,a,!1,null,null,null);e.default=l.exports},gZMs:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("aYpo"),r=n("mtWM"),i=n.n(r),a={components:{VueEditor:o.VueEditor},computed:{countTotal:function(){return console.log("==== COMPUTED ===="),this.bodyData.reduce(function(t,e){return t+e.count},0)}},data:function(){return{form:{subj:"",dpTp:"",init:[],conts:""},bodyData:[{id:1,count:2,name:"red"},{id:2,count:3,name:"green"},{id:3,count:5,name:"black"},{id:4,count:0,name:"white"},{id:5,count:6,name:"pink"}],noticeId:this.$route.query.noticeId}},created:function(){var t=this;this.noticeId&&i.a.get("http://localhost:3000/notice/"+this.noticeId).then(function(e){console.log(e),t.form=e.data.form,t.form.dpTp=e.data.form.tp,console.log("split = "+e.data.form.init.split(",")),t.form.init=e.data.form.init.split(",")}).catch(function(t){console.log(t)}).finally(function(t){})},methods:{onSubmit:function(){var t=this;console.log("======onSubmit======="),console.log(this.form),i()({method:"POST",url:"http://localhost:3000/notice",data:{form:this.form}}).then(function(e){console.log(e),t.$router.push({path:"/notice/detail",query:{noticeId:e.data.noticeId}})}).catch(function(t){}).finally(function(t){})},onModify:function(){var t=this;i.a.put("http://localhost:3000/notice/"+this.noticeId,{form:this.form}).then(function(e){console.log(e),t.$router.push({path:"/notice/detail",query:{noticeId:e.data.noticeId}})}).catch(function(t){console.log(t)}).finally(function(t){})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"detail"},[t._v("\n"+t._s(t.form)+"\n  "),n("el-form",{ref:"form",attrs:{"label-width":"150px",model:t.form}},[n("el-form-item",{attrs:{label:"제목"}},[n("el-input",{model:{value:t.form.subj,callback:function(e){t.$set(t.form,"subj",e)},expression:"form.subj"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"헤드라인 등록"}},[n("el-radio-group",{model:{value:t.form.dpTp,callback:function(e){t.$set(t.form,"dpTp",e)},expression:"form.dpTp"}},[n("el-radio",{attrs:{label:"헤드라인"}}),t._v(" "),n("el-radio",{attrs:{label:"일반"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"팝업개시 대상",prop:""}},[n("el-checkbox-group",{model:{value:t.form.init,callback:function(e){t.$set(t.form,"init",e)},expression:"form.init"}},[n("el-checkbox",{attrs:{label:"PC Web"}}),t._v(" "),n("el-checkbox",{attrs:{label:"Mobile Web"}}),t._v(" "),n("el-checkbox",{attrs:{label:"APP"}})],1)],1),t._v(" "),n("el-form-item",{attrs:{label:"내용"}},[n("vue-editor",{attrs:{id:"editor"},model:{value:t.form.conts,callback:function(e){t.$set(t.form,"conts",e)},expression:"form.conts"}})],1)],1),t._v(" "),n("ul",[t._l(t.bodyData,function(e,o){return n("li",{key:o},[t._v("\n      color: "+t._s(e.name)+", count: "+t._s(e.count)+" "),n("button",{on:{click:function(t){e.count++}}},[t._v("수량추가")]),t._v(" "),0===e.count?n("span",[t._v("Sold out")]):n("span",[t._v("In stock")])])}),t._v(" "),n("span",[t._v("total = "+t._s(t.countTotal))])],2),t._v(" "),n("div",{staticClass:"bottomBtns"},[t.noticeId?n("el-button",{attrs:{type:"primary"},on:{click:t.onModify}},[t._v("수정")]):n("el-button",{attrs:{type:"primary"},on:{click:t.onSubmit}},[t._v("등록")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push("/notice/list")}}},[t._v("취소")])],1)],1)},staticRenderFns:[]};var c=n("VU/8")(a,l,!1,function(t){n("uvnW")},null,null);e.default=c.exports},mof7:function(t,e,n){"use strict";n.d(e,"b",function(){return i}),n.d(e,"a",function(){return a});var o=n("mtWM"),r=n.n(o).a.create({baseURL:"http://15.164.101.68:3000",timeout:5e3}),i=function(t){return r.post("/login",t)},a=function(t){return r.post("/registration",t)}},s1q2:function(t,e){},tvR6:function(t,e){},uvnW:function(t,e){},uxEq:function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var o=n("aYpo"),r=n("mtWM"),i=n.n(r),a={components:{VueEditor:o.VueEditor},data:function(){return{noticeId:this.$route.query.noticeId,form:{subj:"",tp:"",createAt:"",conts:""}}},created:function(){var t=this;console.log("this.$route.query = ",this.$route.query),i.a.get("http://localhost:3000/notice/"+this.noticeId).then(function(e){console.log(e),t.form=e.data.form}).catch(function(t){console.log(t)}).finally(function(t){})},methods:{onDelete:function(){var t=this;i.a.delete("http://localhost:3000/notice/"+this.noticeId,{}).then(function(e){t.$router.push("/notice/list"),console.log("삭제 성공!!!!!")}).catch(function(t){console.log(t)}).finally(function(t){})}}},l={render:function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("section",{staticClass:"detail"},[n("el-form",{ref:"form",attrs:{"label-width":"120px"}},[n("el-form-item",{attrs:{label:"제목"}},[n("el-input",{attrs:{readonly:""},model:{value:t.form.subj,callback:function(e){t.$set(t.form,"subj",e)},expression:"form.subj"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"구분","label-width":""}},[n("el-input",{attrs:{readonly:""},model:{value:t.form.tp,callback:function(e){t.$set(t.form,"tp",e)},expression:"form.tp"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"작성일"}},[n("el-input",{attrs:{readonly:""},model:{value:t.form.createdAt,callback:function(e){t.$set(t.form,"createdAt",e)},expression:"form.createdAt"}})],1),t._v(" "),n("el-form-item",{attrs:{label:"내용"}},[n("el-input",{attrs:{readonly:""},domProps:{innerHTML:t._s(t.form.conts)}})],1)],1),t._v(" "),n("div",{staticClass:"bottomBtns"},[n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push("/notice/list")}}},[t._v("목록")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push({path:"/notice/register",query:{noticeId:t.noticeId}})}}},[t._v("수정")]),t._v(" "),n("el-button",{attrs:{type:"primary"},on:{click:t.onDelete}},[t._v("삭제")])],1)],1)},staticRenderFns:[]};var c=n("VU/8")(a,l,!1,function(t){n("Mi7c")},"data-v-d9ded142",null);e.default=c.exports},yh13:function(t,e){}},["NHnr"]);
//# sourceMappingURL=app.e08dda191e8960a16e95.js.map