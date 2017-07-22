<!--登录组件-->

<template>
  <div class="signIn">
    <form action="http://localhost/my/LoginServlet" class="form">
      <div class="username">
        <input type="text" placeholder="用户名/邮箱" name="userName"
               onfocus="this.placeholder=''" onblur="this.placeholder='用户名/邮箱'">
        <p class="warn">用户名/邮箱不存在！</p>
      </div>

      <div>
        <input type="password" placeholder="密码" name="userPassword"
               onfocus="this.placeholder=''" onblur="this.placeholder='密码'">
        <p class="warn" >密码错了,再想想吧~</p>
      </div>

      <div class="rememberAndForget">
        <span>
          <input type="checkbox" checked>记住密码
        </span>
        <span>忘记密码>></span>
      </div>

      <div class='btn_log'>
        <span></span>
      </div>
      <div class="footer">
        <router-link to="/signUp"><span @click="changeState" class="routerToSignUp">竟然还没有账号？速去注册>></span></router-link>
      </div>

    </form>
  </div>
</template>

<script type="text/javascript">
  import router from '../router'
  export default{

    data () {
      return {
        formData: '',
        userName: '',
        userHead: ''
      }
    },

    methods: {
      // 用户点击“快速去注册”触发父组件(register.vue)的事件
      changeState () {
        this.$emit('changeState')
      },

      // 登录后获得用户名和用户头像
      signIn () {
        // this.errors.add('userName', '用户名/邮箱不存在');
//        this.formData = $(".form").serialize();
        this.$http.post('http://localhost/my/LoginServlet', this.formData)
          .then(response => {
            console.log(response)
            this.userName = response.data[0].userName
            //  that.userHead = response.data.data.userHead;
            //  触发父组件(register)给App.vue传值
            this.$emit('userSignIn', this.userName)
            //  路由到主页
            router.push({
              path: '/'
            })
          })
          .catch(error => {
            console.log(error)
          })
      }
    }

  }
</script>

<style scoped>
  * {
    margin:0;
    padding:0;
    text-decoration: none;
  }
  .signIn {
    width:300px;
    height: 341px;
    margin-top: 43px;
    margin-left: 366px;
    background: url("../img/register/border_signIn.png") no-repeat;
  }

  form {
    height: 341px;
  }
  form input {
    border: 2px solid #0094be;
    border-radius: 3px;
    padding-left: 10px;
    line-height: 24px;
    font-size: 14px;
    outline: none;
    width: 210px;
  }
  p {
    line-height:20px;
    font-size: 12px;
    color: #fe8454;
    text-align: left;
    padding-left: 50px;
  }
  .username {
    padding-top: 82px;
  }
  .rememberAndForget span {
    font-size: 12px;
    color: #3e3e3e;
  }
  .rememberAndForget span:first-child {
    margin-right: 98px;
  }
  input[type=checkbox] {
    width: 12px;
    height: 12px;
    vertical-align: middle;
    border: 0;
    outline: none;
    cursor: pointer;
  }
  .btn_log {
    padding-top: 30px;
  }
  .btn_log span {
    display: inline-block;
    width: 204px;
    height: 34px;
    background: url("../img/register/登录按钮.png") no-repeat;
  }
  .footer {
    padding-top: 30px;
  }
  .footer a {
    font-size: 12px;
    color: #444a50;
  }
  /*.warn {*/
    /*position: absolute;*/
    /*left: 3px;*/
    /*color: #fe8454;*/
  /*}*/

  /*a {*/
    /*margin-left: 53px;*/
    /*font-size: 14px;*/
    /*color: #3e3e3e;*/
  /*}*/

  /*@media only screen and (min-width: 1367px) {*/
    /*.signIn {*/
      /*background-size: 380px 440px;*/
      /*div + div {*/
        /*margin-top: 24px;*/
      /*}*/
      /*input {*/
        /*font-size: 20px;*/
        /*width: 300px;*/
        /*height: 40px;*/
        /*background: url("../../../img/register/input.png") no-repeat;*/
        /*background-size: 300px 40px;*/
        /*background: url("../../../img/register/btn_in_active.png") no-repeat;*/
        /*background-size: 300px 40px;*/
      /*}*/
    /*.warn {*/
      /*font-size: 16px;*/
      /*bottom: -20px;*/
    /*}*/
    /*.rememberAndForget {*/
    /*span {*/
      /*font-size: 20px;*/
    /*}*/
  /*}*/
  /*.routerToSignUp {*/
    /*font-size: 18px;*/
  /*}*/
  /*}*/
  /*}*/

  /*@media only screen and (max-width: 1366px) {*/
    /*.signIn {*/
    /*div + div {*/
      /*margin-top: 18px;*/
    /*}*/
    /*input {*/
      /*width: 204px;*/
      /*height: 34px;*/
      /*font-size: 14px;*/
      /*background: url("../../../img/register/input.png") no-repeat;*/
    /*}*/
    /*input[type=button] {*/
      /*background: url("../../../img/register/btn_in_active.png") no-repeat;*/
    /*}*/
    /*.warn {*/
      /*font-size: 12px;*/
      /*bottom: -14px;*/
    /*}*/
    /*.rememberAndForget {*/
    /*span {*/
      /*font-size: 14px;*/
    /*}*/
  /*}*/
  /*}*/

  /*}}*/
      /*input[type=button] {*/

</style>
