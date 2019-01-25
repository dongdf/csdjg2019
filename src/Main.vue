<style scoped lang="scss">
  .layout {

    background: #f5f7f9;
    position: relative;

    overflow: hidden;
    height: 100%;
    font-weight: bold;
  }

  .layout-logo {
    color: #FFF;
    height: 30px;
    float: left;
    position: relative;
    font-size: 1rem;
  }

  .layout-nav {
    float: right;
    margin: 0 auto;
    margin-right: 20px;
    color: #FFF;
    font-weight: normal;
  }
  .userinfos{
    padding: 25px 25px;
    position: relative;
    width: 200px;
  a{
    position: absolute;
    top:25px;
    right:10px;
  }


  border-bottom:1px dashed #dcdee2;
  background:#FFF;

  }
  .ivu-menu-vertical.ivu-menu-light:after{
    background: none;
  }
  .leftbar{
    background:#FFF;
  }
  .leftbar:after{
    content: '';
    display: block;
    width: 1px;
    height: 100%;
    background: #dcdee2;
    position: absolute;
    top: 0;
    bottom: 0;
    right: -1px;
    z-index: 1;

  }

</style>
<template>
  <div class="layout">

      <!--<Header>-->
        <!--<Menu mode="horizontal" theme="dark" active-name="1">-->
          <!--<div class="layout-logo">-->

            <!--<Icon type="ios-apps" size="25" />-->
            <!--企业税收健康检查系统-->
             <!--|  <Icon @click="gohome()" size="25" type="md-home" />-->
          <!--</div>-->
          <!--<div class="layout-nav">-->

            <!--<span> <Icon size="18" type="person"></Icon>您好， {{userinfo.mobile}}</span> <span> </span>-->
            <!--| <span style="cursor:pointer;" @click="loginOut()"><Icon type="log-out"></Icon>退出</span>-->

          <!--</div>-->
        <!--</Menu>-->
      <!--</Header>-->
      <Layout :style="{height:'100%'}">
        <Sider    class="leftbar" :style="{width: '200px'}"  >
          <div class="userinfos">您好,{{userinfo.mobile}}<a @click="loginOut()">[退出]</a></div>
          <!--<Menu theme="light" width="auto"  >-->
            <!--<Submenu name="551">-->
              <!--<template slot="title">-->
                <!--<Icon type="ios-navigate"></Icon>-->
                <!--测试模块-->
              <!--</template>-->
              <!--<MenuItem @click.native="jump('main')" name="551-1">欢迎页</MenuItem>-->
              <!--<MenuItem @click.native="jump('test')" name="551-1">弹层及回调</MenuItem>-->
            <!--</Submenu>-->
          <!--</Menu>-->
          <!--<Menu theme="light"  width="auto" >-->
            <!--<Submenu :name="key" :key="key" v-for="(menu,key) in menus">-->
              <!--<template slot="title">-->
                <!--<Icon :type="menu.icon"></Icon>-->
                <!--{{menu.itemName}}-->
              <!--</template>-->
              <!--<MenuItem @click.native="jump(m.namesrc)" v-for="(m,sonkey) in menu.subSonItem" :key="sonkey" :name="key+'_'+sonkey">{{m.name}}</MenuItem>-->
            <!--</Submenu>-->
          <!--</Menu>-->

          <!--<i-Menu ref="side_menu" theme="light"  width="200px" >-->
            <!--<MenuGroup :title="menu.itemName" :name="key" :key="key" v-for="(menu,key) in menus">-->
              <!--<MenuItem  @click.native="jump(m.namesrc)" v-for="(m,sonkey) in menu.subSonItem" :class="m.cked?'1':'22'"  :key="sonkey" :name="m.nameIdx">-->
                <!--<Icon :type="m.icon" />-->
                <!--{{m.name}}{{m.cked}}-->
              <!--</MenuItem>-->

            <!--</MenuGroup>-->

          <!--</i-Menu>-->
          <ul data-v-3ffae6b2="" class="ivu-menu ivu-menu-light ivu-menu-vertical" style="width: 200px;">

            <li data-v-3ffae6b2="" class="ivu-menu-item-group"   :name="key" :key="key" v-for="(menu,key) in menus">
              <div class="ivu-menu-item-group-title">{{menu.itemName}}</div>
              <ul>

                <!--:class="m.cked?'ivu-menu-item-active ivu-menu-item-selected':''"-->
                <li  @click="jump(m.namesrc)" v-for="(m,sonkey) in menu.subSonItem"  data-v-3ffae6b2="" class="ivu-menu-item" :class="m.cked?'ivu-menu-item-active ivu-menu-item-selected':''"  >
                  <Icon :type="m.icon" />
                  {{m.name}}
                </li>
              </ul>
            </li>

          </ul>

        </Sider>
        <Layout :style="{padding: '0 14px 14px',margin:'10px 0 0 0'}">
          <!--<Breadcrumb :style="{margin: '24px 0'}">-->
          <!--<BreadcrumbItem>Home</BreadcrumbItem>-->
          <!--<BreadcrumbItem>Components</BreadcrumbItem>-->
          <!--<BreadcrumbItem>Layout</BreadcrumbItem>-->
          <!--</Breadcrumb>-->
          <Content :style="{padding: '24px',background: '#fff'}">
            <router-view v-if="isRouterAlive" />
          </Content>
          <Footer style="text-align: center; font-weight: normal;" class="layout-footer-center">Copyright © 2016-2019 All Right Reserved.财合税(北京)信息技术有限公司版权所有 京ICP备18027406号</Footer>
        </Layout>


      </Layout>

  </div>
