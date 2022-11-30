module.exports = {
    lintOnSave: false, // 关闭eslint检测
    devServer: {
        port: 20000, //这里的端口是必须和父应用配置的子应用端口一致
        headers: {
            //因为qiankun内部请求都是fetch来请求资源，所以子应用必须允许跨域
            'Access-Control-Allow-Origin': '*',
        },
    },
    configureWebpack: {
        output: {
            //资源打包路径
            library: 'vueApp01',
            libraryTarget: 'umd',
        },
    },
}
