<template>
  <div>
    <Row style="border-bottom:2px solid #EEE; padding-bottom: 10px;">
      <Col span="18">
      <div class="cpageTitle"><Icon size="20" type="md-add" /><span>添加企业</span></div>
      <!--<Button type="primary" icon="plus-round" @click="add">新增教师</Button>-->
      </Col>
      <Col span="6" style="text-align: right">
      <!--<Input placeholder="请输入公司名称" >-->
      <!--<span slot="prepend"><Icon type="ios-search"></Icon></span>-->
      <!--<span slot="append">-->
                <!--<Button type="primary">搜索</Button>-->
            <!--</span>-->
      <!--</Input>-->
      </Col>
    </Row>
    <div class="formdata">


    <Form ref="formValidate" :model="formItem" :rules="ruleValidate" :label-width="80">
      <FormItem label="企业名称" prop="companyName"
                :rules="{required: true,validator:valiCompany, trigger: 'blur'}"
      >
        <Input v-model="formItem.companyName" placeholder="请输入企业名称"></Input>
      </FormItem>
      <FormItem label="会计准则" prop="companyKjzz" >
        <Select v-model="formItem.companyKjzz">
          <Option value="1">企业会计准则企业</Option>
          <Option value="2">小企业会计准则企业</Option>
        </Select>
      </FormItem>
      <FormItem label="企业规模" prop="companyFlag" >
        <Select v-model="formItem.companyFlag">
          <Option value="1">一般纳税人</Option>
          <Option value="2">小规模</Option>
        </Select>
      </FormItem>


      <FormItem label="所属地区" prop="areas" :rules="{required: true,validator:valiArea, trigger: 'blur'}">
        <al-cascader  v-model="res_s"  level="1"/>
        <!--<Input v-model="formItem.areas"  placeholder="请选择地区"></Input>-->
        <!--{{res_s}}-->
      </FormItem>

      <FormItem label="所属行业" prop="selectHy" :rules="{required: true,validator:valiHangye, trigger: 'blur'}"  >
        <Button @click.native="chooseTree">点击选择</Button><span><b style="color:#08F; margin-left:10px;">{{pselectedTree.name?pselectedTree.name:''}}</b>&nbsp;&nbsp;<i style="font-weight: normal; color:#CCC;">选择行业计算更精准</i></span>
      </FormItem>



      <Row v-for="(item,index) in formItem.contactList" :key="index">
        <Col span="11">
        <FormItem label="联系人"
                  :prop="'contactList.' + index + '.contact_name'"
                  :rules="{required: true,validator:valiName, trigger: 'blur'}"
                     >
          <Input prefix="ios-contact" v-model="item.contact_name"    placeholder="请输入姓名" style="width: auto" />
        </FormItem>
        </Col>
        <Col span="11">
        <FormItem label="手机号"
                  :prop="'contactList.' + index + '.contact_phone'"
                  :rules="{required: true,validator:valiPhone, trigger: 'blur'}"
        >
          <Input prefix="md-phone-portrait" v-model="item.contact_phone"    placeholder="请输入手机号" style="width: auto" />
        </FormItem>
        </Col>
        <Col span="2">
        <Button type="text" @click.native = "delRows(index)" v-show="formItem.contactList.length>1">删除</Button>
        </Col>
      </Row>



      <FormItem>
        <Row>
          <Col span="12">
          <Button type="dashed" long @click="handleAdd" icon="md-add">增加联系人</Button>
          </Col>
        </Row>
      </FormItem>


      <FormItem>
        <Button @click="handleSubmit('formValidate')" type="primary" size="large">保存</Button>
        <Button  size="large" style="margin-left: 8px" @click="resetf('formValidate')">重置</Button>
      </FormItem>
    </Form>

    </div>

  </div>
</template>

