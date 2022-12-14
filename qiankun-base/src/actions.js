// 此action文件为定义微应用之间全局状态
// 引入qiankun的应用间通信方法initGlobalState
import { initGlobalState } from 'qiankun'

const initialState = {
    // 这里可以写初始化数据
}
const actions = initGlobalState(initialState) //初始化state

// 监听actions全局公共状态数据的变化
actions.onGlobalStateChange((state, prevState) => {
    console.log('主应用变更前：', prevState)
    console.log('主应用变更后：', state)
})

export default actions
