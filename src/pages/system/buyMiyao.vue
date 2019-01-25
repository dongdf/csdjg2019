<template>
  <div  >
    <div class="ivu-modal-mask" style=""></div>
    <div class="ivu-modal-wrap">
      <div class="ivu-modal" style="width: 420px; top:20%;">
        <div class="ivu-modal-content">
          <div class="ivu-modal-header loginbar">
            <div class="loginicon"><img src="../../assets/imgs/userImg.png"> </div>
            <div class="ivu-modal-header-inner"><Icon type="md-person" />请先登录...</div>
            <a class="ivu-modal-close"><i  style="color:#FFF"  @click="close"   class="ivu-icon ivu-icon-ios-close"></i></a>
          </div>
          <div class="ivu-modal-body">
            <div class="loginc">
              <Form ref="passLogin" :model="passForm" :rules="passLoginRule">
                <FormItem prop="phone">
                  <Input type="text" size="large" v-model="passForm.phone"  placeholder="请输入手机号">
                  <Icon type="md-phone-portrait" slot="prepend" />
                  </Input>
                </FormItem>
                <FormItem prop="password">
                  <Input type="password"  size="large" v-model="passForm.password"  v-on:keyup.enter.native="handleSubmit('passLogin')"    placeholder="密码">
                  <Icon type="md-key" slot="prepend" />
                  </Input>
                </FormItem>

                <FormItem>
                  <Button type="primary" size="large" @click="handleSubmit('passLogin')" long >登录</Button>
                </FormItem>
              </Form>

            </div>





          </div>
        </div>
      </div>
    </div>

  </div>
</template>

<script>
  export default {
    name: "buy-miyao",
    data(){
      return{
        actives:1,
        timer:120,
        isSend:false,
        sendText:'',
        codeForm: {
          phone: '',
          phoneCode: ''
        },
        codeLoginRule: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          phoneCode: [
            { required: true, message: '请输入验证码', trigger: 'blur' },
          ]
        },
        passForm: {
          phone: '',
          password: ''
        },
        passLoginRule: {
          phone: [
            { required: true, message: '请输入手机号', trigger: 'blur' }
          ],
          password: [
            { required: true, message: '请输入密码', trigger: 'blur' },
          ]
        }
      }
    },
    mounted(){


    },
    methods:{


      sendSMS(){
        if(!this.$options.filters.isphone(this.codeForm.phone)){
          this.$Message.info('手机号格式错误')
          return false;
        }
        if(this.isSend){
          return false;
        }
        this.isSend = true;
        this.sendText=this.timer+"S后重新发送"
        this.$http.post('financial/userService/login/sendSMS',
          {
            subData:{
              mobile:this.codeForm.phone
            }
          }).then(res=>{

          if(res.data.code !=1){
            this.isSend = false;
            this.$Message.info(res.data.msg)
          }else{
            var  t = setInterval(()=>{
              this.timer--;
              this.sendText=this.timer+"S后重新发送"
              if(this.timer == 1){
                this.isSend = false;
                clearInterval(t);
              }

            },1000)

          }
        })
      },
      changeLogin(idx){
        this.actives = idx;
      },
      handleSubmit(name) {
        if(name == 'codeLogin'){

          this.$refs[name].validate((valid) => {//验证码登录
            if (valid) {
              this.$http.post('financial/userService/login/loginUser',{
                subData:{
                  mobile:this.codeForm.phone,
                  code:this.codeForm.phoneCode
                }
              }).then(res=>{
                if(res.data.code!=1){
                  this.$Message.error(res.data.msg);
                }else {
                  localStorage.setItem('user',this.codeForm.phone);
                  localStorage.setItem('sid',res.data.data);
                  if(res.data.data == 1){
                    this.$router.push({name:'main'});
                  }else{
                    this.$router.push({name:'reportMgrAdmin'});
                  }

                }
              })


            } else {
              this.$Message.error('登录失败!');
            }
          })

        }else{//账户密码登录

          this.$refs[name].validate((valid) => {
            if (valid) {
              this.$http.post('financial/userService/login/loginByPassword',{
                subData:{
                  mobile:this.passForm.phone,
                  password:this.passForm.password
                }
              }).then(res=>{
                if(res.data.code!==1){
                  this.$Message.error(res.data.msg);
                }else {

                  localStorage.setItem('user',this.passForm.phone);
                  localStorage.setItem('sid',res.data.data);

                  if(res.data.data == 1){
                    this.$router.push({name:'main'});
                  }else{
                    this.$router.push({name:'reportMgrAdmin'});
                  }
                }
              })


            } else {
              this.$Message.error('登录失败!');
            }
          })

        }

      },
      cancle(){
        this.$el.parentNode.removeChild(this.$el);
      },
      ok(){//回调
        this.$el.parentNode.removeChild(this.$el);
        if(typeof this.onOk === 'function'){
          // this.onOk(this,this.formC.keyNumb);
        }
      }
    }
  }
</script>

<style lang="scss" scoped>
  .loginbar{
    position: relative;
    .loginicon{
      width:80px;
      height:80px;
      margin:0 auto;
      position: absolute;
      left:50%;
      bottom: -20px;
      margin-left:-40px;
      img{
        width:100%;
        /*box-shadow: 0 0 3px #CCC;*/
      }
    }
    height:100px;
    border-top-left-radius:6px;
    border-top-right-radius:6px;
    border:none;
    background:url("../../assets/imgs/loginbar_bg.png") no-repeat center;
    background-size: 100%;
    color:#FFF;
    .ivu-modal-header-inner{
      color:#FFF;
    }
    .ivu-modal-close{
      color:#FFF;
    }
  }
  .loginc{
    padding:20px 50px;
  }
  .tcitem{
    overflow: hidden;
    border:1px solid #19be6b;
    border-radius: 3px;
    cursor: pointer;
    margin:10px 5px;
    padding:8px 0;
    position: relative;
    text-align: center;
    h3{


    }
    color:#19be6b;
    p{ opacity: .7}
    .jiaobiao {
      width:70px;
      height:20px;
      background: #F60;
      color:#FFF;
      position: absolute;
      top: 5px;
      right: -21px;
      transform:rotate(45deg);
    }

  }
  .tcitem:hover{
    background: #19be6b;
    color:#FFF;
    box-shadow: 0 0 5px #DDD;
  }
  .buyctn{
    padding:5px 10% 10px 10%;
    .heji{
      b{
        color:red;
      }
    }
  }
  .buyden{
    text-align: center;
    padding:10px 0;
  }
</style>
