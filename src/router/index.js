import Vue from 'vue'
import Router from 'vue-router'
import Home from '../components/home.vue'
import Oldgoods from '../components/oldgoods.vue'
import newgoods from '@/components/new-goods.vue'
import Register from '../components/register.vue'
import signIn from '../components/signIn.vue'
import signUp from '../components/signUp.vue'
// import searchgoods from '@/components/search_goods/search_goods.vue'
import study from '@/components/study.vue'
// import life from '@/components/life/life.vue'
// import sport from '@/components/sport/sport.vue'
// import clothes from '@/components/clothes/clothes.vue'
// import hat from '@/components/hat/hat.vue'
// import food from '@/components/food/food.vue'
// import other from '@/components/other/other.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'Home',
      component: Home
    },
    {
      path: '/register',
      name: 'Register',
      component: Register,
      children: [
        {path: '/', redirect: '/signIn'},
        {path: '/signIn', component: signIn},
        {path: '/signUp', component: signUp}
      ]
    },
    {
      path: '/oldgoods',
      name: 'oldgoods',
      component: Oldgoods,
      children: [
        {path: '/', component: newgoods},
        // {path: '/search', component:searchgoods},
        {path: '/study', component: study}
        // {path: '/life', component:life},
        // {path: '/sport', component:sport},
        // {path: '/clothes', component:clothes},
        // {path: '/hat', component:hat},
        // {path: '/food', component:food},
        // {path: '/other', component:other}
      ]
    }
  ]
})
