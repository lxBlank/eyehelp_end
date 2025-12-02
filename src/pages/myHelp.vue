<!-- 常用短语 -->
<template>
    <div class="container" style="background-color: #8c8d8f;">
        <div class="mrow">
            <div class="mcol">
                <div class="mcard" @click="myClike('喝水')">
                    <div class="mtext">喝水</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('吃饭')">
                    <div class="mtext">吃饭</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('上厕所')">
                    <div class="mtext">上厕所</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('睡觉')">
                    <div class="mtext">睡觉</div>
                </div>
            </div>
        </div>
        <div class="mrow">
            <div class="mcol">
                <div class="mcard" @click="myClike('翻身')">
                    <div class="mtext">翻身</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('坐起')">
                    <div class="mtext">坐起</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('躺下')">
                    <div class="mtext">躺下</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('起床')">
                    <div class="mtext">起床</div>
                </div>
            </div>
        </div>
        <div class="mrow">
            <div class="mcol">
                <div class="mcard" @click="myClike('晒太阳')">
                    <div class="mtext">晒太阳</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike('身体不适')">
                    <div class="mtext">身体不适</div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike(1)">
                    <div class="mtext"></div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike(1)">
                    <div class="mtext"></div>
                </div>
            </div>
        </div>
        <div class="mrow">
            <div class="mcol">
                <div class="mcard" @click="myClike(1)">
                    <div class="mtext"></div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike(1)">
                    <div class="mtext"></div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myClike(1)">
                    <div class="mtext"></div>
                </div>
            </div>
            <div class="mcol">
                <div class="mcard" @click="myReturn">
                    <div class="mtext">返回</div>
                </div>
            </div>
            <div style="display: none;"><el-button :plain="true" @click="open"></el-button></div>
        </div>
    </div>
     
 
 
 
 
 </template>
 
 <script>
    import $ from 'jquery'
    import {messageUrl} from '../util/baseurl'
    export default{
      
        data: function() {
            return {
                word: ''
            }
        },
        methods:{
            myReturn(){
                this.$router.back()
            },
            open() {
                this.$message('发送成功！');
            },
            myClike(type){
                var that = this
                this.word = type
                $.ajax({
                    //url
                    url: messageUrl,
                    //参数
                    data: {'content': that.word},
                    //请求类型
                    type: 'POST',
                    //响应体结果
                    dataType: 'json',
                    //成功的回调
                    success: function(data){
                        console.log(localStorage.getItem("token"))
                        console.log(data)
                        that.open()
                    },
                    //超时时间
                    timeout: 2000,
                    //失败的回调
                    error: function(){
                        alert('连接服务器失败！')    
                    },
                    //头信息
                    headers: {
                        "Authorization": localStorage.getItem("token")
                    }
                });
            }
        }
    }
    
 
 
 </script>
 
 <style lang="less" scoped>
 .container{
    margin-left: 1%;
 }
 .mrow{
     display: flex;
     height: 112px;
     margin-top: 5px;
 }
 .mcol{
    
     border-radius: 3px;
     margin-left: 5px;
     margin-right: 5px;
     margin-bottom: 5px;
     width: 23.5%;
     text-align: center;
     background-color: #e38960;
     box-shadow: 3px 3px 4px #504e4e;
     // line-height: 65px;
 }
 .mcol:hover{
     background-color: #e87e4d;
 }

.mtext{
    
    line-height: 112px;
    color: whitesmoke;
    font-size: 30px; 
    font-weight: bold;
    text-align: center;
    border: transparent;
    text-shadow: 2px 2px 4px #000000;
}
 </style>