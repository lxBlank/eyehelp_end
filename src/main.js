import Vue from 'vue'
import App from './App.vue'
// 引入组件库
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
// 引入路由
import VueRouter from 'vue-router'
import router from './router'
import './assets/iconfont/iconfont.css'


Vue.config.productionTip = false

Vue.use(ElementUI)
Vue.use(VueRouter)

new Vue({
  render: h => h(App),
  router: router
}).$mount('#app')
