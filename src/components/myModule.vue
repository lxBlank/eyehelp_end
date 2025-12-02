<template>
   <div id="main" style="background-color: #8c8d8f;">
        <div id="login" v-if="isLogin">
            <router-view :bfunc = "isLogin_func"></router-view>
        </div>
        <div id="container" v-if="!isLogin">
            <div id="content1" v-show="isShow">
                <el-row :gutter="20" style="margin-top: 2%;">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(1)">
                            <img class="mimg" src="../assets/mainImg/zhuye_goutong.png">
                            <div class="btn">沟通交流</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(2)">
                            <img class="mimg" src="../assets/mainImg/wodexuexi.png">
                            <div class="btn">学习娱乐</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(3)">
                            <img class="mimg" src="../assets/mainImg/diandeng.png">
                            <div class="btn">智能家居</div>
                        </div>
                    </div>
                </el-col>
            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(4)">
                            <img class="mimg" src="../assets/mainImg/iconzhengli-.png">
                            <div class="btn">求助</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(5)">
                            <img class="mimg" src="../assets/mainImg/jingbaoxinxi-.png">
                            <div class="btn">求救</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(6)">
                            <img class="mimg" src="../assets/mainImg/fanhui.png">
                            <div class="btn">返回</div>
                        </div>
                    </div>
                </el-col>
            </el-row>   
            </div>
            <div id="content2" v-show="!isShow">
                <router-view :bfunc = "isShow_func" ></router-view>
            </div>

        </div>
   </div>
</template>
  
<script>

  
export default{
    name: "myModule",
    data() {
        return {
            isLogin: true,
            isShow: true
        };
    },
    methods: {
        myClick(n) {
            if (n == 1) {
                this.isShow = false
                this.$router.push({
                    name: 'jiaoliu'
                })
            }
            else if(n == 2){
                this.isShow = false
                this.$router.push({
                    name: 'yule'
                })                
            }
            else if(n == 3){
                this.isShow = false
                this.$router.push({
                    name: 'jiaju'
                })                
            }
            else if(n == 4){
                this.isShow = false
                this.$router.push({
                    name: 'help'
                })                
            }
            else if(n == 6){
                localStorage.removeItem("token")
                this.isLogin = true
            }
        },
        isLogin_func(){
            this.isLogin = false
        },
        isShow_func(){
            this.isShow = true
        }
    },
    created(){
        this.$router.push({
            name: 'login'
        })       
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
.mimg{
    margin: 10px auto;
    width: 90px;
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
  