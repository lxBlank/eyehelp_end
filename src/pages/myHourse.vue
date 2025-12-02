<template>
    <div id="container">
        <a href="Webshell://hello">dianwo2</a>
        <div id="content1" v-if="isShow">
            <el-row :gutter="20" style="margin-top: 2%;">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(1)">
                            <i class="iconfont icon-diandeng icon-main"></i>
                            <div class="btn">电灯</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(2)">
                            <i class="iconfont icon-kongtiao icon-main"></i>
                            <div class="btn">空调</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(2)">
                            <i class="iconfont icon-dianshi icon-main"></i>
                            <div class="btn">电视</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(3)">
                            <i class="iconfont icon-nulikaifazhong icon-main"></i>
                            <div class="btn">待添加</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(4)">
                            <i class="iconfont icon-qita icon-main"></i>
                            <div class="btn">其他家电</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(5)">
                            <i class="iconfont icon-tianjiatianchong icon-main"></i>
                            <div class="btn">添加</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(2)">
                            <i class="iconfont icon-shanchu1 icon-main"></i>
                            <div class="btn">删除</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="6">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(6)">
                            <i class="iconfont icon-fanhui icon-main"></i>
                            <div class="btn">返回</div>
                        </div>
                    </div>
                </el-col>
            </el-row>   
        </div>
        <div class="container2" v-if="!isShow">
            <div v-if="index == 1">
                <smartHome :smartHomefunc="light"></smartHome>
            </div>
        </div>
    </div>
</template>
  
<script>

import smartHome from '../components/smartHome.vue'
export default{
    name: "myHourse",
    props: ["bfunc"],

    data() {
        return {
            isShow: true,
            index: 0
        };
    },
    components:{
       smartHome
    },
    methods: {
        light(){
            console.log('light被调用了')
            this.isShow = true
        },
        myClick(n) {
            if (n == 1) {
                this.isShow = false
                this.index = 1
            }
            else if (n == 6) {
                this.$router.back();
            }
        },
    },
    beforeDestroy() {
        console.log(this);
        this.bfunc();
        console.log("community 被销毁了");
    },
   
}

</script>

<style  lang='less' scoped>
#container{
    background-color: #8c8d8f;
}
#content1{
    margin: 5px;
}
.card:hover{
    background-color: #e87742;
}
.btn-container{
    display: flex;
    flex-direction: column;
    height: 210px; 
    width: 100%; 
    background-color: #e38960;
    font-size: 30px;
    border-radius: 30px;
    color: white;
    line-height: 80px;
    cursor: pointer;
    box-shadow: 8px 8px 5px #504e4e;
}
.btn-container:hover{
    background-color: #e87e4d;
    
}

.btn{
    /* background-color: #e38960; */
    color: whitesmoke;
    font-size: 30px; 
    font-weight: bold;
    text-align: center;
    border: transparent;
    text-shadow: 2px 2px 4px #000000;
}
.icon-main{
    font-size: 60px;
    text-align:center;
    margin-top: 20px;
}
.grid-content{
    background-color: #8c8d8f;
}

</style>
  