<script>

  import Button from "iview/src/components/button/button";
  import treeComponent from "../../components/treeComponent"
  import Input from "iview/src/components/input/input";
  export default {
    components: {
      Input,
      Button},
    data () {

      return {
        res_s:[],
        openType:'',
        valiName:'',
        valiCompany:'',
        valiCity:[],
        valiPhone:'',
        valiArea:'',
        valiHangye:'',

        formItem: {
          companyName: '',
          areas:'',
          selectHy:'',
          companyKjzz: '',
          companyFlag:'',
          contactList:[
            {contact_name:'',contact_name:''}
          ]
        },
        pselectedTree:{},
        ruleValidate: {
          companyKjzz: [
            { required: true, message: '请选择会计准则', trigger: 'blur' }
          ],
          companyFlag: [
            { required: true, message: '请选择企业规模', trigger: 'blur' }
          ],

        },

      }
    },
    mounted(){
      let that = this;
      this.valiName = function(rule, value, callback){
        if(!value.trim()){
          return callback(new Error("请输入姓名"));
        }else{
          callback();
        }
      };
      this.valiPhone = function(rule, value, callback){
        let reg = /^(((14[0-9]{1})|(13[0-9]{1})|(16[0-9]{1})|(19[0-9]{1})|(17[0-9]{1})|(15[0-9]{1})|(18[0-9]{1}))+\d{8})$/;
        if(!value){
          return callback(new Error("请输入手机号"));
        }else if(!reg.test(value)){
          return callback(new Error("请正确的手机号"))
        }else{
          callback();
        }
      };
      this.valiCompany = function (rule, value, callback) {
        if(!value.trim()){
          return callback(new Error("请输入公司名称"));
        }else{
          callback();
        }
      }
      this.valiArea = function (rule, value, callback) {
        if(that.res_s.length == 0){
          return callback(new Error("请选择公司所在地区"));
        }else{
          callback();
        }
      }
      this.valiHangye = function (rule, value, callback) {
        if(!that.selectHy){
          return callback(new Error("请选择公司行业"));
        }else{
          callback();
        }
      }

    },
    methods:{
      chooseTree(){
        let that = this;
        this.$mymsg(treeComponent,{
          data: {
            message: '编辑企业会将企业已生成的报告删除，继续操作请点击[确定]'
          },
          methods:{
            onOk(){
              that.pselectedTree = this.selectedTree;
              that.selectHy = this.selectedTree;

              // that.$http.get('financial/reportService/deleteReport?qyId='+obj.companyId+'&year=2018').then(res=>{
              //   that.$router.push({name:'grade',query:{edit:1,id:obj.companyId,cur:1}})
              // })


            }
          }
        });

      },
      resetf(name){
        this.formItem = {
          companyName: '',
            companyKjzz: '',
            contactList:[
            {contact_name:'',contact_name:''}
          ]
        }
        this.$refs[name].resetFields();
      },
      handleSubmit(name){
        this.$refs[name].validate((valid) => {
          if (valid) {

            this.$http.post('financial/companyService/addCompany',{
              subData:{
                company_name:this.formItem.companyName,
                "accountant_rule":this.formItem.companyKjzz,
                "contactList":this.formItem.contactList,
                "industry_id":this.pselectedTree.id,
                "company_flag":this.formItem.companyFlag,//1  一般纳税人  2  小规模
                "area1":this.res_s[0].code,
                "area2":this.res_s[1].code
              }
            }).then(res=>{
              this.$Message.success('保存成功!');
              this.formItem= {
                companyName: '',
                  companyKjzz: '',
                  contactList:[
                  {contact_name:'',contact_name:''}
                ]
              }
            })

          } else {
            this.$Message.error('提交失败，请查看原因!');
          }
        })

      },
      handleAdd(){
        this.formItem.contactList.push({contact_name:'',contact_phone:''})
      },
      delRows(idx){
        this.formItem.contactList.splice(idx,1)

      }
    }
  }
</script>

<style lang="scss" scoped>

  .formdata{
    padding-top:80px;
    width:600px;

  }
</style>
