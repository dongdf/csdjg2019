<template>
  <div>
    <Row style="border-bottom:2px solid #EEE; padding-bottom: 10px;">
      <Col span="18">
      <div class="cpageTitle"><Icon size="20" type="ios-construct-outline" /><span>采集管理</span></div>
        <!--<Button type="primary" icon="plus-round" @click="add">新增教师</Button>-->
      </Col>
      <Col span="6" style="text-align: right">
      <Input placeholder="请输入公司名称" v-model="keyword">
      <span slot="prepend"><Icon type="ios-search"></Icon></span>
      <span slot="append">
                <Button type="primary" @click="search()" >搜索</Button>
            </span>
      </Input>
      </Col>
    </Row>

    <!--<Row class="iv_row_head">-->
      <!--<Col span="1">-->

      <!--</Col>-->
      <!--<Col span="8">-->
       <!--企业名称-->
      <!--</Col>-->
      <!--<Col span="9">-->
      <!--<center>年度</center>-->
      <!--</Col>-->

      <!--<Col span="6">-->
      <!--<center>操作</center>-->
      <!--</Col>-->
    <!--</Row>-->
    <Row class="iv_row" v-for="(o,idx) in cjlist" :key="idx">
      <Col span="1">
          <Icon size="40" style="opacity: .2" type="ios-albums" />
      </Col>
      <Col span="8">
      <div class="iv_info">
        <h3>{{o.companyName}}</h3>
        <p>{{o.companyType == 1?'企业会计准则企业':'小企业会计准则企业'}}</p>

        <p>
          <!--<Badge class-name="iv_sc" count="物理"></Badge>-->
          <!--<Badge class-name="iv_sc" count="物理"></Badge>-->
          <!--<Badge class-name="iv_sc" count="物理"></Badge>-->
          <!--<Badge class-name="iv_sc" count="物理"></Badge>-->
          <!--<Badge class-name="iv_sc" count="物理"></Badge>-->
        </p>
      </div>
      </Col>
      <Col span="9">
           <Row type="flex" class="yearc" justify="center">
             <Col span="8" v-for="(c,index) in o.uMap" :key="index">
              <div class="yearc_c">
                <p class="t1">{{c.year}}年度</p>
                <p><Badge status="success" :text="'已上传'+c.finish" /></p>
                <p v-show="(c.total - c.finish) != 0"><Badge status="error" :text="'未上传'+(c.total - c.finish)" /></p>
              </div>
             </Col>
             <!--<Col span="8">-->
             <!--<div class="yearc_c">-->
               <!--<p class="t1">2017年度</p>-->
               <!--<p><Badge status="success" text="需上传:5" /></p>-->
               <!--<p><Badge status="error" text="未上传:0" /></p>-->
             <!--</div>-->
             <!--</Col>-->
             <!--<Col span="8">-->
             <!--<div class="yearc_c">-->
               <!--<p class="t1">2018年度</p>-->
               <!--<p><Badge status="success" text="需上传:5" /></p>-->
               <!--<p><Badge status="error" text="未上传:0" /></p>-->
             <!--</div>-->
             <!--</Col>-->
           </Row>
      </Col>

      <Col span="6">
        <div class="edits">
          <Button type="primary" @click="edit(o)" size="small" ghost>编辑</Button>
          <Button  type="error" @click="delcj(o)" v-show="o.hasReport == 0"  ghost  size="small">删除</Button>
          <!--:disabled="o.unUploadTotal == 0?false:true"-->
          <span v-show="o.hasReport" style="color:green"><Icon type="md-checkmark-circle-outline" /><b style="font-weight: normal;">报告已生成</b></span>
          <Button ghost v-show="!o.hasReport" type="success"  size="small" @click="productIng(o)"  :disabled="o.requiredTotal == 0?false:true"   icon="ios-hammer">生成报告</Button>
        </div>
      </Col>
    </Row>

    <!--<Row class="iv_row">-->
      <!--<Col span="1">-->
      <!--<Icon size="40" style="opacity: .2" type="ios-albums" />-->
      <!--</Col>-->
      <!--<Col span="8">-->
      <!--<div class="iv_info">-->
        <!--<h3>神州易桥北京财税科技神州易桥北</h3>-->
        <!--<p>小会计准则</p>-->
        <!--<p>擅长教学</p>-->
        <!--<p>-->
          <!--&lt;!&ndash;<Badge class-name="iv_sc" count="物理"></Badge>&ndash;&gt;-->
          <!--&lt;!&ndash;<Badge class-name="iv_sc" count="物理"></Badge>&ndash;&gt;-->
          <!--&lt;!&ndash;<Badge class-name="iv_sc" count="物理"></Badge>&ndash;&gt;-->
          <!--&lt;!&ndash;<Badge class-name="iv_sc" count="物理"></Badge>&ndash;&gt;-->
          <!--&lt;!&ndash;<Badge class-name="iv_sc" count="物理"></Badge>&ndash;&gt;-->
        <!--</p>-->
      <!--</div>-->
      <!--</Col>-->
      <!--<Col span="11">-->
      <!--<Row type="flex" class="yearc" justify="center">-->
        <!--<Col span="8">-->
        <!--<div class="yearc_c">-->
          <!--<p class="t1">2016年度</p>-->
          <!--<p><Badge status="success" text="需上传:5" /></p>-->
          <!--<p><Badge status="error" text="未上传:5" /></p>-->
        <!--</div>-->
        <!--</Col>-->
        <!--<Col span="8">-->
        <!--<div class="yearc_c">-->
          <!--<p class="t1">2017年度</p>-->
          <!--<p><Badge status="success" text="需上传:5" /></p>-->
          <!--<p><Badge status="error" text="未上传:5" /></p>-->
        <!--</div>-->
        <!--</Col>-->
        <!--<Col span="8">-->
        <!--<div class="yearc_c">-->
          <!--<p class="t1">2018年度</p>-->
          <!--<p><Badge status="success" text="需上传:5" /></p>-->
          <!--<p><Badge status="error" text="未上传:5" /></p>-->
        <!--</div>-->
        <!--</Col>-->
      <!--</Row>-->
      <!--</Col>-->

      <!--<Col span="4">-->
      <!--<div class="edits">-->
        <!--<Button type="primary" size="small" >编辑</Button>-->
        <!--<Button  type="error"    size="small">删除</Button>-->
        <!--<Button  type="success"  size="small" disabled  icon="ios-hammer">生成报告</Button>-->
      <!--</div>-->
      <!--</Col>-->
    <!--</Row>-->


    <div class="pager" v-show="cjlist.length>0">
      <Page :total="rtotal" :current="pnumb" :page-size="psize" show-total @on-change="change" />
    </div>
    <no v-show="cjlist.length == 0" :tipText="'暂无记录'"></no>
  </div>
