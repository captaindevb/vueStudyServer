webpackJsonp([0],{IVMD:function(t,o){},k3Lc:function(t,o,e){"use strict";Object.defineProperty(o,"__esModule",{value:!0});var l=e("mvHQ"),n=e.n(l),a=e("Dd8w"),s=e.n(a),i={props:["modalForm","modalFile"],data:function(){return{}},created:function(){console.log("======form===="),console.log(this.modalForm),console.log("======form====")}},r={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("transition",{attrs:{name:"modal"}},[e("div",{staticClass:"modal-mask"},[e("div",{staticClass:"modal-wrapper"},[e("div",{staticClass:"modal-container"},[e("div",{staticClass:"modal-header"},[t._t("header",[t._v("\n              "+t._s(t.modalForm.subj)+"\n              "),e("hr")])],2),t._v(" "),e("div",{staticClass:"modal-body"},[t._t("body",[e("span",{staticClass:"contsProps"}),t._v(" "),e("img",{staticClass:"popupImg",attrs:{alt:"",src:t.modalFile}}),e("br")])],2),t._v(" "),e("div",{staticClass:"modal-footer"},[t._t("footer",[e("div",[e("el-checkbox")],1),t._v(" "),e("p"),t._v(" "),e("p")])],2),t._v(" "),e("el-button",{staticClass:"popupBtn",attrs:{type:"primary"},on:{click:function(o){t.$emit("close")}}},[t._v("닫기")])],1)])])])},staticRenderFns:[]};var c=e("VU/8")(i,r,!1,function(t){e("qMQS")},"data-v-7180c797",null).exports,m=e("NYxO"),u=e("mtWM"),f=e.n(u),p={components:{PopupModal:c},computed:s()({},Object(m.d)({showModal:function(t){return t.modal.showModal}})),data:function(){return{form:{subj:"",tp:"기본",conts:"",cnnt_url_yn:"",cnnt_url:""},fileList:[],modifyYn:!1,fileUrl:"",imgFile:"",tpOptions:[{value:"10",label:"기본"},{value:"20",label:"이용동의"},{value:"30",label:"이벤트"}],classChk:!1}},methods:s()({},Object(m.c)(["SET_MODAL"]),{onSubmit:function(){var t=new FormData;t.append("form",n()(this.form)),this.imgFile&&t.append("image",this.imgFile.raw),f.a.post("http://15.164.101.68:3000/popup",t).then(function(t){console.log("=======res====="),console.log(t.data),console.log("=======res=====")}).catch(function(t){return console.log(t)})},onUpdate:function(){},onCancel:function(){},onImgRemove:function(t,o){this.imgFile=""},onImgChange:function(t,o){console.log(t);var e=t.name,l=e.lastIndexOf(".");console.log("lastDot = ",l);var n=e.substring(l).toLowerCase();console.log("fileExt = ",n),".jpg"!==n&&".png"!==n&&".jpeg"!==n?(alert("JPG, PNG 파일만 업로드 가능합니다."),this.fileList=[]):this.imgFile=t}})},d={render:function(){var t=this,o=t.$createElement,e=t._self._c||o;return e("section",{staticClass:"detail"},[e("el-form",{attrs:{"label-width":"180px"}},[e("el-form-item",{attrs:{label:"제목",prop:"subj"}},[e("el-input",{model:{value:t.form.subj,callback:function(o){t.$set(t.form,"subj",o)},expression:"form.subj"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"파업구분"}},[e("el-select",{model:{value:t.form.tp,callback:function(o){t.$set(t.form,"tp",o)},expression:"form.tp"}},t._l(t.tpOptions,function(t){return e("el-option",{key:t.value,attrs:{label:t.label,value:t.value}})}),1)],1),t._v(" "),e("el-form-item",{directives:[{name:"show",rawName:"v-show",value:"20"===t.form.tp,expression:"form.tp === '20'"}],attrs:{label:"대체텍스트"}},[e("el-input",{model:{value:t.form.conts,callback:function(o){t.$set(t.form,"conts",o)},expression:"form.conts"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"바로가기"}},[e("el-radio-group",{model:{value:t.form.cnnt_url_yn,callback:function(o){t.$set(t.form,"cnnt_url_yn",o)},expression:"form.cnnt_url_yn"}},[e("el-radio",{attrs:{label:"사용"}}),t._v(" "),e("el-radio",{attrs:{label:"미사용"}})],1),t._v(" "),e("el-input",{attrs:{placeholder:"팝업 이미지 클릭시 이동할 URL을 입력하세요."},model:{value:t.form.cnnt_url,callback:function(o){t.$set(t.form,"cnnt_url",o)},expression:"form.cnnt_url"}})],1),t._v(" "),e("el-form-item",{attrs:{label:"이미지등록"}},[e("el-upload",{staticClass:"upload-demo",attrs:{disabled:"20"===t.form.tp,action:"",name:"file",multiple:!1,"on-remove":t.onImgRemove,"on-change":t.onImgChange,"auto-upload":!1,limit:1,"file-list":t.fileList,"list-type":"picture"}},[e("el-button",{attrs:{size:"small",type:"info"}},[t._v("파일업로드")]),t._v(" "),e("div",{class:["ex-1",{"ex-2":t.classChk}],attrs:{slot:"tip"},slot:"tip"},[t._v("※ JPG,PNG 파일만 업로드 가능합니다. 해상도는 400 X 600에 최적화 되어있습니다.")])],1)],1),t._v(" "),e("el-form-item",[e("el-button",{on:{click:function(o){t.classChk=!t.classChk}}},[t._v("CLASS TEST")])],1)],1),t._v(" "),e("div",{staticClass:"bottomBtns"},[t.modifyYn?t._e():e("el-button",{attrs:{type:"primary"},on:{click:function(o){t.onSubmit("form")}}},[t._v("등록")]),t._v(" "),t.modifyYn?e("el-button",{attrs:{type:"primary"},on:{click:function(o){t.onUpdate("form")}}},[t._v("수정")]):t._e(),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:t.onCancel}},[t._v("취소")]),t._v(" "),e("el-button",{attrs:{type:"primary"},on:{click:function(o){t.SET_MODAL(!0)}}},[t._v("미리보기")])],1),t._v(" "),t.showModal?e("popup-modal",{attrs:{modalForm:t.form,modalFile:t.fileUrl},on:{close:function(o){t.SET_MODAL(!1)}}}):t._e()],1)},staticRenderFns:[]};var v=e("VU/8")(p,d,!1,function(t){e("IVMD")},"data-v-cdf9483e",null);o.default=v.exports},mvHQ:function(t,o,e){t.exports={default:e("qkKv"),__esModule:!0}},qMQS:function(t,o){},qkKv:function(t,o,e){var l=e("FeBl"),n=l.JSON||(l.JSON={stringify:JSON.stringify});t.exports=function(t){return n.stringify.apply(n,arguments)}}});
//# sourceMappingURL=0.4d161ad0f33443b9a10a.js.map