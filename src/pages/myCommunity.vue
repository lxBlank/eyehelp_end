<template>
    
    <div id="container">
       
        <el-container>
            <el-header>
                <div class="header-container">
                    <el-row :gutter="25">
                    <el-col :span="4">
                        <div class="grid-content bg-purple header-content" @click="speak">
                            <i class="iconfont icon-yuyin icon-community"></i>
                            <span class="header-word">说话</span>
                            <audio id="bgMusic">
                                <source src="" type="audio/mp3">
                            </audio>
                        </div>
                    </el-col>
                    <el-col :span="8">
                        <div class="grid-content bg-purple header-content header-shuru">
                            <input class="header-input" v-model="word">
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple header-content" @click="mdelete">
                            <i class="iconfont icon-icon--shanchu icon-community"></i>
                            <span class="header-word">删除</span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple header-content" @click="mclear">
                            <i class="iconfont icon-shanchu1 icon-community"></i>
                            <span class="header-word">清除</span>
                        </div>
                    </el-col>
                    <el-col :span="4">
                        <div class="grid-content bg-purple header-content">
                            <i class="iconfont icon-nulikaifazhong icon-community"></i>
                            <span class="header-word">待开发</span>
                        </div>
                    </el-col>
                </el-row>
                </div>
            </el-header>
            <el-container>
                <el-aside width="180px">
                    <div class="aside-container">
                        <div class="aside-content" v-on:click="leftClick(0)">
                            <i class="iconfont icon-fanhui icon-community"></i>
                            <span class="aside-word">返回</span>
                        </div>
                        <div class="aside-content" v-on:click="leftClick(1)">
                            <i class="iconfont icon-jianpan1 icon-community"></i>
                            <span class="aside-word">键盘</span>
                        </div>
                        <div class="aside-content" v-on:click="leftClick(2)">
                            <i class="iconfont icon-duanyu icon-community"></i>
                            <span class="aside-word">短语</span>
                        </div>
                        <div class="aside-content" v-on:click="leftClick(3)">
                            <i class="iconfont icon-zidingyi icon-community"></i>
                            <span class="aside-word">自定义短语</span>
                        </div>
                        <div class="aside-content" v-on:click="leftClick(4)">
                            <i class="iconfont icon-nulikaifazhong icon-community"></i>
                            <span class="aside-word">待开发</span>
                        </div>
                    </div>
                </el-aside>
                <el-main>
                    <div class="main" >
                        <div class="mkeyborad" v-if="leftIndex == 1">
                            <div class="main-top"></div>
                            <div><keyBorad @myChangeWord='myChangeWord'></keyBorad></div>
                        </div>
                        <div v-if="leftIndex == 2">
                            <div><commonParse></commonParse></div>
                        </div>
                    </div>
                </el-main>
            </el-container>
        </el-container>
    </div>
</template>
  
<script>
import keyBorad from '../components/myFunc.vue'
import commonParse from '../components/commonPhrase.vue'
import {communityAudio} from '../util/baseurl'
import $ from 'jquery'

export default{
   
    name: 'myCommunity',
    props: ['bfunc'],
    data() {
        return {
            word:"",
            nword:'',
            url:'',
            leftIndex: 1
        }
    },
    components:{
       keyBorad,
       commonParse
    },
    methods:{
        // 单词
        myChangeWord(e){
            this.word = e
        },
        playAudio(url){
            var audio = document.getElementById('bgMusic');
            audio.setAttribute('src', url)
            audio.play();
        },
        speak(){
            var that = this
            console.log('说话了')
            $.ajax({
                //url
                url: communityAudio,
                // //参数
                data: {text: that.word},
                //请求类型
                type: 'POST',
                //响应体结果
                dataType: 'json',
                //成功的回调
                success: function(data){
                    that.url = data.data
                    console.log(that.url)
                    that.playAudio(that.url)
                },
                //超时时间
                timeout: 2000,
                //失败的回调
                error: function(){
                    
                    console.log('出错啦!!');
                },
                //头信息
                headers: {
                    "Authorization": localStorage.getItem("token")
                }
            });

        },
        mdelete(){
            var ostr = this.word
            var mlen = ostr.length
            var nstr = ostr.slice(0, mlen-1)
            this.word = nstr
        },
        mclear(){
            this.word = ''
        },
        // 左边按钮选择
        leftClick(e){
            console.log(e)
            this.leftIndex = e
            if(e == 0){
                this.$router.back()
            }
        }
    },
    beforeDestroy(){
        console.log(this)
        this.bfunc()
        console.log("community 被销毁了")
    }
}

</script>

<style  lang='less' scoped>
.mkeyborad{
    margin-top: 60px;
}
.main{
    // border: solid red 2px;
    height: 330px;
}
.main-top{
    margin-top: 10px;
}
.header-container{
    margin-top: 8px;
}
.header-content{
    height: 50px;
    line-height: 50px;
    background-color: #3f4044;
    text-align: center;
    box-shadow: 3px 3px 4px #504e4e;
    cursor: pointer;
}
.header-content:hover{
    background-color: #252527;
}
.header-word{
    text-align: center;
    font-size: larger;
    color: aliceblue;
    height: 65px;
    text-shadow: 2px 2px 4px #000000;
}
.header-shuru{
    background-color: #8c8d8f;
}
.header-input{
    width: 100%;
    height: 80%;
}
.aside-container{
    display: flex;
    flex-direction: column;
    
}
.aside-content{
 
    background-color: #e38960;
    text-align: center;
    color: aliceblue;
    height: 65px;
    border-radius: 10px;
    font-size: 20px;
    margin: 5px;
    line-height: 60px;
    box-shadow: 3px 3px 4px #504e4e;
    cursor: pointer;
}
.aside-content:hover{
    background-color: #e87e4d;
}
.aside-word{
    font-size: 20px;
    text-shadow: 2px 2px 4px #000000;
}
.icon-community{
    font-size: 25px;
}
</style>
  