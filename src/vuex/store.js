import Vue from 'vue'
import Vuex from 'vuex'
import iView from 'iview'
import 'iview/dist/styles/iview.css'   // 使用 CSS
import API from '../common/js/api/api.js'
Vue.use(iView)
Vue.use(Vuex)

const state = {
  // 登录
  sigIn: {
    userName: '',
    userPassword: ''
  },
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
  ],
  // 发布二手商品
  goodInfo: {
    goodName: 'peidong',
    goodPrice: '12',
    goodDesc: 'fjsdifajaiodjsfoijadsio',
    goodSort: 'hangzhou',
    sellerTel: '12345678',
    files0: '',
    files1: '',
    files2: ''
  }
}
const mutations = {
  // 登录
  updateSigup (state, message) {
    state.sigUp = message
  },
  updateSigin (state, message) {
    state.sigIn = message
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
    console.log('清除定时器')
    clearInterval(state.timer)
    state.timer = null
    console.log('清除完成')
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
  },
  // 发布商品
  updateGood (state, message) {
    state.goodInfo = message
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
    fetch(API.getGoodsByNew, {
      method: 'GET',
      headers: {
        'Content-Type': 'application/json'
      }
    }).then((res) => res.json())
      .then((json) => {
        console.log(json)
        context.state.newGoods = json.data
      })
  },
  // 注册
  sigup (context) {
    let submitRegister = {
      userName: context.state.sigUp.userName,
      userPassword: context.state.sigUp.userPassword,
      reUserPassword: context.state.sigUp.reUserPassword,
      email: context.state.sigUp.email,
      qq: context.state.sigUp.qq
    }
    console.log(context.state.sigUp)
    fetch('http://192.168.1.103:8080/campus/registUser', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(submitRegister)
    }).then((res) => res.json())
      .then((json) => {
        console.log(json)
      })
  }
}
export default new Vuex.Store({
  state,
  mutations,
  actions
})
