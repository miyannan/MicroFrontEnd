// 在 Main.vue 这个组件的 mounted 周期调用 start 函数，注意不要重复调用。
<template>
    <div class="main-content">
        child02/view
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
            this.handle2()
        },
        methods: {
            handle2() {
                actions.setGlobalState({ child02Data: { a: 11111, b: 22222 } }) //修改全局的actions
            },
        },
    }
</script>
