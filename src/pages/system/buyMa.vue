<template>
  <div  >
    <div class="ivu-modal-mask" style=""></div>
    <div class="ivu-modal-wrap">
      <div class="ivu-modal" style="width: 520px; ">
        <div class="ivu-modal-content"><a class="ivu-modal-close"><i style="font-size:30px; color:#666"  @click="close2"   class="ivu-icon ivu-icon-ios-close"></i></a>
          <div class="ivu-modal-header">
            <div class="ivu-modal-header-inner">账务处理能力</div>
          </div>
          <div class="ivu-modal-body">
              <div style="height:350px;">asdfsafsad</div>
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
      let that = this;
      this.timer = setInterval(()=>{
        this.$http.post('financial/orderService/payOrderResult',{
          subData:this.orderNo
        }).then(res=>{
          if(res.data.code == 1){
            clearInterval(that.timer)
            that.ok();
          }else if(res.data.code == 3 || res.data.code == 4){
            location.reload()
          }else{

          }

        })
      },1000)

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
