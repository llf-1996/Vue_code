import { createStore } from 'vuex'

export default createStore({
  state: {
    asideCollapsed: false
  },
  mutations: {
    changeAsideStatus (state) {
      state.asideCollapsed = !state.asideCollapsed
    }
  },
  actions: {
  },
  modules: {
  }
})
