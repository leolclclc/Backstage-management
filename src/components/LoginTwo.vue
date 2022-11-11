<template>
  <div class="login">
    <el-card class="box-card">
      <div slot="header" class="clearfix">
        <span>通用后台管理系统</span>
      </div>
      <el-form label-width="80px" :model="form" ref="form" :rules="rules">
        <el-form-item label="用户名" prop="username">
          <el-input v-model="form.username"></el-input>
        </el-form-item>
        <el-form-item label="密码" prop="password">
          <el-input type="password" v-model="form.password"></el-input>
        </el-form-item>
        <el-form-item>
          <el-button type="primary" @click="login('form')">登录</el-button>
        </el-form-item>
      </el-form>
    </el-card>
  </div>
</template>
<script>
export default {
  data() {
    const validateName = (rule, value, callback) => {
      //4-10
      let reg = /(^[a-zA-Z][a-zA-Z\s]{4,10}[a-zA-Z]$)/;
      if (value === "") {
        callback(new Error("请输入用户名"));
      } else if (!reg.test(value)) {
        callback(new Error("请输入4-10位用户名"));
      } else {
        callback();
      }
    };
    const validatePass = (rule, value, callback) => {
      //4-10
      let pass =
        /^(?=\{6,12})(?![a-zA-Z]+$)(?![A-Z0-9]+$)(?![A-Z\W_!@#$%^&*`~()-+=]+$)(?![a-z0-9]+$)(?![a-z\W_!@#$%^&*`~()-+=]+$)(?![0-9\W_!@#$%^&*`~()-+=]+$)[a-zA-Z0-9\W_!@#$%^&*`~()-+=]/;
      if (value === "") {
        callback(new Error("请输入密码"));
      } else if (!pass.test(value)) {
        callback(new Error("请输入6-12位包含大小写数字及特殊字符"));
      } else {
        callback();
      }
    };
    return {
      form: {
        username: "",
        password: "",
      },
      rules: {
        username: [{ validate: validateName, tigger: "blur" }],
        password: [{ validate: validatePass, tigger: "blur" }],
      },
    };
  },
  methods: {
    login(form) {
      this.$refs[form].validate((valid) => {
        if (valid) {
          console.log(this.form);
          this.axios
            .post("http://1.116.64.64:5004/api2/login", this.form)
            .then((res) => {
              console.log(res);
              if (res.data.status === 200) {
                localStorage.setItem("username", res.data.username);
                this.$message({ message: res.data.message, type: "success" });
                this.$router.push("/home");
              }
            })
            .catch((err) => {
              console.error(err);
            });
        } else {
          console.error(this.form);
        }
      });
    },
  },
};
</script>
<style lang="scss">
.login {
  width: 100%;
  height: 100%;
  position: absolute;
  background-color: #409eff;
  .box-card {
    width: 450px;
    margin: 200px auto;
    .el-card__header {
      font-size: 34px;
    }
    .el-button {
      width: 100%;
    }
  }
}
</style>