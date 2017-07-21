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
  currentIndex: 0,
  // new-goods
  newGoods: [
  ],
  timer: '',
  currentindex: 0
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
  },
  // new-goods
  stop () {
    clearInterval(state.timer)
    state.timer = null
  },
  last () {
    if (state.currentIndex === 0) {
      state.currentIndex = state.newGoods.length
    }
    state.currentIndex -= 3
    console.log(state.newGoods)
  },
  next () {
    state.currentIndex += 3
    if (state.currentIndex > state.newGoods.length - 1) {
      state.currentIndex = 0
    }
  },
  autoPlay () {
    state.currentIndex += 3
    if (state.currentIndex > state.newGoods.length - 1) {
      state.currentIndex = 0
    }
  }
}

const actions = {
  //  开始轮播图
  beginnext (context) {
    context.state.timer = setInterval(() => {
      context.commit('autoPlay')
    }, 4000)
  },
  huode (context) {
    fetch('http://neuq.shop:8082/campus/getGoodsByNew', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => res.json())
      .then((json) => {
        console.log(json)
        context.state.newGoods = json
      })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
