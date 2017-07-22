<!--注册组件-->

<template>
  <div class="signUp">
    jfsdijfsdi
    <!--<form action="http://192.168.23.1/my/RegistServlet" method="post" class="form">-->
      <!--<div>-->
        <!--<label for="userName">用户名：</label>-->
        <!--<input v-validate ="'required|min:6|max:16'" type="text" id="userName" name="userName" placeholder="起个简洁霸气的用户名吧~"-->
               <!--onfocus="this.placeholder=''" onblur="this.placeholder='起个简洁霸气的用户名吧~'" v-model="userName">-->
        <!--<span class="warn" v-show="errors.has('userName')">{{ errors.first('userName')}}</span>-->
      <!--</div>-->
      <!--<div>-->
        <!--<label for="userPassword">密码：</label>-->
        <!--<input v-validate ="'required|min:6|max:16'" type="password" id="userPassword" name="userPassword" placeholder="6位以上即可~"-->
               <!--onfocus="this.placeholder=''" onblur="this.placeholder='6位以上即可~'" v-model="userPassword">-->
        <!--<span class="warn" v-show="errors.has('userPassword')">{{ errors.first('userPassword')}}</span>-->
      <!--</div>-->
      <!--<div>-->
        <!--<label for="reUserPassword">确认密码：</label>-->
        <!--<input v-validate ="'required|confirmed:userPassword'" type="password" id="reUserPassword" name="reUserPassword" placeholder="确保你的密码没有错误~"-->
               <!--onfocus="this.placeholder=''" onblur="this.placeholder='确保你的密码没有错误~'" v-model="reUserPassword">-->
        <!--<span class="warn" v-show="errors.has('reUserPassword')">{{ errors.first('reUserPassword')}}</span>-->
      <!--</div>-->
      <!--<div>-->
        <!--<label for="email">邮箱：</label>-->
        <!--<input v-validate ="'required|email'" type="text" id="email" name="email" placeholder="方便日后密码找回~"-->
               <!--onfocus="this.placeholder=''" onblur="this.placeholder='方便日后密码找回~'" v-model="email">-->
        <!--<span class="warn" v-show="errors.has('email')">{{ errors.first('email')}}</span>-->
      <!--</div>-->

      <!--<div>-->
        <!--<label for="qq">QQ：</label>-->
        <!--<input v-validate ="'required|qq'" type="text" id="qq" name="qq" placeholder="方便与别人直接QQ联系~"-->
               <!--onfocus="this.placeholder=''" onblur="this.placeholder='方便与别人直接QQ联系~'" v-model="qq">-->
        <!--<span class="warn" v-show="errors.has('qq')">{{errors.first('qq')}}</span>-->
      <!--</div>-->
      <!--<div>-->
        <!--<input type="button" @click="signUp">-->
      <!--</div>-->
    <!--</form>-->
  </div>
</template>

<script type="text/javascript">
//  import router from '../../router';
  export default{
    data () {
      return {
        formData: '',
        data: '',
        userName: '',
        userPassword: '',
        reUserPassword: '',
        email: '',
        qq: ''
      }
    }

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
  .signUp {
    width: 300px;
    height: 500px;
    margin-top: 43px;
    margin-left: 366px;
    background: url("../img/register/border_signUp.png") no-repeat;
  }
</style>
