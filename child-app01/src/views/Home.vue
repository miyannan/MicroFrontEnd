<template>
    <div class="Home-content">
        child01 Home
        <button @click="handle">向父应用发送数据</button>
    </div>
</template>

<script>
    import actions from '../actions'
    export default {
        name: 'Home',
        components: {},
        props: {},
        data() {
            return {}
        },

        watch: {},

        computed: {},

        methods: {
            handle() {
                actions.setGlobalState({ childData: [1, 2] })
            },
        },

        created() {},

        mounted() {
            actions.onGlobalStateChange((state) => {
                console.log('我是子应用，我检测到数据了：', state)
            }, true)
        },

        beforeDestroy() {},
    }
</script>
<style lang="scss" scoped></style>
