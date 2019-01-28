<template>
  <div class="mainFrame">
    <div class="topBanner">
      <canvas id="canvas"></canvas>
      <div class="totalnumbs">
        <div class="totalItem">
          <p class="ititle">账套活跃</p>
          <div class="picnumbs">
            <label>3</label>
            <label>7</label>
            <label>0</label>
            <label class="dot">.</label>
            <label>3</label>
            <span class="dw">万套</span>
          </div>
        </div>

        <div class="totalItem">
          <p class="ititle">用户活跃</p>
          <div class="picnumbs">
            <label>3</label>
            <label>3</label>
            <label>3</label>
            <label>3</label>
            <label>3</label>
            <label>3</label>
            <span class="dw">人</span>
          </div>
        </div>


      </div>
      <div class="userinfo">
            <div class="user_basic">
              <div  class="fl userImg"><Icon type="md-person" /></div>
              <div class="fl userName"><b>董登董登发董登发董登发董登发发</b></div>
              <div class="cl"></div>
            </div>
            <div class="myRate">
              <p>您的账务处理能力评分：<b @click="rate1Pro(1)">89分</b></p>
              <p> 超过全国<b @click="rate1Pro(2)">60%</b>的账务处理人 </p>
            </div>

            <div class="myRate_Detail">
              <ul>
                <li><label>账套：</label><span class=" numbs">33330<i>套</i></span></li>
                <li><label>客户：</label><span class=" numbs">3330<i>个</i></span></li>
                <li><label>工作完成：</label><span class=" numbs">30<i>%</i></span></li>
                <li><label>自动化：</label>
                  <span class=" numbs"><Poptip
                          word-wrap width="200"
                          content="自动化使用率:68%  本月总凭证数:100张  ">30</Poptip><i>%</i></span></li>



                <div class="cl"></div>
              </ul>
            </div>
            <div class="cwrk"><Button @click="loginIS" type="primary" size="large" long><Icon type="ios-paper-plane" /><b>登录进入账务系统</b></Button></div>

      </div>


    </div>

    <div class="quick_c">
        <div class="quick_bars_sel">
          <label>当前账套</label>
          <Select v-model="model5.value"  style="width:300px">
            <Option v-for="(item,idx) in comlists" :key="idx" v-bind:value="item.value"   >
              <span>{{item.name}}</span>
              <!--<span style="float:right;color:#ccc">备注字段</span>-->
            </Option>
          </Select>


        </div>
        <div class="quick_bars">
          <ul>
            <li>
              <div class="quick_item">
                <div class="quick_item_img">
                  <img src="./assets/imgs/q1.png">

                </div>
                <div  class="quick_item_name"><h3>录入凭证</h3></div>
              </div>
            </li>
            <li>
              <div class="quick_item">
                <div class="quick_item_img">
                  <img src="./assets/imgs/q2.png">

                </div>
                <div  class="quick_item_name"><h3>查报表</h3></div>
              </div>
            </li>
            <li>
              <div class="quick_item">
                <div class="quick_item_img">
                  <img src="./assets/imgs/q3.png">

                </div>
                <div  class="quick_item_name"><h3>期末结账</h3></div>
              </div>
            </li>
            <li>
              <div class="quick_item">
                <div class="quick_item_img">
                  <img src="./assets/imgs/q4.png">

                </div>
                <div  class="quick_item_name"><h3>客户管理</h3><p>新增、删除等客户信息管理</p></div>
              </div>
            </li>
            <li>
              <div class="quick_item">
                <div class="quick_item_img">
                  <img src="./assets/imgs/q5.png">

                </div>
                <div  class="quick_item_name"><h3>收费管理</h3><p>客户收费管理、欠费提醒</p></div>
              </div>
            </li>
            <div class="cl"></div>
          </ul>


        </div>
    </div>

    <div class="tool_tab">
      <span class="cur">日常工具</span>
      <span>日常工具</span>
      <span>日常工具</span>
      <span>日常工具</span>
      <span>日常工具</span>
      <span>日常工具</span>
      <span>日常工具</span>
    </div>
    <div class="tool_content">
      <ul>
        <li>
          <div class="tool_item">
            <div class="tool_img fl"><img src="./assets/imgs/t1.png"> </div>
            <div class="tool_info fl">
              <h3>账套迁移</h3>
              <p>支持市面全部软件及平台数据导入至财务管家</p>
            </div>
          </div>
        </li>
        <li>
          <div class="tool_item">
            <div class="tool_img fl"><img src="./assets/imgs/t2.png"> </div>
            <div class="tool_info fl">
              <h3>账套迁移</h3>
              <p>支持市面全部软件及平台数据导入至财务管家</p>
            </div>
          </div>
        </li>
        <li>
          <div class="tool_item">
            <div class="tool_img fl"><img src="./assets/imgs/t3.png"> </div>
            <div class="tool_info fl">
              <h3>账套迁移</h3>
              <p>支持市面全部软件及平台数据导入至财务管家</p>
            </div>
          </div>
        </li>
        <li>
          <div class="tool_item">
            <div class="tool_img fl"><img src="./assets/imgs/t4.png"> </div>
            <div class="tool_info fl">
              <h3>账套迁移</h3>
              <p>支持市面全部软件及平台数据导入至财务管家</p>
            </div>
          </div>
        </li>
        <li>
          <div class="tool_item">
            <div class="tool_img fl"><img src="./assets/imgs/t5.png"> </div>
            <div class="tool_info fl">
              <h3>账套迁移</h3>
              <p>支持市面全部软件及平台数据导入至财务管家</p>
            </div>
          </div>
        </li>
        <li>
          <div class="tool_item">
            <div class="tool_img fl"><img src="./assets/imgs/t6.png"> </div>
            <div class="tool_info fl">
              <h3>账套迁移</h3>
              <p>支持市面全部软件及平台数据导入至财务管家</p>
            </div>
          </div>
        </li>
        <div class="cl"></div>
      </ul>
    </div>

    <div class="hot_map">
      <h3>全国使用热力图</h3>
      <div id="hotmapPic">
        <img src="./assets/imgs/maps.png">
      </div>
    </div>


  </div>