</template>
<style>
  .bottomc{
    position: fixed;
    border-top:1px solid #EEE;
    bottom:0;
    background: #666;
    color:#EEE;
    left:0;
    width:100%;
    text-align: center;
    padding: 15px;
    font-size:16px;
  }
</style>
<script>
  export default {
    data() {
      return {
        isRouterAlive: true,
        userinfo:{},
        activemenu:8,
        username: localStorage.getItem('user') ? localStorage.getItem('user') : '',
        menus: [
        ],
        menusUser: [
          {
            itemName: '快捷方式',
            icon:'ios-navigate',
            subSonItem: [
              {
                cked:false,
                name: '首页',
                nameIdx:1,
                namesrc: 'mains',
                icon:'md-home'
              }
              // {
              //   cked:false,
              //   name: '数据抽取',
              //   namesrc: '',
              //   icon:'ios-construct-outline'
              // }


            ]
          },
          {
            itemName: '报告',
            icon:'ios-navigate',
            subSonItem: [
              {
                cked:false,
                name: '数据采集',
                nameIdx:2,
                namesrc: 'grade',
                icon:'md-color-wand'
              },
              {
                cked:false,
                name: '采集管理',
                nameIdx:3,
                namesrc: 'caijiMgr',
                icon:'ios-construct-outline'
              },
              {
                cked:false,
                name: '报告管理',
                nameIdx:4,
                namesrc: 'reportMgr',
                icon:'ios-document'
              }

            ]
          },
          {
            itemName: '企业',
            icon:'logo-buffer',
            subSonItem: [
              {
                cked:false,
                name: '添加企业',
                nameIdx:5,
                namesrc: 'addCompany',
                icon:'md-add'
              },
              {
                cked:false,
                name: '企业管理',
                nameIdx:6,
                namesrc: 'teacherhome',
                icon:'ios-albums-outline'
              }

            ]
          },

          {
            itemName: '设置',
            icon:'ios-settings',
            subSonItem: [
              {
                name: '秘钥管理',
                namesrc: 'miyaoMgr',
                nameIdx:7,
                icon:'md-key',
                cked:false,
              },
              {
                cked:false,
                name: '设置密码 ',
                nameIdx:8,
                namesrc: 'editPas',
                icon:'md-lock'
              }


            ]
          }
        ],
        menusAdmin: [
          {
            itemName: '报告',
            icon:'ios-settings',
            subSonItem: [
              {
                name: '报告查看',
                namesrc: 'reportMgrAdmin',
                nameIdx:7,
                icon:'ios-document',
                cked:false,
              }


            ]
          },
          {
            itemName: '设置',
            icon:'ios-settings',
            subSonItem: [
              {
                cked:false,
                name: '设置密码 ',
                nameIdx:8,
                namesrc: 'editPas',
                icon:'md-lock'
              }


            ]
          }
        ]

      }
    },
    watch:{
      '$route' (to, from) {
        this.isRouterAlive = false;
        this.$nextTick(()=>{
          this.isRouterAlive = true;

          console.log(to.name+'1111')
          this.getuser();
          for(var i in this.menus){
            for(var j in this.menus[i].subSonItem){
              if(this.menus[i].subSonItem[j].namesrc == to.name){
                this.menus[i].subSonItem[j].cked=true
              }else{
                this.menus[i].subSonItem[j].cked=false
              }
            }
          }
          // console.log(JSON.stringify(this.menus))
          // this.shareAppPage({});
          // this.shareTimePage({});
          // this.getisguanzhu();
        })

        this.updateMenu();


      }
    },
    mounted() {
      this.getuser();
      var x = this.$route.name;
      console.log(x);




      this.updateMenu();
      // console.log(JSON.stringify(this.menus))
    },
    methods: {
      chaneSeleced(){
        var x = this.$route.name;
        for(var i in this.menus){
          for(var j in this.menus[i].subSonItem){
            if(this.menus[i].subSonItem[j].namesrc == x){
              this.menus[i].subSonItem[j].cked=true

            }else{
              this.menus[i].subSonItem[j].cked=false
            }
          }
        }

      },
      updateMenu(){
        this.$nextTick(() => {
          // this.$refs.side_menu.updateOpened()
          //
          //
          //
          // this.$refs.side_menu.updateActiveName();
        })
      },
      getuser(){
        this.$http.post('financial/userService/getCurUser').then(res=>{
          this.userinfo = res.data;
          // this.menus = this.menusAdmin;
          if(res.data.is_manager == 1){
            this.menus = this.menusUser;
          }else{
            this.menus = this.menusAdmin;
          }

          this.chaneSeleced();
        })
      },
      gohome(){
        this.$router.push({name:'main'});
      },
      jump(str) {
        this.$router.push({name: str});
      },
      loginOut() {
        this.$http.get('financial/userService/loginOut').then(res=>{
          localStorage.clear();
          this.$router.push({name: 'login'});
        })

      }
    }

  }
</script>


