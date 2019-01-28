<template>
  <div  >
    <div class="ivu-modal-mask" style=""></div>
    <div class="ivu-modal-wrap">
      <div class="ivu-modal gjpop">
        <div class="ivu-modal-content">
          <div class="ivu-modal-header gj_header">
            <div class="ivu-modal-header-inner gj_top">
                <div class="gj_img fl">
                  <img src="../../assets/imgs/tj_icon1.png">
                </div>
                <div class="gj_rate_info fl">
                  <div class="p1">财务处理得分 205分</div>
                  <div class="p2">基本  <label>140分</label>  功能<label>40分</label>  账套情况 <label>80分</label></div>
                </div>


            </div>
            <a class="ivu-modal-close"><i style="font-size:30px; color:#666"  @click="close2"   class="ivu-icon ivu-icon-ios-close"></i></a>
          </div>
          <div class="ivu-modal-body">
              <div class="gj_content">
                <div class="gj_rate_content">
                  <ul class="rate1">
                    <li>
                      <p class="t1"><Icon type="ios-easel" />基本项目（140分）</p>
                      <p class="t1_desc pleft">所负责账套数 140套  人均账套 120套</p>
                      <p class="t1_tips pleft">注  达到人均账套得100分，每多5套账加1分</p>
                    </li>

                    <li>
                      <p class="t1"><Icon type="ios-cube" />功能使用积分项 （40分）</p>
                      <p class="t1_desc t1_desch pleft">发票查验<span class="score">10分</span><label class="spans"><Button size="small" type="primary">打开</Button></label></p>
                      <p class="t1_desc t1_desch pleft">发票查验<span class="score">10分</span><label class="spans"><Button size="small" type="primary">打开</Button></label></p>
                      <p class="t1_desc t1_desch pleft">发票查验<span class="score">10分</span><label class="spans"><Button size="small" type="primary">打开</Button></label></p>
                      <p class="t1_desc t1_desch pleft">发票查验<span class="score">10分</span><label class="spans"><Button size="small" type="primary">打开</Button></label></p>


                    </li>

                    <li>
                      <p class="t1"><Icon type="md-bookmarks" />老板账号生成情况得分（80分）</p>
                      <p class="t1_desc pleft">生成老板账号的客户数：80  总客户数100</p>
                      <p class="t1_tips pleft">按照生成老板账号的客户比例评分 最多100分</p>


                    </li>



                  </ul>

                </div>


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
        orderNo:'',
        timer:null

      }
    },
    mounted(){

    },
    methods:{
      ok(){//回调
        this.$el.parentNode.removeChild(this.$el);
        if(typeof this.onOk === 'function'){
          this.onOk(this);
        }
      },
      close2(){
        // alert('')
        let that = this;
        this.$el.parentNode.removeChild(this.$el);
        clearInterval(that.timer)
      }

    }
  }
</script>

<style lang="scss" scoped>
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
