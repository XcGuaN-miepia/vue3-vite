import { createStore } from 'vuex'

interface Common {
  count: number
}

// 创建一个新的 store 实例
const store = createStore({
  state () {
    return {
      count: 0
    } as Common
  },
  mutations: {
    increment (state: Common) {
      state.count++
    }
  }
})

export default store