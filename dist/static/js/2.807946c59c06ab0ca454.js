webpackJsonp([2],{DETx:function(e,t,s){e.exports=s.p+"static/img/books.10a4153.png"},Eewh:function(e,t,s){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o={data:function(){return{actives:1,timer:120,isSend:!1,sendText:"",codeForm:{phone:"",phoneCode:""},codeLoginRule:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],phoneCode:[{required:!0,message:"请输入验证码",trigger:"blur"}]},passForm:{phone:"",password:""},passLoginRule:{phone:[{required:!0,message:"请输入手机号",trigger:"blur"}],password:[{required:!0,message:"请输入密码",trigger:"blur"}]}}},mounted:function(){},methods:{sendSMS:function(){var e=this;return this.$options.filters.isphone(this.codeForm.phone)?!this.isSend&&(this.isSend=!0,this.sendText=this.timer+"S后重新发送",void this.$http.post("financial/userService/login/sendSMS",{subData:{mobile:this.codeForm.phone}}).then(function(t){if(1!=t.data.code)e.isSend=!1,e.$Message.info(t.data.msg);else var s=setInterval(function(){e.timer--,e.sendText=e.timer+"S后重新发送",1==e.timer&&(e.isSend=!1,clearInterval(s))},1e3)})):(this.$Message.info("手机号格式错误"),!1)},changeLogin:function(e){this.actives=e},handleSubmit:function(e){var t=this;"codeLogin"==e?this.$refs[e].validate(function(e){e?t.$http.post("financial/userService/login/loginUser",{subData:{mobile:t.codeForm.phone,code:t.codeForm.phoneCode}}).then(function(e){1!=e.data.code?t.$Message.error(e.data.msg):(localStorage.setItem("user",t.codeForm.phone),localStorage.setItem("sid",e.data.data),1==e.data.data?t.$router.push({name:"main"}):t.$router.push({name:"reportMgrAdmin"}))}):t.$Message.error("登录失败!")}):this.$refs[e].validate(function(e){e?t.$http.post("financial/userService/login/loginByPassword",{subData:{mobile:t.passForm.phone,password:t.passForm.password}}).then(function(e){1!==e.data.code?t.$Message.error(e.data.msg):(localStorage.setItem("user",t.passForm.phone),localStorage.setItem("sid",e.data.data),1==e.data.data?t.$router.push({name:"main"}):t.$router.push({name:"reportMgrAdmin"}))}):t.$Message.error("登录失败!")})}}},n={render:function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("div",{staticClass:"loginbg"},[e._m(0),e._v(" "),s("div",{staticClass:"logincontent"},[e._m(1),e._v(" "),s("div",{staticClass:"logintitle"},[s("ButtonGroup",[s("i-button",{staticClass:"ivu-btn",class:1==e.actives?"ivu-btn-primary":"",on:{click:function(t){e.changeLogin(1)}}},[e._v("短信验证码登录")]),e._v(" "),s("i-button",{class:2==e.actives?"ivu-btn-primary":"",on:{click:function(t){e.changeLogin(2)}}},[e._v("用户名密码登录")])],1)],1),e._v(" "),s("div",{staticClass:"loginbox"},[s("div",{directives:[{name:"show",rawName:"v-show",value:1==e.actives,expression:"actives == 1"}]},[s("Form",{ref:"codeLogin",attrs:{model:e.codeForm,rules:e.codeLoginRule}},[s("FormItem",{attrs:{prop:"phone"}},[s("Input",{attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.codeForm.phone,callback:function(t){e.$set(e.codeForm,"phone",t)},expression:"codeForm.phone"}},[s("Icon",{attrs:{slot:"prepend",type:"md-phone-portrait"},slot:"prepend"})],1)],1),e._v(" "),s("FormItem",{attrs:{prop:"phoneCode"}},[s("Input",{attrs:{type:"text",placeholder:"请输入验证码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleSubmit("codeLogin")}},model:{value:e.codeForm.phoneCode,callback:function(t){e.$set(e.codeForm,"phoneCode",t)},expression:"codeForm.phoneCode"}},[s("Icon",{attrs:{slot:"prepend",type:"ios-mail"},slot:"prepend"}),e._v(" "),s("Button",{directives:[{name:"show",rawName:"v-show",value:!e.isSend,expression:"!isSend"}],attrs:{slot:"append"},on:{click:e.sendSMS},slot:"append"},[e._v("获取验证码")]),e._v(" "),s("span",{directives:[{name:"show",rawName:"v-show",value:e.isSend,expression:"isSend"}],attrs:{slot:"append"},slot:"append"},[e._v(e._s(e.sendText))])],1)],1),e._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(t){e.handleSubmit("codeLogin")}}},[e._v("登录")])],1)],1)],1),e._v(" "),s("div",{directives:[{name:"show",rawName:"v-show",value:2==e.actives,expression:"actives == 2"}]},[s("Form",{ref:"passLogin",attrs:{model:e.passForm,rules:e.passLoginRule}},[s("FormItem",{attrs:{prop:"phone"}},[s("Input",{attrs:{type:"text",placeholder:"请输入手机号"},model:{value:e.passForm.phone,callback:function(t){e.$set(e.passForm,"phone",t)},expression:"passForm.phone"}},[s("Icon",{attrs:{slot:"prepend",type:"md-phone-portrait"},slot:"prepend"})],1)],1),e._v(" "),s("FormItem",{attrs:{prop:"password"}},[s("Input",{attrs:{type:"password",placeholder:"密码"},nativeOn:{keyup:function(t){if(!("button"in t)&&e._k(t.keyCode,"enter",13,t.key,"Enter"))return null;e.handleSubmit("passLogin")}},model:{value:e.passForm.password,callback:function(t){e.$set(e.passForm,"password",t)},expression:"passForm.password"}},[s("Icon",{attrs:{slot:"prepend",type:"md-key"},slot:"prepend"})],1)],1),e._v(" "),s("FormItem",[s("Button",{attrs:{type:"primary",size:"large",long:""},on:{click:function(t){e.handleSubmit("passLogin")}}},[e._v("登录")])],1)],1)],1)])]),e._v(" "),s("div",{staticClass:"bottomc"},[e._v("\n    Copyright © 2016-2019 All Right Reserved.财合税(北京)信息技术有限公司版权所有 京ICP备18027406号\n  ")])])},staticRenderFns:[function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"loginAd"},[t("div",{staticClass:"adcontent"},[t("img",{attrs:{src:s("DETx")}})])])},function(){var e=this.$createElement,t=this._self._c||e;return t("div",{staticClass:"login_banner"},[t("div",{staticClass:"login_logo fl"},[t("img",{attrs:{src:s("Vpqn")}})]),this._v(" "),t("div",{staticClass:"login_text fl"},[t("h3",[this._v("用户登录")]),this._v(" "),t("p",[this._v("欢迎使用企业税收健康检查系统")])]),this._v(" "),t("div",{staticClass:"cl"})])}]};var a=s("VU/8")(o,n,!1,function(e){s("MxRa")},"data-v-b3f14b6c",null);t.default=a.exports},MxRa:function(e,t){},Vpqn:function(e,t,s){e.exports=s.p+"static/img/logo.2002942.png"}});