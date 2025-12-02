<template>
  <div id="app" style="background-color: #8c8d8f;">
    <!-- <myLogin></myLogin> -->
    <myModule></myModule>

  </div>
</template>

<script>

import myModule from './components/myModule.vue';
// import HelloWorld from './components/myFunc.vue';
// import myLogin from './components/myLogin.vue'

export default {
  name: 'App',
  components: {
    // myLogin
    myModule,
    // HelloWorld

  }
}
</script>

<style>
#app {
  position : absolute;
  width : 100%;
  height : 100%;
  background-color: #8c8d8f;;
}
  .el-row {
    margin-bottom: 20px;
    /* &:last-child {
      margin-bottom: 0;
    } */
  }
  .el-col {
    border-radius: 4px;
  }
  .bg-purple-dark {
    background: #99a9bf;
  }
  .bg-purple {
    background: #d3dce6;
  }
  .bg-purple-light {
    background: #e5e9f2;
  }
  .grid-content {
    border-radius: 4px;
    min-height: 36px;
  }
  .row-bg {
    padding: 10px 0;
    background-color: #f9fafc;
  }
</style>
