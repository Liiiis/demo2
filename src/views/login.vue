<template>
<!--  <div id="login">-->
<!--    <div id="login-form" @keyup.enter="inputInfo">-->
<!--      <h1> 后台登录</h1>-->
<!--      <label for="username"><i class="el-icon-user-solid" style="color: #c1c1c1"></i></label>-->
<!--      <input type="text" placeholder="用户名" name="username" id="username" autocapitalize="off" v-model.trim=loginForm.username aria-autocomplete="off">-->
<!--      <label for="password"><i class="el-icon-right" style="color: #c1c1c1"></i></label>-->
<!--      <input type="password" placeholder="密码" name="password" id="password" autocapitalize="off" v-model.trim="loginForm.password">-->
<!--      <div>-->
<!--        <el-button type="primary" v-on:click="inputInfo">登录</el-button>-->
<!--        <el-button type="info" >重置</el-button>-->
<!--&lt;!&ndash;        @click="open2" v-on:click="resetInfo"&ndash;&gt;-->
<!--      </div>-->
<!--    </div>-->
<!--  </div>-->
  <section>
    <!-- 背景颜色 -->
    <div class="color"></div>
    <div class="color"></div>
    <div class="color"></div>
    <div class="box">
      <!-- 背景圆 -->
      <div class="circle" style="--x:0"></div>
      <div class="circle" style="--x:1"></div>
      <div class="circle" style="--x:2"></div>
      <div class="circle" style="--x:3"></div>
      <div class="circle" style="--x:4"></div>
      <!-- 登录框 -->
      <div class="container">
        <div class="form">
          <span class="form_title">小米商店后台管理系统</span>
          <div class="form_input">
            <span>账号:</span>
            <input class="inputs" type="text" id="username" v-model=loginForm.username>
          </div>
          <div class="form_input">
            <span>密码:</span>
            <input class="inputs" type="password" id="password" v-model="loginForm.password">
          </div>
          <div class="btn_submit">
            <button @click="inputInfo()" class="login">登录</button>
            <button @click="register()" class="register">重置</button>
          </div>
        </div>
      </div>
    </div>
  </section>

</template>

<script>
  // import axios from 'axios'
  // import qs from 'qs'
  import { ElMessage } from 'element-plus'
export default {
  name: "UserLogin",
  data() {
    return {
      loginForm: {
        username: '',
        password: ''
      }
    }
  },
    methods:{
      inputInfo(){
        this.$api.login.login("/login", this.loginForm)
        .then(res=>{
          console.log("返回的"+res.data.password)
          localStorage.setItem('key',res.data.password)
          if (res.data.length!=0){
            this.$router.push("/Home");
            ElMessage({
              message: '登陆成功',
              grouping: true,
              type: 'success',
            })
          }else{
            ElMessage({
              message: '登陆失败，账号或密码错误',
              grouping: true,
              type: 'error',
            })
          }
        }).catch(err=>{
          console.log(err)
        })
      },
      register(){
        this.loginForm=[];
      }
    },
}
</script>

<style scoped>
/* 清除浏览器默认边距，
使边框和内边距的值包含在元素的width和height内 */

* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
}

/* 使用flex布局，让内容垂直和水平居中 */

section {
  /* 相对定位 */
  position: relative;
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 100vh;
  /* linear-gradient() 函数用于创建一个表示两种或多种颜色线性渐变的图片 */
  background: linear-gradient(to bottom, #f1f4f9, #dff1ff);
}

/* 背景颜色 */

section .color {
  /* 绝对定位 */
  position: absolute;
  /* 使用filter(滤镜) 属性，给图像设置高斯模糊*/
  filter: blur(200px);
}

/* :nth-child(n) 选择器匹配父元素中的第 n 个子元素 */

section .color:nth-child(1) {
  top: -350px;
  width: 600px;
  height: 600px;
  background: #ff359b;
}

section .color:nth-child(2) {
  bottom: -150px;
  left: 100px;
  width: 500px;
  height: 500px;
  background: #fffd87;
}

section .color:nth-child(3) {
  bottom: 50px;
  right: 100px;
  width: 500px;
  height: 500px;
  background: #00d2ff;
}

.box {
  position: relative;
}

/* 背景圆样式 */

.box .circle {
  position: absolute;
  background: rgba(255, 255, 255, 0.1);
  /* backdrop-filter属性为一个元素后面区域添加模糊效果 */
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
  border-radius: 50%;
  /* 使用filter(滤镜) 属性，改变颜色。
  hue-rotate(deg)  给图像应用色相旋转
  calc() 函数用于动态计算长度值
  var() 函数调用自定义的CSS属性值x*/
  filter: hue-rotate(calc(var(--x) * 70deg));
  /* 调用动画animate，需要10s完成动画，
  linear表示动画从头到尾的速度是相同的，
  infinite指定动画应该循环播放无限次*/
  animation: animate 10s linear infinite;
  /* 动态计算动画延迟几秒播放 */
  animation-delay: calc(var(--x) * -1s);
}

/* 背景圆动画 */

@keyframes animate {
  0%, 100%
  {
    transform: translateY(-50px);
  }
  50% {
    transform: translateY(50px);
  }
}

.box .circle:nth-child(1) {
  top: -50px;
  right: -60px;
  width: 100px;
  height: 100px;
}

.box .circle:nth-child(2) {
  top: 150px;
  left: -100px;
  width: 120px;
  height: 120px;
  z-index: 2;
}

.box .circle:nth-child(3) {
  bottom: 50px;
  right: -60px;
  width: 80px;
  height: 80px;
  z-index: 2;
}

.box .circle:nth-child(4) {
  bottom: -80px;
  left: 100px;
  width: 60px;
  height: 60px;
}

.box .circle:nth-child(5) {
  top: -80px;
  left: 140px;
  width: 60px;
  height: 60px;
}

/* 登录框样式 */

.container {
  position: relative;
  width: 400px;
  min-height: 400px;
  background: rgba(255, 255, 255, 0.1);
  display: flex;
  justify-content: center;
  align-items: center;
  backdrop-filter: blur(5px);
  box-shadow: 0 25px 45px rgba(0, 0, 0, 0.1);
  border: 1px solid rgba(255, 255, 255, 0.5);
  border-right: 1px solid rgba(255, 255, 255, 0.2);
  border-bottom: 1px solid rgba(255, 255, 255, 0.2);
}

/* 新增 */

a{
  text-decoration: none;
}

.form {
  overflow: hidden;
  position: relative;
  text-align: center;
}

.submit {
  position: absolute;
  z-index: 9;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  margin: auto;
  margin-top: 150px;
  width: 500px;
  height: 500px;
  background: rgba(255, 255, 255, 0.2);
  border-radius: 10px;
  color: #fff;
  display: flex;
  flex-direction: column;
}

.form_title {
  color: white;
  text-align: center;
  margin-top: 30px;
  font-size: 22px;
}

.form_input {
  box-sizing: border-box;
  display: flex;
  margin-top: 40px;
}

.inputs {
  height: 40px;
  width: 250px;
  border-radius: 5px;
  border: none;
  background-color: #eee;
  color: #666;
  padding-left: 20px;
}

.form_input span {
  width: 50px;
  align-self: center;
}

.btn_submit {
  align-self: center;
}

.login {
  margin-right: 20px;
  border: none;
  width: 80px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  background: #999;
  margin-top: 40px;
}

.login:hover {
  background: #666;
}

.register {
  margin-left: 20px;
  border: none;
  width: 80px;
  height: 40px;
  color: #fff;
  border-radius: 5px;
  background: #FFD204;
}

.register:hover {
  background: #ff9604;
}
</style>
