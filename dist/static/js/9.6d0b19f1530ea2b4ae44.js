webpackJsonp([9],{QdtJ:function(t,s){},mWTi:function(t,s){},sN7e:function(t,s){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAD0AAAAJCAYAAACBiSRSAAABS2lUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS42LWMxNDAgNzkuMTYwNDUxLCAyMDE3LzA1LzA2LTAxOjA4OjIxICAgICAgICAiPgogPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4KICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIi8+CiA8L3JkZjpSREY+CjwveDp4bXBtZXRhPgo8P3hwYWNrZXQgZW5kPSJyIj8+LUNEtwAAALlJREFUSIndlCEKAmEQhb9fFqPFIF7BIN7AQ8wBBLMiewG7RbzIs3oFi4gMiCAGLTarwWJYFxbd6Lq4X5t5DLzhwQvuzj8j6WNnZi2gKWmfd1Mr2lRJtIGdmc3NrPEuVvVpgAiIgaOZDcwspEJw9ykwLM1aMdRJ0s6yBkaSNsHdF8Dk975K4Q70I+AGnEs2823ykl4BY0mnUNH27gHb13gBYknLVK9ykT2AGdDJPgxJw1WRK9CVdMgTn4ugNKhOYJJGAAAAAElFTkSuQmCC"},uEhY:function(t,s,a){"use strict";var e=a("qI5z"),i={props:["tipText","uploadDone","bbid","qyid"],data:function(){return{file:null}},methods:{getFile:function(t){this.file=t.target.files[0],console.log(this.file),this.submitForm()},submitForm:function(t){var s=new FormData;s.append("bbId",this.bbid),s.append("qyId",this.qyid),s.append("file",this.file);var a=this;this.$Spin.show({render:function(t){return t("div",[t("Icon",{class:"demo-spin-icon-load",props:{type:"ios-loading",size:18}}),t("div","上传中,请稍后")])}}),this.$http.post(e.d+"financial/bbService/importData",s,{headers:{"Content-Type":"multipart/form-data"}}).then(function(t){a.$Spin.hide(),1!=t.data.code?(a.$refs.uploads.value="",alert(t.data.msg)):(a.$Message.success("上传成功"),a.$emit("updatelist"))},function(t){a.$Spin.hide(),a.$refs.uploads.value="",alert(t.data.message)})}}},n={render:function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("div",{staticStyle:{margin:"0 auto"}},[a("div",[a("form",{attrs:{"accept-charset":"GBK"}},[a("div",{staticClass:"ucontent"},[a("Button",{attrs:{type:"primary",ghost:"",size:"small"}},[a("Icon",{attrs:{type:"ios-cloud-upload"}}),t._v("\n          上传")],1),t._v(" "),a("input",{ref:"uploads",staticClass:"realfile",attrs:{type:"file",accept:".csv, application/vnd.openxmlformats-officedocument.spreadsheetml.sheet, application/vnd.ms-excel"},on:{change:function(s){t.getFile(s)}}})],1)])])])},staticRenderFns:[]};var c=a("VU/8")(i,n,!1,function(t){a("mWTi")},"data-v-364d8458",null);s.a=c.exports},ySHn:function(t,s,a){"use strict";Object.defineProperty(s,"__esModule",{value:!0});var e=a("uEhY"),i=a("xzgJ"),n=a("G7MN"),c=a("qI5z"),o={data:function(){return{cur:0,comid:"",companyList:[],selCompany:{},isableSelect:!0,bblist:[],editAttr:"",cid:"",cyear:""}},components:{sbsupload:e.a},mounted:function(){if(this.$route.query.cur&&(this.cur=parseInt(this.$route.query.cur)),this.$route.query.id){this.comid=this.$route.query.id,this.getCompanyInfo();this.comid;this.cid=this.comid,1==this.cur&&(this.cyear=2016),2==this.cur&&(this.cyear=2017),3==this.cur&&(this.cyear=2018),this.cur>0&&this.cur<4&&this.getlists(),this.$route.query.edit&&(this.isableSelect=!1,this.editAttr=1)}this.getCompanys()},methods:{opencj:function(){var t=c.e+"/ti_tool?lx="+this.selCompany.accountant_rule+"&company_flag="+this.selCompany.company_flag;window.open(t)},updatelist:function(){this.getlists()},getlists:function(){var t=this;this.$http.get("financial/bbService/bbList?qyId="+this.cid+"&year="+this.cyear).then(function(s){t.bblist=s.data.data})},addCompany:function(){var t=this;this.$mymsg(i.a,{data:{openType:1},methods:{onOk:function(){t.getCompanys()}}})},getCompanyInfo:function(){var t=this;this.$http.post("financial/companyService/infoCompany",{subData:this.comid}).then(function(s){t.selCompany=s.data.data})},getCompanys:function(){var t=this;this.$http.post("financial/companyService/list",{subData:{pageNum:1,pageSize:1e3,searchText:""}}).then(function(s){t.companyList=s.data.data.list})},productReport:function(){var t=this;this.$mymsg(n.a,{data:{message:"you click me btn1",qyId:t.comid},methods:{onOk:function(){alert("回调")},onBuy:function(){t.$router.push({name:"miyaoMgr"})},updateList:function(){},viewbb:function(){alert("回调")}}})},viewUploed:function(t){window.open(t.oss_url)},viewmb:function(t){window.open(t.bb_model)},changeSetp:function(t){if(!this.selCompany.id)return this.$Message.error("请选择企业"),!1;this.$router.push({name:"grade",query:{cur:t,id:this.selCompany.id,edit:this.editAttr}})}}},l={render:function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",[e("Row",{staticStyle:{"border-bottom":"2px solid #EEE","padding-bottom":"10px"}},[e("Col",{attrs:{span:"18"}},[e("div",{staticClass:"cpageTitle"},[e("Icon",{attrs:{size:"20",type:"md-color-wand"}}),e("span",[t._v("数据采集")])],1)]),t._v(" "),e("Col",{staticStyle:{"text-align":"right"},attrs:{span:"6"}})],1),t._v(" "),e("div",[e("Row",{staticClass:"newStep"},[e("Col",{attrs:{span:"4"}},[e("div",{staticClass:"setpItem ",class:0==t.cur?"setpCur":"",on:{click:function(s){t.changeSetp(0)}}},[e("div",{staticClass:"setpc"},[e("div",{staticClass:"icon icon1"},[e("i",[t._v("1")])]),t._v(" "),e("div",{staticClass:"icon_text"},[t._v("选择企业")])])])]),t._v(" "),e("Col",{attrs:{span:"1"}},[e("div",{staticClass:"jt"},[e("img",{attrs:{src:a("sN7e")}})])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("div",{staticClass:"setpItem",class:1==t.cur?"setpCur":"",on:{click:function(s){t.changeSetp(1)}}},[e("div",{staticClass:"setpc"},[e("div",{staticClass:"icon icon2"},[e("i",[t._v("2")])]),t._v(" "),e("div",{staticClass:"icon_text"},[t._v("2016年数据上传")])])])]),t._v(" "),e("Col",{attrs:{span:"1"}},[e("div",{staticClass:"jt"},[e("img",{attrs:{src:a("sN7e")}})])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("div",{staticClass:"setpItem",class:2==t.cur?"setpCur":"",on:{click:function(s){t.changeSetp(2)}}},[e("div",{staticClass:"setpc"},[e("div",{staticClass:"icon icon2"},[e("i",[t._v("3")])]),t._v(" "),e("div",{staticClass:"icon_text"},[t._v("2017年数据上传")])])])]),t._v(" "),e("Col",{attrs:{span:"1"}},[e("div",{staticClass:"jt"},[e("img",{attrs:{src:a("sN7e")}})])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("div",{staticClass:"setpItem",class:3==t.cur?"setpCur":"",on:{click:function(s){t.changeSetp(3)}}},[e("div",{staticClass:"setpc"},[e("div",{staticClass:"icon icon2"},[e("i",[t._v("4")])]),t._v(" "),e("div",{staticClass:"icon_text"},[t._v("2018年数据上传")])])])]),t._v(" "),e("Col",{attrs:{span:"1"}},[e("div",{staticClass:"jt"},[e("img",{attrs:{src:a("sN7e")}})])]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("div",{staticClass:"setpItem",class:4==t.cur?"setpCur":"",on:{click:function(s){t.changeSetp(4)}}},[e("div",{staticClass:"setpc"},[e("div",{staticClass:"icon icon5"},[e("i",[t._v("5")])]),t._v(" "),e("div",{staticClass:"icon_text"},[t._v("完成")])])])])],1)],1),t._v(" "),e("div",{staticClass:"stepcon"},[0==t.cur?e("div",{staticClass:"con0"},[e("br"),e("br"),e("br"),e("br"),t._v(" "),e("div",{staticClass:"companys"},[e("Form",{attrs:{"label-width":80}},[e("FormItem",{attrs:{label:"选择企业"}},[e("Select",{attrs:{disabled:!t.isableSelect},model:{value:t.selCompany.id,callback:function(s){t.$set(t.selCompany,"id",s)},expression:"selCompany.id"}},t._l(t.companyList,function(s,a){return e("Option",{key:a,attrs:{disabled:!s.ableDelete,value:s.id}},[t._v(t._s(s.company_name)+"\n             ")])}))],1)],1),t._v(" "),e("center",[e("Button",{attrs:{size:"large",type:"primary",disabled:!t.selCompany.id},on:{click:function(s){t.changeSetp(1)}}},[t._v("下一步")]),e("br"),e("br"),e("Button",{attrs:{type:"text"},on:{click:function(s){t.addCompany()}}},[t._v("没有企业？点此添加")])],1)],1)]):t._e(),t._v(" "),1==t.cur?e("div",{staticClass:"con1"},[e("div",{staticClass:"uptips"},[e("div",{staticClass:"selName"},[e("h3",[t._v(t._s(t.selCompany.company_name))]),t._v(" "),e("p",[e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.selCompany.accountant_rule,expression:"selCompany.accountant_rule == 1"}]},[t._v("企业会计准则企业")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.selCompany.accountant_rule,expression:"selCompany.accountant_rule == 2"}]},[t._v("小企业会计准则企业")])])]),t._v(" "),t._m(0),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"uptable"},t._l(t.bblist,function(s){return e("div",{staticClass:"rowsh"},[e("Row",{attrs:{gutter:20,type:"flex"}},[e("Col",{attrs:{span:"6"}},[t._v(t._s(s.bb_mc))]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("a",{staticClass:"downexl",on:{click:function(a){t.viewmb(s)}}},[t._v("模版下载")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[s.file_name?[e("Badge",{attrs:{status:"success",text:"已上传"}}),e("i",{staticClass:"viewexl",on:{click:function(a){t.viewUploed(s)}}},[e("a",[t._v(t._s(s.file_name))])])]:t._e(),t._v(" "),s.file_name?t._e():[e("Badge",{attrs:{status:"error",text:"未上传"}}),e("i",{staticClass:"viewexl"},[e("a",[t._v(t._s(s.file_name))])])]],2),t._v(" "),e("Col",{attrs:{span:"6"}},[e("sbsupload",{attrs:{uploadDone:!0,bbid:s.id,qyid:t.comid},on:{updatelist:t.updatelist}})],1)],1)],1)}))]),t._v(" "),e("br"),t._v(" "),e("center",[e("Button",{attrs:{type:"warning",size:"large"},on:{click:t.opencj}},[t._v("一键采集数据")]),t._v("    "),e("Button",{attrs:{type:"primary",size:"large"},on:{click:function(s){t.changeSetp(2)}}},[t._v("下一步")])],1)],1):t._e(),t._v(" "),2==t.cur?e("div",{staticClass:"con1"},[e("div",{staticClass:"uptips"},[e("div",{staticClass:"selName"},[e("h3",[t._v(t._s(t.selCompany.company_name))]),t._v(" "),e("p",[e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.selCompany.accountant_rule,expression:"selCompany.accountant_rule == 1"}]},[t._v("企业会计准则企业")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.selCompany.accountant_rule,expression:"selCompany.accountant_rule == 2"}]},[t._v("小企业会计准则企业")])])]),t._v(" "),t._m(1),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"uptable"},t._l(t.bblist,function(s){return e("div",{staticClass:"rowsh"},[e("Row",{attrs:{gutter:20,type:"flex"}},[e("Col",{attrs:{span:"6"}},[t._v(t._s(s.bb_mc))]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("a",{staticClass:"downexl",on:{click:function(a){t.viewmb(s)}}},[t._v("模版下载")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[s.file_name?[e("Badge",{attrs:{status:"success",text:"已上传"}}),e("i",{staticClass:"viewexl"},[e("a",{on:{click:function(a){t.viewUploed(s)}}},[t._v(t._s(s.file_name))])])]:t._e(),t._v(" "),s.file_name?t._e():[e("Badge",{attrs:{status:"error",text:"未上传"}}),e("i",{staticClass:"viewexl"},[e("a",[t._v(t._s(s.file_name))])])]],2),t._v(" "),e("Col",{attrs:{span:"6"}},[e("sbsupload",{attrs:{uploadDone:!0,bbid:s.id,qyid:t.comid},on:{updatelist:t.updatelist}})],1)],1)],1)}))]),t._v(" "),e("br"),t._v(" "),e("center",[e("Button",{attrs:{type:"warning",size:"large"},on:{click:t.opencj}},[t._v("一键采集数据")]),t._v("    "),e("Button",{attrs:{type:"primary",size:"large"},on:{click:function(s){t.changeSetp(3)}}},[t._v("下一步")])],1)],1):t._e(),t._v(" "),3==t.cur?e("div",{staticClass:"con1"},[e("div",{staticClass:"uptips"},[e("div",{staticClass:"selName"},[e("h3",[t._v(t._s(t.selCompany.company_name))]),t._v(" "),e("p",[e("span",{directives:[{name:"show",rawName:"v-show",value:1==t.selCompany.accountant_rule,expression:"selCompany.accountant_rule == 1"}]},[t._v("企业会计准则企业")]),t._v(" "),e("span",{directives:[{name:"show",rawName:"v-show",value:2==t.selCompany.accountant_rule,expression:"selCompany.accountant_rule == 2"}]},[t._v("小企业会计准则企业")])])]),t._v(" "),t._m(2),t._v(" "),e("br"),t._v(" "),e("div",{staticClass:"uptable"},t._l(t.bblist,function(s){return e("div",{staticClass:"rowsh"},[e("Row",{attrs:{gutter:20,type:"flex"}},[e("Col",{attrs:{span:"6"}},[t._v(t._s(s.bb_mc))]),t._v(" "),e("Col",{attrs:{span:"4"}},[e("a",{staticClass:"downexl",on:{click:function(a){t.viewmb(s)}}},[t._v("模版下载")])]),t._v(" "),e("Col",{attrs:{span:"8"}},[s.file_name?[e("Badge",{attrs:{status:"success",text:"已上传"}}),e("i",{staticClass:"viewexl"},[e("a",{on:{click:function(a){t.viewUploed(s)}}},[t._v(t._s(s.file_name))])])]:t._e(),t._v(" "),s.file_name?t._e():[e("Badge",{attrs:{status:"error",text:"未上传"}}),e("i",{staticClass:"viewexl"},[e("a",[t._v(t._s(s.file_name))])])]],2),t._v(" "),e("Col",{attrs:{span:"6"}},[e("sbsupload",{attrs:{uploadDone:!0,bbid:s.id,qyid:t.comid},on:{updatelist:t.updatelist}})],1)],1)],1)}))]),t._v(" "),e("br"),t._v(" "),e("center",[e("Button",{attrs:{type:"warning",size:"large"},on:{click:t.opencj}},[t._v("一键采集数据")]),t._v("    "),e("Button",{attrs:{type:"primary",size:"large"},on:{click:function(s){t.changeSetp(4)}}},[t._v("下一步")])],1)],1):t._e(),t._v(" "),4==t.cur?e("div",{staticClass:"con1"},[e("br"),e("br"),e("br"),e("br"),t._v(" "),e("div",{staticClass:"complete"},[e("h3",[e("Icon",{attrs:{type:"md-checkmark-circle-outline",size:"30",color:"#08F"}}),t._v("恭喜您完成填写")],1),t._v(" "),e("p",[t._v("请确保数据上传完整性")]),t._v(" "),e("p",[e("Button",{attrs:{size:"large",icon:"ios-hammer",type:"primary"},on:{click:t.productReport}},[t._v("马上生成评测报告")])],1)])]):t._e()])],1)},staticRenderFns:[function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"descs"},[this._v("请上传"),s("label",[this._v("2016年度")]),this._v("报表数据，如果已上传的文件有问题，请点击右侧重新上传即可")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"descs"},[this._v("请上传"),s("label",[this._v("2017年度")]),this._v("报表数据，如果已上传的文件有问题，请点击右侧重新上传即可")])},function(){var t=this.$createElement,s=this._self._c||t;return s("div",{staticClass:"descs"},[this._v("请上传"),s("label",[this._v("2018年度")]),this._v("报表数据，如果已上传的文件有问题，请点击右侧重新上传即可")])}]};var r=a("VU/8")(o,l,!1,function(t){a("QdtJ")},"data-v-29bd2d09",null);s.default=r.exports}});