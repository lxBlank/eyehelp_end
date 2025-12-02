import VueRouter from "vue-router"
import myCommunity from '../pages/myCommunity'
import myEntertainment from '../pages/myEntertainment'
import myHourse from '../pages/myHourse'
// import myModule from '../pages/myModule'
import myLogin from '../pages/myLogin'
import myHelp from '../pages/myHelp'

export default new VueRouter({
    routes:[
        {
            name: 'login',
            path: '/login',
            component: myLogin
        },
        {
            name: 'help',
            path: '/help',
            component: myHelp
        },
        // {
        //     name: 'home',
        //     path: '/module',
        //     component: myModule
        // },
        {
            name: 'jiaoliu',
            path: '/community',
            component: myCommunity
        },
        {
            name: 'yule',
            path: '/entertainment',
            component:  myEntertainment
        },
        {
            name: 'jiaju',
            path: '/hourse',
            component:  myHourse
        }
    ]
})