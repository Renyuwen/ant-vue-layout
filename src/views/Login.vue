<template>
  <div class="login">
    <a-card style="width: 460px;" :body-style="{ padding: '84px 64px' }">
      <div class="logo-wrapper">
        <icon-font type="icondog" class="logo"></icon-font>
        <span class="title">vue-lay-out</span>
      </div>

      <a-form-model ref="loginForm" :model="form" :rules="rules">
        <!-- 用户名 -->
        <a-form-model-item ref="name" prop="name">
          <a-input
            v-model="form.name"
            @blur="
              () => {
                $refs.name.onFieldBlur();
              }
            "
            size="large"
          >
            <a-icon
              slot="prefix"
              type="user"
              style="color: rgba(0, 0, 0, .25)"
            ></a-icon>
          </a-input>
        </a-form-model-item>
        <!-- 密码 -->
        <a-form-model-item ref="password" prop="password">
          <a-input-password
            v-model="form.password"
            @blur="
              () => {
                $refs.password.onFieldBlur();
              }
            "
            size="large"
            @keydown.enter="onSubmit"
          >
            <a-icon
              slot="prefix"
              type="lock"
              style="color: rgba(0, 0, 0, .25)"
            ></a-icon>
          </a-input-password>
        </a-form-model-item>
        <!-- 登录 -->
        <a-form-model-item>
          <a-button block size="large" type="primary" @click="onSubmit">
            登录
          </a-button>
        </a-form-model-item>
      </a-form-model>
    </a-card>
  </div>
</template>

<script>
import IconFont from "../scripts/IconFont";
export default {
  components: { IconFont },
  data() {
    return {
      form: {
        name: "",
        password: ""
      },
      rules: {
        name: [
          { required: true, message: "请输入用户名", trigger: "blur" },
          { min: 5, max: 8, message: "长度在3-5之间", trigger: "blur" }
        ],
        password: [
          { required: true, message: "请输入密码", trigger: "blur" },
          { min: 5, max: 8, message: "长度在3-5之间", trigger: "blur" }
        ]
      }
    };
  },
  methods: {
    onSubmit() {
      this.$refs.loginForm.validate(valid => {
        if (valid) {
          this.$message.success("登录成功！");
          this.$store.commit("login", this.form);
          this.$router.push("/home");
        } else {
          this.$message.error("用户名或密码错误！");
        }
      });
    }
  }
};
</script>

<style lang="less" scope>
.login {
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #f0f2f5 url("../assets/img/login_bg.jpg");
  background-size: cover;
  background-repeat: no-repeat;

  .logo-wrapper {
    margin-bottom: 38px;
    text-align: center;
    user-select: none;

    .logo {
      font-size: 58px;
      margin-right: 16px;
      color: dodgerblue;
    }

    .title {
      font-size: 32px;
      font-weight: bolder;
      font-family: "Ink Free";
    }
  }
}
</style>
