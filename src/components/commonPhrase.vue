<!-- 常用短语 -->
<template>
    <div class="container">
     <div class="mrow">
         <div class="mcol">
             <div class="mcard" @click="myClike(1)">
                 <div clatn">爸爸</div>
                 <audio id="bgMusic1">
                    <source src="../assets/audio/father.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard" @click="myClike(2)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/045-mother.png"></div>
                 <div class="btn">妈妈</div>
                 <audio id="bgMusic2">
                    <source src="../assets/audio/mother.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol"  @click="myClike(3)">
             <div class="mcard">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/013-grandmother.png"></div>
                 <div class="btn">奶奶</div>
                 <audio id="bgMusic3">
                    <source src="../assets/audio/gmother.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(4)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/033-grandfather.png"></div>
                 <div class="btn">爷爷</div>
                 <audio id="bgMusic4">
                    <source src="../assets/audio/gfather.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(5)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/wenyidashu.png"></div>
                 <div class="btn">叔叔</div>
                 <audio id="bgMusic5">
                    <source src="../assets/audio/uncle.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(6)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/ayi.png"></div>
                 <div class="btn">阿姨</div>
                 <audio id="bgMusic6">
                    <source src="../assets/audio/aunt.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
     </div>
     <div class="mrow">
         <div class="mcol">
             <div class="mcard"  @click="myClike(7)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/kaixin1.png"></div>
                 <div class="btn">好</div>
                 <audio id="bgMusic7">
                    <source src="../assets/audio/hao.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(8)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/bukaixin.png"></div>
                 <div class="btn">不好</div>
                 <audio id="bgMusic8">
                    <source src="../assets/audio/nhao.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(9)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/zhengque.png"></div>
                 <div class="btn">是</div>
                 <audio id="bgMusic9">
                    <source src="../assets/audio/yes.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(10)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/cuowu.png"></div>
                 <div class="btn">不是</div>
                 <audio id="bgMusic10">
                    <source src="../assets/audio/no.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(11)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/yiwen.png"></div>
                 <div class="btn">我不知道</div>
                 <audio id="bgMusic11">
                    <source src="../assets/audio/nknow.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(12)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/kaixin.png"></div>
                 <div class="btn">开玩笑</div>
                 <audio id="bgMusic12">
                    <source src="../assets/audio/joke.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
     </div>
     <div class="mrow">
         <div class="mcol">
             <div class="mcard" @click="myClike(13)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/dazhaohu.png"></div>
                 <div class="btn">你好</div>
                 <audio id="bgMusic13">
                    <source src="../assets/audio/hello.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(14)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/nanguo_1.png"></div>
                 <div class="btn">对不起</div>
                 <audio id="bgMusic14">
                    <source src="../assets/audio/sorry.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(15)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/xianhua.png"></div>
                 <div class="btn">谢谢</div>
                 <audio id="bgMusic15">
                    <source src="../assets/audio/thank.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(16)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/kaixino.png"></div>
                 <div class="btn">不客气</div>
                 <audio id="bgMusic16">
                    <source src="../assets/audio/nthank.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(17)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/ziyuan.png"></div>
                 <div class="btn">过来</div>
                 <audio id="bgMusic17">
                    <source src="../assets/audio/come.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(18)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/manzu.png"></div>
                 <div class="btn">够了</div>
                 <audio id="bgMusic18">
                    <source src="../assets/audio/manzu.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
     </div>
     <div class="mrow">
         <div class="mcol">
             <div class="mcard"  @click="myClike(19)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/richang_chifan-miantiao-wan.png"></div>
                 <div class="btn">吃饭</div>
                 <audio id="bgMusic19">
                    <source src="../assets/audio/eat.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(20)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/shuijue.png"></div>
                 <div class="btn">睡觉</div>
                 <audio id="bgMusic20">
                    <source src="../assets/audio/sleep.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(21)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/heshui.png"></div>
                 <div class="btn">喝水</div>
                 <audio id="bgMusic21">
                    <source src="../assets/audio/water.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(22)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/yidongcesuo.png"></div>
                 <div class="btn">上厕所</div>
                 <audio id="bgMusic22">
                    <source src="../assets/audio/wc.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(23)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/wanju.png"></div>
                 <div class="btn">出去玩</div>
                 <audio id="bgMusic23">
                    <source src="../assets/audio/play.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(24)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/youxi.png"></div>
                 <div class="btn">打游戏</div>
                 <audio id="bgMusic24">
                    <source src="../assets/audio/game.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
     </div>
     <div class="mrow">
         <div class="mcol">
             <div class="mcard"  @click="myClike(25)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/-happy-.png"></div>
                 <div class="btn">开心</div>
                 <audio id="bgMusic25">
                    <source src="../assets/audio/fun.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(26)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/-sad-.png"></div>
                 <div class="btn">不开心</div>
                 <audio id="bgMusic26">
                    <source src="../assets/audio/nfun.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(27)">
                 <div class="img"> <img class="iimg" src="../assets/phraseImg/-angry.png"> </div>
                 <div class="btn">生气</div>
                 <audio id="bgMusic27">
                    <source src="../assets/audio/anger.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(28)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/tianjiatianchong.png"></div>
                 <div class="btn">待添加</div>
                 <audio id="bgMusic28">
                    <source src="../assets/audio/add.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(29)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/tianjiatianchong.png"></div>
                 <div class="btn">待添加</div>
                 <audio id="bgMusic29">
                    <source src="../assets/audio/add.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
         <div class="mcol">
             <div class="mcard"  @click="myClike(30)">
                 <div class="img"><img class="iimg" src="../assets/phraseImg/tianjiatianchong.png"></div>
                 <div class="btn">待添加</div>
                 <audio id="bgMusic30">
                    <source src="../assets/audio/add.mp3" type="audio/mp3">
                </audio>
             </div>
         </div>
     </div>
     
    </div>
 
 
 
 </template>
 
 <script>
    export default{
        methods:{
            myClike(type){
                var strId = "bgMusic" + type
                var audio = document.getElementById(strId);
                audio.play();
            }
        }
    }
    
 
 
 </script>
 
 <style lang="less" scoped>
 .mrow{
     display: flex;
     height: 67px;
 }
 .mcol{
     border-radius: 3px;
     margin-left: 5px;
     margin-right: 5px;
     margin-bottom: 5px;
     width: 15%;
     text-align: center;
     background-color: #fdfbfa;
     box-shadow: 3px 3px 4px #504e4e;
     // line-height: 65px;
 }
 .mcol:hover{
     background-color: #e87e4d;
 }
//  .mcard{
//      // line-height: 25px;
//  }
 .img{
     margin-top: 7px;
 }
 .mimg{
    // line-height: 30px;
 }
.iimg{
    margin-top: 6%;
    width: 25px;
    height: 25px;
}
 .icon-main{
     font-size: 25px;
 }
 .btn{
     font-size: small;
     // text-shadow: 1px 1px 1px #6c6969;
 }
 // .container{
 
 // }
 // .card{
 //     font-size: 20px;
 //     height: 70px;
 // }
 </style>