<template>
    <div id="container">
        <div id="content1">
            <el-row :gutter="20" style="margin-top: 2%;">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="btn-container  card" v-on:click="myClick(1)">
                        <i class="iconfont icon-wanju icon-main"></i>
                        <div class="btn">元宇宙</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="btn-container  card" v-on:click="myClick(2)">
                        <i class="iconfont icon-wodexuexi icon-main"></i>
                        <div class="btn">读书</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="btn-container  card" v-on:click="myClick(3)">
                        <i class="iconfont icon-nulikaifazhong icon-main"></i>
                        <div class="btn">待开发</div>
                    </div>
                </div>
            </el-col>
        </el-row>
        <el-row :gutter="20">
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="btn-container  card" v-on:click="myClick(4)">
                        <i class="iconfont icon-nulikaifazhong icon-main"></i>
                        <div class="btn">待开发</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="btn-container  card" v-on:click="myClick(5)">
                        <i class="iconfont icon-nulikaifazhong icon-main"></i>
                        <div class="btn">待开发</div>
                    </div>
                </div>
            </el-col>
            <el-col :span="8">
                <div class="grid-content bg-purple">
                    <div class="btn-container  card" v-on:click="myClick(6)">
                        <i class="iconfont icon-fanhui icon-main"></i>
                        <div class="btn">返回</div>
                    </div>
                </div>
            </el-col>
        </el-row>   
        </div>

    </div>
</template>
  
<script>

  
export default{
    name: "myEntertainment",
    props: ['bfunc'],
    data() {
        return {
           
        };
    },
    methods: {
        myClick(n) {
            if (n == 1) {

                console.log(n);
            }
            else if(n == 6){
                this.$router.back()
            }
        },

    },
    beforeDestroy(){
        console.log(this)
        this.bfunc()
        console.log("community 被销毁了")
    }

   
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
  