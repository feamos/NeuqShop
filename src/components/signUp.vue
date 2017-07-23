<!--注册组件-->

<template>
  <div class="signUp">
    <form class="form">
      <div class="username">
        <label for="userName">用户名：</label>
        <input type="text" id="userName" name="userName" placeholder="起个简洁霸气的用户名吧~" @blur="checkName"
               v-model="sigUp.userName">
        <span class="warn">{{nametext}}</span>
      </div>
      <div>
        <label for="userPassword">密码：</label>
        <input type="password" id="userPassword" name="userPassword" placeholder="6~18位密码~" @blur="checkPass" v-model="sigUp.userPassword">
        <span class="warn">{{passtext}}</span>
      </div>
      <div>
        <label for="reUserPassword">确认密码：</label>
        <input type="password" id="reUserPassword" name="reUserPassword" placeholder="确保你的密码没有错误~" @blur="checkPass" v-model="sigUp.reUserPassword">
        <span class="warn">{{confirmpasstext}}</span>
      </div>
      <div>
        <label for="email">邮箱：</label>
        <input type="text" id="email" name="email" placeholder="方便日后密码找回~" v-model="sigUp.email">
        <span class="warn" :class="{warntext: !mail}">{{mailtext}}</span>
      </div>

      <div>
        <label for="qq">QQ：</label>
        <input type="text" id="qq" name="qq" placeholder="方便与别人直接QQ联系~" v-model="sigUp.qq">
      </div>
      <div class='btn_sig'>
        <span @click="shuchu"></span>
      </div>
    </form>
  </div>
</template>

<script type="text/javascript">
  import regx from '../common/js/regx'
  //  import router from '../../router';
  import store from '../vuex/store'
  import { mapMutations, mapState } from 'vuex'
  export default{
    data () {
      return {
        nametext: '以中文或字母开头，长度为6-16位',
        passtext: '6-18位密码',
        confirmpasstext: '确认密码',
        mail: true,
        mailtext: '格式：*@*.com'
      }
    },
    computed: {
      ...mapState(['sigUp']),
      ...mapMutations(['updateUsername']),
      sigUp: {
        get () {
          return this.$store.state.sigUp
        },
        set (value) {
          this.$store.commit('updateSigup', value)
        }
      }
    },
    methods: {
      checkName () {
        if (regx.userName.test(this.sigUp.userName)) {
          this.nametext = '用户名可用'
        } else {
          this.nametext = '用户名格式不正确'
        }
      },
      checkPass () {
        if (this.sigUp.userName === '') {
          this.passtext = '请输入密码'
        } else if (regx.userPassword.test(this.sigUp.userPassword)) {
          this.passtext = '密码可用'
        } else if (this.sigUp.userPassword.length < 6) {
          this.passtext = '密码太短'
        } else {
          this.passtext = '密码太长'
        }
        if (this.sigUp.reUserPassword !== this.sigUp.userPassword) {
          this.confirmpasstext = '两次输入密码不一致'
        } else if (this.sigUp.reUserPassword) {
          this.confirmpasstext = '输入正确'
        }
      },
      shuchu () {
        console.log(this.sigUp)
      }
    },
    store
//    methods: {
//      signUp () {
//        this.$validator.validateAll().then( () => {
//          this.formData = $(".form").serialize();
//          this.$http.post("http://neuq.shop/my/RegistServlet", this.formData)
//            .then(data => {
//              this.data = data;
//              router.push({
//                path: '/signIn'
//              })
//            })
//            .catch(error => {
//              console.log(error);
//            });
//        }).catch( () => {
//          alert('请检查表单')
//        })
//      }
//    }
  }
</script>

<style scoped>
  * {
    margin: 0;
    padding: 0;
  }

  .signUp {
    width: 300px;
    height: 500px;
    margin-top: 43px;
    margin-left: 366px;
    background: url("../img/register/border_signUp.png") no-repeat;
  }

  .form .username {
    padding-top: 72px;
  }

  .form input {
    display: block;
    margin-left: 45px;
    border: 2px solid #0094be;
    border-radius: 5px;
    padding-left: 10px;
    line-height: 24px;
    font-size: 14px;
    outline: none;
    width: 198px;
  }

  .form label {
    display: block;
    color: #3e3e3e;
    font-size: 14px;
    text-align: left;
    padding-left: 53px;
  }

  .form .warn {
    display: block;
    color: #fe8454;
    font-size: 12px;
    line-height: 18px;
    text-align: left;
    padding-left: 53px;
  }

  .btn_sig span {
    display: inline-block;
    width: 204px;
    height: 34px;
    margin-top: 28px;
    background: url("../img/register/注册按钮.png") no-repeat;
    cursor: pointer;
  }

  .warntext {
    visibility: hidden;
  }
</style>
