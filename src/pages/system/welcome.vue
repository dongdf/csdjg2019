<template>
    <div>
      <div class="wel_pro">
        <h3><span>欢迎使用企业税收健康检查系统</span></h3>
        <p>初次使用请按照如下步骤操作</p>
      </div>
      <div class="wel_setp">
        <Row>
          <Col span="5">
             <div class="quick_items" @click="gopage('addCompany')">
               <div class="qicon"><img src="./img/s1.jpg"> </div>
               <div class="qicon_text"><span>1.新建企业</span></div>

             </div>
          </Col>
          <Col span="1">
             <div class="wel_jt"><img src="./img/wel_jt.jpg"> </div>
          </Col>

          <Col span="5">
          <div class="quick_items"  @click="gopage('grade')">
            <div class="qicon"><img src="./img/s2.jpg"></div>
            <div class="qicon_text"><span>2.数据采集</span></div>

          </div>
          </Col>
          <Col span="1">
          <div class="wel_jt"><img src="./img/wel_jt.jpg"> </div>
          </Col>


          <Col span="5">
          <div class="quick_items"  @click="gopage('reportMgr')">
            <div class="qicon"><img src="./img/s3.jpg"></div>
            <div class="qicon_text"><span>3.生成报告</span></div>

          </div>
          </Col>
          <Col span="1">
          <div class="wel_jt"><img src="./img/wel_jt.jpg"> </div>
          </Col>


          <Col span="5">
          <div class="quick_items"  @click="gopage('reportMgr')">
            <div class="qicon"><img src="./img/s4.jpg"></div>
            <div class="qicon_text"><span>4.发送报告</span></div>

          </div>
          </Col>

        </Row>

      </div>




        <!--<p>初次使用请按照如下步骤操作</p>-->
        <div class="jiqiao">
          <h4>注意事项及使用技巧</h4>
          1. 请确保数据上传的完整性<br>
          2.如果无法上传，请对比模版进行比较确保格式与模版相符  <a target="_blank" :href="dzpi">【打包下载模版】</a><br>
          3.分析数据仅供参考<br>
          4. 请勿将报告发送给无关人员<br>

        </div>




    </div>
</template>

<script>
  import {DOWNZIP} from '../../constants'
  import md from '@/components/modals'
  export default {
    name: "welcome",
    data(){
      return{
        dzpi:'',
        userinfo:{}
      }
    },
    mounted(){
      this.dzpi = DOWNZIP;
      this.getuser();
    },
    methods:{
      getuser(){
        this.$http.post('financial/userService/getCurUser').then(res=>{
          this.userinfo = res.data;
          if(!this.userinfo.password){
            this.showtips();
          }


        })
      },
      showtips(){
        let that = this;
        this.$mymsg(md,{
          data: {
            message: '您还没有设置密码，点击确定去设置'
          },
          methods:{
            onOk(){
              that.$router.push({name:'editPas'});
            }
          }
        });
      },
      gopage(name){
          this.$router.push({name:name});
      }
    }
  }
</script>

<style lang="scss" scoped>
  .jiqiao{
    width:85%;
    margin:0 auto;
    border-radius: 5px;
    background:#f0faff;
    padding:20px;

    font-weight: normal;
    border:1px solid #EEE;
    font-size:16px;
    line-height: 35px;
    text-align: left;
    margin-top:35px;
    h4{
      font-size:16px;
    }
  }
  .wel_setp{
    width:90%;
    text-align: center;
    padding-top:30px;
    margin:0 auto;
  }
  .wel_jt{
    padding-top:40px;
    img{
      width:100%;
    }
  }
  .quick_items{
    cursor: pointer;
    /*transform: all ;*/

    .qicon{
      width:60px;
      height:60px;
      margin:0 auto;
      margin-bottom: 5px;
      transition:all .5s ;
      position: relative;
      top:0;
      img{
        width:80%;
        margin:0 auto;
      }

    }
    .qicon_text{
      span{
        transition:all .5s ;
        font-size:14px;
        padding:5px 30px;
        border-radius: 1000px;
        font-weight:normal;
        white-space: nowrap;
        background:#f0faff;


      }

    }

  }

  .quick_items:hover{

    .qicon{

      top:-5px;


    }
    .qicon_text{
      span{

        font-size:14px;
        padding:5px 30px;
        border-radius: 1000px;
        font-weight:normal;
        background: #08F;
        color:#FFF;


      }

    }

  }


  .wel_setp{
    padding:50px 0;
  }

  .wel_pro{
    text-align: center;
    font-weight: normal;
    padding:30px 0;
    h3{
      font-size:18px;
      color:#2d8cf0;
      padding:8px 15px;
      border-radius: 100px;
      background: #f0faff;
      width:60%;
      margin:0 auto;
    }
    h4{
      font-size:16px;
    }
    p{
      padding:5px;

      color:#666;
    }
  }
</style>