</template>

<script>
  import buyMiyao from '@/pages/system/buyMiyao.vue'
  import gj1 from '@/pages/system/gj1.vue'
  import gj2 from '@/pages/system/gj2.vue'
  import gj3 from '@/pages/system/gj3.vue'
  import gj4 from '@/pages/system/gj4.vue'
  import gj5 from '@/pages/system/gj5.vue'
  export default {
    data () {
      return {
        model5:'',
        comlists:[
          {name:'财务管家北京财税科技有限公司1',value:0},
          {name:'财务管家北京财税科技有限公司2',value:1},
          {name:'财务管家北京财税科技有限公司3',value:2},
          {name:'财务管家北京财税科技有限公司4',value:3},
          {name:'财务管家北京财税科技有限公司5',value:4},
          {name:'财务管家北京财税科技有限公司6',value:5},
          {name:'财务管家北京财税科技有限公司7',value:6},
          {name:'财务管家北京财税科技有限公司8',value:7}
        ]

      }
    },
    mounted(){
      this.model5 = this.comlists[0];
      // this.loginIS();
      this.initWave();
      //console.log(JSON.stringify(this.$store.state)+'123');
    },
    methods: {
      rate1Pro(str){
        let that = this;
        if(str ==1){
          this.$mymsg(gj1,{
            data: {
              message: 'you click me btn1'
            },
            methods:{
              onOk(){

                // that.buyDou(this.formC.keyNumb)
                // that.showWechatMa()
              }
            }
          });

        }
        if(str ==2){
          this.$mymsg(gj2,{
            data: {
              message: 'you click me btn1'
            },
            methods:{
              onOk(){

                // that.buyDou(this.formC.keyNumb)
                // that.showWechatMa()
              }
            }
          });

        }

      },
      loginIS(){

        let that = this;
        this.$mymsg(buyMiyao,{
          data: {
            message: 'you click me btn1'
          },
          methods:{
            onOk(){

              that.buyDou(this.formC.keyNumb)
              // that.showWechatMa()
            }
          }
        });



      },
      initWave(){
        class Wave{
          constructor(){
            this.canvas = document.getElementById('canvas');
            this.ctx = this.canvas.getContext('2d');
            this.simplex = new SimplexNoise();
            this.speedY = 0;
            this.speedX = 0;
            this.init();
          }
          init(){
            this.reset();
            this.loop();
          }
          reset(){
            this.w = window.innerWidth;
            this.h = 320;
            this.canvas.width = this.w;
            this.canvas.height = this.h;
            // alert(this.h)
            this.count = Math.ceil(this.w / Math.floor(Math.random()*40 + 10));
          }
          loop(){
            var This = this;
            function drawloop(){
              window.requestAnimationFrame(drawloop);
              This.ctx.clearRect(0,0,This.w,This.h);
              This.speedX = 0;
              This.speedY += 0.01; //每次渲染需要更新波峰波谷值
              //连续绘制三次波浪线
              This.draw('rgba(255,255,255,.05)','rgba(255,255,255,.05)');
              // This.draw('rgba(255,255,255,.05)','rgba(255,255,255,.1)');
              // This.draw('rgba(255,255,255,.05)','rgba(255,255,255,.1)');
              // This.draw('rgba(255,255,255,.2)','red');
              // This.draw('rgba(255,255,255,.2)','red');
              // This.draw('rgba(0,0,0,.5)','rgba(0,0,0,.5)');
              // This.draw('rgba(0,0,0,.5)','rgba(0,0,0,.5)');
              // This.draw('#FFFFFF','#FFFFFF');
              // This.draw('#FFFFFF','#FFFFFF');
              // This.draw('green','screen');
              // This.draw('blue','screen');
            }
            drawloop();
          }
          draw(color,comp){


            var amp =25; //波浪幅度 可以通过函数传递参数更改不同的幅度
            this.ctx.beginPath();
            for(var i=0;i<=this.count;i++){
              this.speedX += 0.05;
              var x = i*(this.w/this.count);
              var y = this.h/2 + this.simplex.noise2D(this.speedX,this.speedY)*amp;
              this.ctx[i === 0 ? 'moveTo' : 'lineTo'](x,y);
            }
            // this.ctx.moveTo(0,0);
            this.ctx.lineTo(this.w,-this.h);
            this.ctx.lineTo(0, -this.h);

            this.ctx.closePath();
            this.ctx.fillStyle = color;
            this.ctx.globalCompositeOperation = comp;
            this.ctx.fill();
          }
        }
        new Wave();
      }

    }
  }
