<template>
  <div class="register clearfix">
    <router-link to="/signIn" class="clearfix btn_signIn">
      <!--<img src="../img/register/btn_in.png" alt="" v-show="!isSignIn">-->
    </router-link>
    <router-link to="/signUp" class="clearfix btn_signUp">
      <!--<img src="../img/register/btn_up.png" alt="" v-show="!isSignUp">-->
    </router-link>

    <keep-alive>
      <router-view @changeState="toggleSignUp" @userSignIn="userSignIn"></router-view>
    </keep-alive>
  </div>
</template>

<script type="text/javascript">
  export default{

    methods: {

      //  点击登录按钮进入登录界面
      toggleSignIn () {
        this.isSignIn = true
        this.isSignUp = false
      },

      //  点击注册按钮进入注册界面
      toggleSignUp () {
        this.isSignIn = false
        this.isSignUp = true
      },

      //  给父组件(App.vue)传值
      userSignIn (userName) {
        this.$emit('userSignIn', userName)
      }
    },

    computed: {
      isSignIn () {
        var path = this.$route.path.slice(1)
        if (path === 'signIn') {
          return true
        } else if (path === 'signUp') {
          return false
        }
      },

      isSignUp () {
        var path = this.$route.path.slice(1)
        if (path === 'signIn') {
          return false
        } else if (path === 'signUp') {
          return true
        }
      }
    }
  }
</script>

<style scoped>
  .register {
    margin: 0 auto;
    margin-bottom: -170px;
    height: 750px;
    background: url("../img/register/register_bg.png") center no-repeat;
  }

  .btn_signIn, .btn_signUp {
    display: inline-block;
    float: left;
    width: 150px;
    height: 50px;
    margin-top: 2px;
  }

  .btn_signUp {
    margin-left: 0px;
  }
  .btn_signIn {
    margin-left: 366px;
  }

  @media only screen and (max-width: 1300px) {
    .btn_signIn, .btn_signUp {
      width: 150px;
      height: 45px;
    }

    .btn_signUp {
      margin-left: -4px;
    }
  }
</style>
