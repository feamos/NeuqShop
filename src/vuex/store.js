import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const state = {
  // header组件
  head: {
    userName: '冯沛栋'
  }
}

export default new Vuex.Store({
  state
})
