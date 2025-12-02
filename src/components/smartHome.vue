<template>
    <div id="container">
        <div id="content1">
            <el-row :gutter="20" style="margin-top: 2%;">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(1)">
                            <img class="mimg" src="../assets/images/kd.png">
                            <div class="btn" :style="{color:kcolor}">开灯</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(2)">
                            <img class="mimg" src="../assets/images/gd.png">
                            <div class="btn" :style="{color:gcolor}">关灯</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(3)">
                            <div class="jindu">
                                <div class="jindup"><el-progress :text-inside="true" :stroke-width="24" :percentage="light" status="success"></el-progress></div>
                                <div class="btn">亮度</div>
                            </div>
                        </div>
                    </div>
                </el-col>

            </el-row>
            <el-row :gutter="20">
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(4)">
                            <img class="mimg" src="../assets/images/add.png">
                            <div class="btn">增加亮度</div>
                        </div>
                    </div>
                </el-col>
                <el-col :span="8">
                    <div class="grid-content bg-purple">
                        <div class="btn-container  card" v-on:click="myClick(5)">
                            <img class="mimg" src="../assets/images/sub.png">
                            <div class="btn">降低亮度</div>
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
    props:["smartHomefunc"],
    data() {
        return {
            light: 50,
            colorIndex: 0,
            kcolor: '',
            gcolor: ''
        };
    },
    components:{
    
    },
    methods: {
        myClick(n){
            if(n == 1){
                this.kcolor = 'red'
                this.gcolor = ''
            }
            else if(n == 2){
                this.kcolor = ''
                this.gcolor = 'red'
            }
            else if(n == 4){
            
                if(this.light < 100){
                    this.light = this.light + 1
                }
                    
                else
                    this.light = 100
            }
            else if(n == 5){
                if(this.light > 0)
                    this.light = this.light - 1
                else
                    this.light = 0
            }
            else if(n == 6){
                this.smartHomefunc()
            }
        }
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
.mimg{
    width: 30%;
    margin: 0 auto;
}
.card{
    text-align: center;
}
.card:hover{
    background-color: #e95a18;
}
.jindu{
    width: 90%;
    margin: 20% auto;
    text-align: center;
}
.jintup{
    width: 80%;
    margin: 0 auto;
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
  