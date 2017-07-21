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
  goods: [
    {name: '风扇', price: 10, sort: '生活', desc: 'usb小风扇'},
    {name: '键盘', price: 20, sort: '娱乐', desc: '机械键盘'},
    {name: '鼠标', price: 5, sort: '娱乐', desc: '游戏鼠标'},
    {name: '自行车', price: 39, sort: '运动', desc: '山地自行车'},
    {name: 'sdjf', price: 23, sort: '食品', desc: '贼好吃'},
    {name: 'sdifjs', price: 32, sort: '生活'},
    {name: 'sdifoij', price: 43, sort: '鞋帽'},
    {name: 'isdjfos', price: 32, sort: '生活'},
    {name: 'ijfoiwj', price: 90, sort: '服饰'}
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
      state.currentIndex = state.goods.length
    }
    state.currentIndex -= 3
    console.log(state.goods)
  },
  next () {
    state.currentIndex += 3
    if (state.currentIndex > state.goods.length - 1) {
      state.currentIndex = 0
    }
  },
  autoPlay () {
    state.currentIndex += 3
    if (state.currentIndex > state.goods.length - 1) {
      state.currentIndex = 0
    }
  }
}

const actions = {
  //  开始轮播图
  beginnext (context) {
    context.state.timer = setInterval(() => {
      context.commit('autoPlay')
    }, 1000)
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
