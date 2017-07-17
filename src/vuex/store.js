import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // header组件
  head: {
    userName: '冯沛栋'
  },
  // oldgoods
  searchtext: '',
  active: 1,
  index: 0,
  currentw: 0
}
const mutations = {
  //  oldgoods
  showActive (state, index) {
    state.active = index
  },
  hideActive () {
    state.active = 0
  },
  selectActive (state, index) {
    state.index = index
  }
}
export default new Vuex.Store({
  state,
  mutations
})
