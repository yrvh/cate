<template>
  <div class="container">
    <div class="login-box" @dblclick="resetLoginForm">
      <div class="avatar">
        <img :src="require('../../public/img/avatar.png')" alt="头像">
      </div>
      <!-- 登录表单的区域-->
      <div class="content">
        <div class="title">订餐管理系统</div>
        <el-form ref="loginFormRef" :model="loginForm" :rules="loginFormRules" class="login-form">
          <el-form-item prop="account_name" >
            <span class="item-name" slot="label">账号</span>
            <el-input v-model="loginForm.account_name" placeholder="请输入账号"
                      prefix-icon="iconfont icon-denglu" clearable></el-input>
          </el-form-item>

          <el-form-item prop="password" >
            <span class="item-name" slot="label">密码</span>
            <el-input v-model="loginForm.password" placeholder="请输入密码"
                      prefix-icon="iconfont icon-mima" clearable show-password></el-input>
          </el-form-item>

          <el-form-item>
            <el-button type="primary" @click="login" class="login-btn">登录</el-button>
          </el-form-item>
        </el-form>
      </div>
    </div>
  </div>
</template>

<script>
import { loginCate } from "network/login";
import { LOGIN } from "store/mutype";

export default {
  name: "Login",
  data() {
    return {
      loginForm: {
        account_name: "",
        password: ""
      },
      loginFormRules: {
        account_name: [
          { required: true, message: '请输入登录账号!~', trigger: 'blur'},
          { min: 5, max: 24, message: '长度在5 ~ 24个字符之间!~',trigger: 'blur'}
        ],
        password: [
          { required: true, message: '请输入登录密码!~', trigger: 'blur'},
          { min: 6, max: 32, message: '长度在6 ~ 32个字符之间!~',trigger: 'blur'}
        ],
      },
    }
  },
  methods: {
    resetLoginForm() {   // 清空整个表单内容
      this.$refs.loginFormRef.resetFields()
    },
    login() {
      this.$refs.loginFormRef.validate( async (valid) => {
        if(!valid) return
        // 发起网络请求
        //const { data:res } = await this.$axios.post('/ponyproperty-manager/login/login',this.loginForm)   // 参数格式是json
        loginCate(this.loginForm).then(res => {
          this.$store.commit(LOGIN,res)   // 将登成功 返回的token 保存在vuex中
        })

        this.$router.push('/main/manage')   // 页面跳转到主界面
      })
    },
  },
}
</script>

<style scoped lang="scss">
.container {
  min-height: 100vh;
  background: rgba(0,0,0,0) url("../../public/img/bg1.jpg") no-repeat scroll;
  background-size:100% 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  .login-box {
    width: 380px;
    border-radius: 3px;
    background-color: var(--cl-bg-op);
    .avatar {
      width:99px;
      height: 99px;
      border: 1px solid #f8f8f8;
      border-radius: 50%;
      padding: 1px;
      box-shadow: 0 0 10px #ddd;
      position: absolute;left: 50%;
      transform: translate(-50%,-50%)}
    .avatar img{width: 100%; height: 100%; border-radius: 50%;}
    .content { width: 80%; margin: 84px auto 40px; }
    .title {text-align: center; font-weight: 600; font-size: 22px; color: #fff;}
    .item-name {color: #fff; font-size: 18px;}
    //.login-form { color: var(--cl-danger); }
    .login-input { background-color: rgba(0,0,0,0);}
    .login-btn { margin-top: 50px; background-color: var(--cl-bg-f); width: 100%; height: 40px; border-radius: 20px; border: none;}
  }
}


</style>