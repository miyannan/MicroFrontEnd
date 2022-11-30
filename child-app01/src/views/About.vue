<template>
    <div class="About-content">child01 about <button @click="handle">向父应用发送数据</button></div>
</template>

<script>
    import actions from '../actions'
    export default {
        name: 'About',
        components: {},
        props: {},
        data() {
            return {}
        },

        watch: {},

        computed: {},

        methods: {
            handle() {
                actions.setGlobalState({ childData: 'childAbout' })
            },
        },

        created() {
            console.log(this.$route.query)
        },

        mounted() {
            actions.onGlobalStateChange((state) => {
                console.log('我是子应用，我检测到数据了：', state)
                this.msg = state
            }, true)
        },

        beforeDestroy() {},
    }
</script>
<style lang="scss" scoped></style>
