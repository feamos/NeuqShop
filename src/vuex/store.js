import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

const state = {
  // 注册组件
  sigUp: {
    userName: '',
    userPassword: '',
    reUserPassword: '',
    email: '',
    qq: ''
  },
  // header组件
  head: {
    userName: ''
  },
  // oldgoods
  searchtext: '',
  active: 1,
  index: 0,
  // new-goods
  currentIndex: 0,
  clickmore: true,
  newGoods: [],
  ninegoods: [],
  timer: '',
  currentindex: 0,
  // study
  studyGoods: [
    {
      'gid': '81dc052e12f140f697167465b2db6325',
      'userName': 'yanni',
      'status': 1,
      'goodName': '全新史记（套装共四册）',
      'goodSort': '图书笔记',
      'goodPrice': 112,
      'sellerTel': '15523336666',
      'goodDesc': '遨游历史的天空！一起读史记！',
      'goodPicture0': '8/81dc052e12f140f697167465b2db6325-0.jpg',
      'goodPicture1': '8/81dc052e12f140f697167465b2db6325-1.jpg',
      'goodPicture2': '8/81dc052e12f140f697167465b2db6325-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695378000
    },
    {
      'gid': 'f650c70b33f94e1dba67f3018e757226',
      'userName': 'yanni',
      'status': 1,
      'goodName': '毛绒玩具',
      'goodSort': '其它',
      'goodPrice': 30,
      'sellerTel': '13833551234',
      'goodDesc': '原价100，急用钱。求秒！',
      'goodPicture0': 'f/f650c70b33f94e1dba67f3018e757226-0.jpg',
      'goodPicture1': 'f/f650c70b33f94e1dba67f3018e757226-1.jpg',
      'goodPicture2': 'f/f650c70b33f94e1dba67f3018e757226-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695270000
    },
    {
      'gid': '81dc052e12f140f697167465b2db6325',
      'userName': 'yanni',
      'status': 1,
      'goodName': '全新史记（套装共四册）',
      'goodSort': '图书笔记',
      'goodPrice': 112,
      'sellerTel': '15523336666',
      'goodDesc': '遨游历史的天空！一起读史记！',
      'goodPicture0': '8/81dc052e12f140f697167465b2db6325-0.jpg',
      'goodPicture1': '8/81dc052e12f140f697167465b2db6325-1.jpg',
      'goodPicture2': '8/81dc052e12f140f697167465b2db6325-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695378000
    },
    {
      'gid': 'f650c70b33f94e1dba67f3018e757226',
      'userName': 'yanni',
      'status': 1,
      'goodName': '毛绒玩具',
      'goodSort': '其它',
      'goodPrice': 30,
      'sellerTel': '13833551234',
      'goodDesc': '原价100，急用钱。求秒！',
      'goodPicture0': 'f/f650c70b33f94e1dba67f3018e757226-0.jpg',
      'goodPicture1': 'f/f650c70b33f94e1dba67f3018e757226-1.jpg',
      'goodPicture2': 'f/f650c70b33f94e1dba67f3018e757226-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695270000
    },
    {
      'gid': '81dc052e12f140f697167465b2db6325',
      'userName': 'yanni',
      'status': 1,
      'goodName': '全新史记（套装共四册）',
      'goodSort': '图书笔记',
      'goodPrice': 112,
      'sellerTel': '15523336666',
      'goodDesc': '遨游历史的天空！一起读史记！',
      'goodPicture0': '8/81dc052e12f140f697167465b2db6325-0.jpg',
      'goodPicture1': '8/81dc052e12f140f697167465b2db6325-1.jpg',
      'goodPicture2': '8/81dc052e12f140f697167465b2db6325-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695378000
    },
    {
      'gid': 'f650c70b33f94e1dba67f3018e757226',
      'userName': 'yanni',
      'status': 1,
      'goodName': '毛绒玩具',
      'goodSort': '其它',
      'goodPrice': 30,
      'sellerTel': '13833551234',
      'goodDesc': '原价100，急用钱。求秒！',
      'goodPicture0': 'f/f650c70b33f94e1dba67f3018e757226-0.jpg',
      'goodPicture1': 'f/f650c70b33f94e1dba67f3018e757226-1.jpg',
      'goodPicture2': 'f/f650c70b33f94e1dba67f3018e757226-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695270000
    },
    {
      'gid': '81dc052e12f140f697167465b2db6325',
      'userName': 'yanni',
      'status': 1,
      'goodName': '全新史记（套装共四册）',
      'goodSort': '图书笔记',
      'goodPrice': 112,
      'sellerTel': '15523336666',
      'goodDesc': '遨游历史的天空！一起读史记！',
      'goodPicture0': '8/81dc052e12f140f697167465b2db6325-0.jpg',
      'goodPicture1': '8/81dc052e12f140f697167465b2db6325-1.jpg',
      'goodPicture2': '8/81dc052e12f140f697167465b2db6325-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695378000
    },
    {
      'gid': 'f650c70b33f94e1dba67f3018e757226',
      'userName': 'yanni',
      'status': 1,
      'goodName': '毛绒玩具',
      'goodSort': '其它',
      'goodPrice': 30,
      'sellerTel': '13833551234',
      'goodDesc': '原价100，急用钱。求秒！',
      'goodPicture0': 'f/f650c70b33f94e1dba67f3018e757226-0.jpg',
      'goodPicture1': 'f/f650c70b33f94e1dba67f3018e757226-1.jpg',
      'goodPicture2': 'f/f650c70b33f94e1dba67f3018e757226-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695270000
    },
    {
      'gid': '81dc052e12f140f697167465b2db6325',
      'userName': 'yanni',
      'status': 1,
      'goodName': '全新史记（套装共四册）',
      'goodSort': '图书笔记',
      'goodPrice': 112,
      'sellerTel': '15523336666',
      'goodDesc': '遨游历史的天空！一起读史记！',
      'goodPicture0': '8/81dc052e12f140f697167465b2db6325-0.jpg',
      'goodPicture1': '8/81dc052e12f140f697167465b2db6325-1.jpg',
      'goodPicture2': '8/81dc052e12f140f697167465b2db6325-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695378000
    },
    {
      'gid': 'f650c70b33f94e1dba67f3018e757226',
      'userName': 'yanni',
      'status': 1,
      'goodName': '毛绒玩具',
      'goodSort': '其它',
      'goodPrice': 30,
      'sellerTel': '13833551234',
      'goodDesc': '原价100，急用钱。求秒！',
      'goodPicture0': 'f/f650c70b33f94e1dba67f3018e757226-0.jpg',
      'goodPicture1': 'f/f650c70b33f94e1dba67f3018e757226-1.jpg',
      'goodPicture2': 'f/f650c70b33f94e1dba67f3018e757226-2.jpg',
      'clickCount': 0,
      'publishTime': 1500695270000
    }
  ]
}
const mutations = {
  // 登录
  updateSigup (state, message) {
    state.sigUp = message
  },
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
  more () {
    this.clickmore = false
    this.$http.get('http://localhost/my/GetNewGoodsServlet?count=30')
      .then(response => {
        this.ninegoods = response.data
        console.log(this.ninegoods)
      }, error => {
        console.log(error)
      })
  },
  // oldgoods
  huode (context) {
    fetch('http://neuq.shop:8082/campus/getGoodsByNew', {
      method: 'GET',
      headers: {
        'Content-Type': 'application/x-www-form-urlencoded'
      }
    }).then((res) => res.json())
      .then((json) => {
        console.log(json)
        context.state.newGoods = json.data
      })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
