<template>
  <div class="header">
    <a class="brand"><img src="./img/logo.png"/></a>
    <ul class="tab">
      <li class="tab-item">
        <router-link to="/" tag="span">主页</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/oldgoods" tag="span">二手</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/messages" tag="span">留言</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/lost" tag="span">寻物</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/active" tag="span">活动</router-link>
      </li>
      <li class="tab-item">
        <router-link to="/attend" tag="span">代课</router-link>
      </li>
    </ul>
    <span class="login" v-show="!userName">
        <router-link to="/register"><img src="./img/登录.png" alt="登录"></router-link>
        <router-link to="/signUp"><img src="./img/注册.png" alt="注册"></router-link>
      </span>
    <span class="user" v-show="userName">
        hello! {{userName}}
    </span>
  </div>
</template>

<script>
  import store from '@/vuex/store.js'
//  import { mapState } from 'vuex'
  export default {
    name: 'header',
    data () {
      return {
        msg: 'head'
      }
    },
    computed: {
//      ...mapState(['userName'])
      userName () {
        return this.$store.state.head.userName
      }
    },
    store
  }
</script>

<style scoped>
  li {
    list-style: none;
  }
  a {
    list-style: none;
  }
  .header {
    width: 100%;
    text-align: center;
    line-height: 75px;
    color: #009efd;
    background: url("./img/bg.png") no-repeat center;
  }
  .header ul, li{
    display: inline-block;
  }
  .header li {
    padding: 0 30px 0 30px;
  }
  .brand {
    padding-right: 110px;
  }
  .tab {
    vertical-align: middle;
  }
  .tab-item ,.user{
    color: #009efd;
    cursor: pointer;
  }
  .tab-item span:hover,.user:hover {
    color: #000;
  }
  .login,.user {
    padding-left: 100px;
  }
  .login a,.user a {
    margin-left: 10px;
  }
  @media (max-height: 800px),(max-width:1000px) {
    .brand{
      padding-right: 0px;
    }
    .header li {
      padding: 0 20px 0 20px;
    }
    .login,.user{
      padding-left: 50px;
    }
  }
</style>
