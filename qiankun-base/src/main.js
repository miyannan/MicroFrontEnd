import Vue from 'vue'
import App from './App.vue'
import router from './router/router' // 路由
import { registerMicroApps, start } from 'qiankun'
import ElementUI from 'element-ui'
import 'element-ui/lib/theme-chalk/index.css'
import actions from './actions'
// qiankun START
const apps = [
    {
        name: 'vueApp01', // 应用的名字
        entry: '//localhost:20000', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#child01', // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
        activeRule: '/child01', // 激活的路径
        props: { actions }, // 传递的值（可选）
    },
    {
        name: 'vueApp02', // 应用的名字
        entry: '//localhost:20001', // 默认会加载这个html 解析里面的js 动态的执行 （子应用必须支持跨域）fetch
        container: '#child02', // 容器名（此项目页面中定义的容器id，用于把对应的子应用放到此容器中）
        activeRule: '/child02', // 激活的路径
        props: { actions }, // 传递的值（可选）
    },
]
registerMicroApps(apps) // 注册应用
start({
    prefetch: false, // 取消预加载
})
// qiankun END
Vue.use(ElementUI)
Vue.config.productionTip = false

new Vue({
    router,
    render: (h) => h(App),
}).$mount('#app')
