webpackJsonp([13],{XJpU:function(t,e){},nseO:function(t,e,s){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var a=s("afWL"),i=s("giHb"),r=(s("qI5z"),s("cPLa")),n={name:"report-mgr",data:()=>({value3:3,rtotal:0,psize:100,pnumb:1,keywords:"",repList:[]}),components:{sendReport:a.a,no:r.a},mounted(){this.getreportList()},methods:{getreportList(){this.$http.post("financial/reportService/reportList",{subData:{pageNum:this.pnumb,pageSize:this.psize}}).then(t=>{this.repList=t.data.data.list,this.rtotal=t.data.data.total})},delcj(t){let e=this;this.$mymsg(i.a,{data:{message:"确定删除此条报告吗？"},methods:{onOk(){e.$http.get("financial/reportService/deleteReport?qyId="+t.qy_id+"&year=2018").then(s=>{if(1!=s.data.code)e.$Message.error(s.data.msg);else{var a=e.repList.findIndex(function(e){return e.companyId==t.companyId});e.repList.splice(a,1)}})}}})},godetail(t,e){1==e?t.simple_url?window.open(t.simple_url):this.$http.get("financial/reportService/login/result2Html?type=1&year="+t.nf+"&companyId="+t.qy_id).then(e=>{if(1!=e.data.code)this.$Message.error(e.data.msg);else{var s=this.repList.findIndex(function(e){return e.qy_id==t.qy_id});this.repList[s].simple_url=e.data.data,window.open(e.data.data)}}):t.simple_summary_url?window.open(t.simple_summary_url):this.$http.get("financial/reportService/login/result2Html?type=2&year="+t.nf+"&companyId="+t.qy_id).then(e=>{if(1!=e.data.code)this.$Message.error(e.data.msg);else{var s=this.repList.findIndex(function(e){return e.qy_id==t.qy_id});this.repList[s].simple_summary_url=e.data.data,window.open(e.data.data)}})},change:function(t){console.log(t),this.pnumb=t,this.getreportList()},sendMsg(t){this.$mymsg(a.a,{data:{message:"you click me btn1",cids:t.qy_id,bbid:t.id,nf:t.nf,sendurl:t.pc_url},methods:{onOk(){}}})}}},o={render:function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("Row",{staticStyle:{"border-bottom":"2px solid #EEE","padding-bottom":"10px"}},[s("Col",{attrs:{span:"18"}},[s("div",{staticClass:"cpageTitle"},[s("Icon",{attrs:{size:"20",type:"ios-document"}}),s("span",[t._v("报告管理")])],1)]),t._v(" "),s("Col",{staticStyle:{"text-align":"right"},attrs:{span:"6"}},[s("Input",{attrs:{placeholder:"请输入公司名称"},model:{value:t.keywords,callback:function(e){t.keywords=e},expression:"keywords"}},[s("span",{attrs:{slot:"prepend"},slot:"prepend"},[s("Icon",{attrs:{type:"ios-search"}})],1),t._v(" "),s("span",{attrs:{slot:"append"},slot:"append"},[s("Button",{attrs:{type:"primary"}},[t._v("搜索")])],1)])],1)],1),t._v(" "),t._l(t.repList,function(e,a){return s("Row",{key:a,staticClass:"iv_row"},[s("Col",{attrs:{span:"1"}},[s("Icon",{staticStyle:{opacity:".2"},attrs:{size:"40",type:"ios-document"}})],1),t._v(" "),s("Col",{attrs:{span:"8"}},[s("div",{staticClass:"iv_info"},[s("h3",[t._v(t._s(e.report_name))]),t._v(" "),s("p",[t._v("公司名称："+t._s(e.company_name))]),t._v(" "),s("p")])]),t._v(" "),s("Col",{attrs:{span:"9"}},[s("Row",{staticClass:"yearc",attrs:{type:"flex",justify:"center"}},[s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"yearc_c"},[s("p",{staticClass:"t1"},[t._v("税负指标")]),t._v(" "),s("p",[s("Badge",{attrs:{status:"default",text:e.sf_value+"分"}})],1)])]),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"yearc_c"},[s("p",{staticClass:"t1"},[t._v("税源指标")]),t._v(" "),s("p",[s("Badge",{attrs:{status:"default",text:e.sy_value+"分"}})],1)])]),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"yearc_c"},[s("p",{staticClass:"t1"},[t._v("项目指标")]),t._v(" "),s("p",[s("Badge",{attrs:{status:"default",text:e.xm_value+"分"}})],1)])]),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"yearc_c"},[s("p",{staticClass:"t1"},[t._v("税收风险")]),t._v(" "),s("p",{},[s("Badge",{directives:[{name:"show",rawName:"v-show",value:e.zh_pf<=3,expression:"r.zh_pf<=3"}],attrs:{status:"success",text:"初级"}}),t._v(" "),s("Badge",{directives:[{name:"show",rawName:"v-show",value:e.zh_pf>3&&e.zh_pf<=7,expression:"r.zh_pf>3 && r.zh_pf<=7"}],attrs:{status:"warning",text:"中级"}}),t._v(" "),s("Badge",{directives:[{name:"show",rawName:"v-show",value:e.zh_pf>7,expression:"r.zh_pf>7"}],attrs:{status:"error",text:"高级"}})],1)])])],1)],1),t._v(" "),s("Col",{attrs:{span:"6"}},[s("div",{staticClass:"edits"},[s("Button",{attrs:{type:"primary",size:"small",ghost:""},on:{click:function(s){t.godetail(e,1)}}},[t._v("详情")]),t._v(" "),s("Button",{attrs:{type:"primary",size:"small",ghost:""},on:{click:function(s){t.godetail(e,2)}}},[t._v("总结报告")]),t._v(" "),s("Button",{attrs:{type:"success",size:"small",ghost:"",icon:"md-mail"},nativeOn:{click:function(s){t.sendMsg(e)}}},[t._v("发送报告")]),t._v(" "),s("Button",{attrs:{type:"error",ghost:"",size:"small"},on:{click:function(s){t.delcj(e)}}},[t._v("删除")])],1)])],1)}),t._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:t.repList.length>0,expression:"repList.length >0 "}],staticClass:"pager"},[s("Page",{attrs:{total:t.rtotal,current:t.pnumb,"page-size":t.psize,"show-total":""},on:{"on-change":t.change}})],1),t._v(" "),s("no",{directives:[{name:"show",rawName:"v-show",value:0==t.repList.length,expression:"repList.length == 0"}],attrs:{tipText:"暂无记录"}})],2)},staticRenderFns:[]};var p=s("VU/8")(n,o,!1,function(t){s("XJpU")},"data-v-df3da528",null);e.default=p.exports}});