</script>
<style lang="scss" scoped>
  .hot_map{
    #hotmapPic{
      padding:10px;
      img{
        width:100%;
      }
    }
    h3{
      font-size:25px;
      padding:20px 0;
      text-align: center;
      color:#666;
      font-weight: normal;
    }
  }
  .tool_content{
    box-shadow: 0 0 3px #CCC;

    background: #FFF;
    ul{
      padding:20px 30px;
      li{
        width:25%;float: left;
        padding:10px;
        cursor: pointer;
        .tool_item{
          padding:10px;
          .tool_img {width:50px; height: 50px; overflow: hidden;


            img{
              width:90%;
              border-radius: 8px;
              box-shadow: 0 0 3px #CCC;
            }


            border-radius: 5px;}
          .tool_info{
            padding-left:8px;
            width:70%;
            h3{
              font-size:16px; color:#08F;

            }
            p{
              color:#999;
            }
          }




        }



      }
    }
  }
  .tool_tab{
    text-align: center;
    padding:15px 0 20px 0;
    span{
      font-size:18px;

      text-align: center;
      color:#666;
      padding:5px 15px;
      cursor: pointer;
      display: inline-block;
      width:110px;

    }
    span.cur{
      font-weight: bold;
      background: #08F;
      color:#FFF;
      -webkit-border-radius: 1000px;
      box-shadow: 0 0 3px #CCC;
      -moz-border-radius: 1000px;
      border-radius: 1000px;
      text-align: center;
    }
  }

  .quick_c{
    padding:15px;
    .quick_bars_sel{
      padding:0 0 15px 0;
      font-size:14px;

    }
    .quick_bars{
      background: #FFF;

      box-shadow: 0 0 3px #CCC;

      border-radius: 10px;
      ul{
        li{
          cursor: pointer;
          width:20%;
          float:left;
          padding:25px 0;
          .quick_item{
            text-align: center;
            .quick_item_name{
              h3{
                color:#08F; font-size:18px;
                padding-top:5px;
              }
            }
            .quick_item_img{
              margin:0 auto;
              width:100px;
              height:100px;
              border-radius: 1000px;
              background: #E1F3FF;
              text-align: center;
              position: relative;
              img{
                width:60%;
                position: absolute;
                top:20px;
                left:20px;
              }
            }
          }
        }
      }

    }
  }
  .totalnumbs{
    position: relative;
    z-index: 9;
    color:#FFF;
    padding:50px 0 0 50px;
    .totalItem{
      padding:10px 0;
    .ititle{
      font-size:18px;
      font-weight: bold;
      padding:3px 0;
    }
      .picnumbs{
        .dw{
          font-size:16px;
        }
        label{
          text-shadow: 0 0 3px #999;
          display: inline-block;
          width:36px;
          height: 38px;
          overflow: hidden;
          text-align: center;
          background:url("./assets/imgs/numb_bg.png") no-repeat center;
          background-size: 100%;
          font-size:38px;
          overflow: hidden;
          line-height: 36px;

        }
        .dot{
          background: none;
          font-size:50px;
          width:10px;
          margin-right:5px;

        }
      }
  }
  }
  .cwrk{
    text-align: center;
    margin:8px 0;
    padding:0 15%;

  }
  .myRate{
    padding:10px 0 0 20px;
    line-height: 28px;
    p{
      font-size:14px;
      b{
        margin:0 3px;
        color:#FF0000;
        text-decoration: underline;
        cursor: pointer;
        font-size:16px;
      }

    }
  }
  .myRate_Detail{
    margin:8px 20px;
    font-size:14px;
    border-top:1px solid #EEE;
    ul{
      padding:8px 0;
      li{
        float:left;width:50%;
        cursor: pointer;

        padding:3px 0;
        .numbs{
          font-weight: bold;
          color:#08F;
          padding-right:30px;
          font-size:16px;

          i{
            color:#999; font-size:9px;
            font-style: normal;
          }
        }
      }
    }

  }
  .user_basic{
    padding:20px 0 0 20px;
    .userImg{width:40px;
      height: 40px;
    background:#08F;
      -webkit-border-radius: 1000px;
      -moz-border-radius: 1000px;
      border-radius: 1000px;
      color:#FFF;
      text-align: center;
      overflow: hidden;
      i{
        font-size: 35px;

        
      }
    }
    .userName{
      width:200px;
      font-size:20px;
      padding:5px 0 0 5px;
      overflow: hidden;
      white-space: nowrap;
      text-overflow: ellipsis;
    }
    
  }
  .mainFrame{
    background: #F7F8FC;
    width:100%;
    position: absolute;
    height: 100%;
    overflow:auto;

    .topBanner{
      overflow: hidden;
      #canvas{
        position:absolute;
        width:100%;
        height:320px;
         left:0;
        bottom: -130px;

        transform:rotate(180deg);
        z-index:1;

      }
      height: 320px;
      position: relative;
      background:#0085FF url("./assets/imgs/topbanner_bg.png") no-repeat center;
      background-size:auto 100%;
      .userinfo{
        box-shadow:0 0 3px #00539C;
        width:320px;
        height: 280px;
        position:  absolute;
        z-index: 9;
        top:20px;
        background: #FFF;
        border-radius: 10px;
        right:50px;
      }

    }
  }

</style>
