webpackJsonp([3],{D1Vp:function(t,e,o){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r=o("aYpo"),a=o("mtWM"),l=o.n(a),n={components:{VueEditor:r.VueEditor},data:function(){return{popupId:this.$route.query.popupId,form:{subj:"",tp:"",createAt:"",filename:""}}},created:function(){var t=this;console.log("this.$route.query = ",this.$route.query),l.a.get("http://localhost:3000/popup/"+this.popupId).then(function(e){console.log(e);e.data.form.filename="http://localhost:3000/images/".concat(e.data.form.filename),t.form=e.data.form}).catch(function(t){console.log(t)}).finally(function(t){})},methods:{onDelete:function(){var t=this;l.a.delete("http://localhost:3000/popup/"+this.popupId,{}).then(function(e){t.$router.push("/popup/list"),console.log("삭제 성공!!!!!")}).catch(function(t){console.log(t)}).finally(function(t){})}}},s={render:function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("section",{staticClass:"detail"},[o("el-form",{ref:"form",attrs:{"label-width":"120px"}},[o("el-form-item",{attrs:{label:"제목"}},[o("el-input",{attrs:{readonly:""},model:{value:t.form.subj,callback:function(e){t.$set(t.form,"subj",e)},expression:"form.subj"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"구분","label-width":""}},[o("el-input",{attrs:{readonly:""},model:{value:t.form.tp,callback:function(e){t.$set(t.form,"tp",e)},expression:"form.tp"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"작성일"}},[o("el-input",{attrs:{readonly:""},model:{value:t.form.createdAt,callback:function(e){t.$set(t.form,"createdAt",e)},expression:"form.createdAt"}})],1),t._v(" "),o("el-form-item",{attrs:{label:"이미지"}},[o("img",{staticClass:"popupImg",staticStyle:{width:"100%"},attrs:{alt:"",src:t.form.filename}})])],1),t._v(" "),o("div",{staticClass:"bottomBtns"},[o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push("/popup/list")}}},[t._v("목록")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:function(e){t.$router.push({path:"/popup/register",query:{popupId:t.popupId}})}}},[t._v("수정")]),t._v(" "),o("el-button",{attrs:{type:"primary"},on:{click:t.onDelete}},[t._v("삭제")])],1)],1)},staticRenderFns:[]};var i=o("VU/8")(n,s,!1,function(t){o("cEnV")},"data-v-4ecc91da",null);e.default=i.exports},cEnV:function(t,e){}});
//# sourceMappingURL=3.3ae02bfbefd0d9947fc7.js.map