</template>

<script>
  import productReport from '@/pages/system/productReport.vue'
  import md from '@/components/modals'
  import no from '@/components/no'
  export default {
    name: "caiji-manager",
    components:{productReport,no},
    data(){
      return{
        rtotal:0,
        psize:100,
        pnumb:1,
        cjlist:[],
        keyword:''
      }

    },
    mounted(){
      this.getcjList();
    },
    methods:{
      change:function (page) {
        console.log(page);
        this.pnumb = page;
        this.getcjList();

      },
      search(){
        this.pnumb = 1;
        this.getcjList();
      },
      delcj(obj){

        let that = this;
        this.$mymsg(md,{
          data: {
            message: '确定删除此条记录？'
          },
          methods:{
            onOk(){
              that.$http.get('financial/bbService/cjglDelete?qyId='+obj.companyId).then(res=>{
                if(res.data.code !=1){
                  that.$Message.error(res.data.msg);
                }else{

                  var idx = that.cjlist.findIndex(function (item) {
                    return item.companyId == obj.companyId;
                  })
                  that.cjlist.splice(idx,1)

                }

              })
            }
          }
        });


      },
      edit(obj){
        let that = this;
        if(obj.hasReport == 0){
          that.$router.push({name:'grade',query:{edit:1,id:obj.companyId,cur:1}})
        }else{
          this.$mymsg(md,{
            data: {
              message: '编辑企业会将企业已生成的报告删除，继续操作请点击[确定]'
            },
            methods:{
              onOk(){

                that.$http.get('financial/reportService/deleteReport?qyId='+obj.companyId+'&year=2018').then(res=>{
                  that.$router.push({name:'grade',query:{edit:1,id:obj.companyId,cur:1}})
                })


              }
            }
          });
        }



      },
      isEdit(){

      },
      getcjList(){
        this.$http.get('financial/bbService/cjglList?pageSize='+this.psize+"&pageNo="+this.pnumb+"&keywords="+this.keyword).then(res=>{
          this.cjlist = res.data.data.list;
          this.rtotal = res.data.data.total;

        })
      },

      productIng(obj){
        let that = this;
        this.$mymsg(productReport,{
          data: {
            message: 'you click me btn1',
            qyId:obj.companyId
          },
          methods:{
            onOk(){
              alert('回调');
            },
            onBuy(){
              that.$router.push({name:'miyaoMgr'})
            },
            updateList(){
              that.getcjList();
            },
            viewbb(){
              alert('回调')
            }
          }
        });

      }
    }
  }
</script>

<style lang="scss" scoped>
  .iv_row_head{
    text-align:center;
    background:#E8ECF4;
    color:#666C8C;
    padding:8px 0;
    font-weight: normal;
  }

  .edits{
    text-align: left;
    padding-top:20px;
    button{
      margin:2px 0;
    }
  }
  .yearc{

    font-weight: normal;
    .yearc_c{
      .t1{
        padding:0 0 10px 0;
        font-weight: bold;
      }
    }
  }
  .iv_tearch_head{
    width:100%;
  }
  .iv_info{
    padding:0 20px;
    font-weight: normal;
  }
  .iv_sc{
    background: #5cb85c !important;
  }
  .iv_row {
    padding:10px 10px;
    border-bottom: 1px solid #EEE;
    margin-top:10px;
  }
  .iv_row:hover{
    background: #F8F8F8;
  }
  .iv_btn{
    padding:40px 20px 0 0;
    text-align: right;
  }
  .pager{
    text-align: center;
    padding:20px;
  }
</style>

