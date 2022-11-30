// 在 Main.vue 这个组件的 mounted 周期调用 start 函数，注意不要重复调用。
<template>
    <div class="main-content">
        <el-menu :router="true" mode="horizontal">
            <!--基座中可以放自己的路由-->
            <el-menu-item index="/home">Home</el-menu-item>
            <el-menu-item index="/about">About</el-menu-item>
            <!--引用其他子应用-->
            <el-menu-item index="/child01/index">vue01</el-menu-item>
            <el-menu-item index="/child02/index">vue02</el-menu-item>
            <el-menu-item index="/child01/about">child01/about</el-menu-item>
        </el-menu>
        <router-view></router-view>
        <div id="child01"></div>
        <div id="child02"></div>
    </div>
</template>

<script>
    import { start } from 'qiankun'
    import actions from '../actions'
    export default {
        name: 'Main',
        created() {},
        mounted() {
            if (!window.qiankunStarted) {
                window.qiankunStarted = true
                start()
            }
            // 需要在mounted钩子函数中注册qiankun的观察者函数
            // 注册一个观察者函数
            // 一旦修改actions的内容就会触发这个onGlobalStateChange监听函数
            actions.onGlobalStateChange((state, prevState) => {
                // state为变更后的状态，prevState为变更前的状态
                console.log('主应用观察者，改变前的state为：', prevState)
                console.log('主应用观察者，改变后的state为：', state)
            })
            this.handle1()
            this.handle2()
        },
        methods: {
            handle1() {
                actions.setGlobalState({ childData: { a: 1, b: 2 } }) //修改全局的actions
            },
            handle2() {
                actions.setGlobalState({ child02Data: { a: 11111, b: 22222 } }) //修改全局的actions
            },
        },
    }
</script>
