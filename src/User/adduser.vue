<template>
  <el-form label-width="120px" :model="form" :rules="rules" ref="form">
    <el-form-item label="用户名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="form.phone"/>
    </el-form-item>
    <el-form-item label="email">
      <el-input v-model="form.email" />
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="form.sex" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button @click="resetForm('form')">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import { ElMessage } from 'element-plus'
export default {
  name: "AddUser",
  data(){
    return{
      form:{
        name:"",
        phone:"",
        email:"",
        sex:""
      },
      rules: {
      }
    }
  },methods:{
    onSubmit(){
      this.$api.user.adduser("/adduser",this.form)
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
          }).catch(err=>{
        console.log(err)
      })
      this.$refs.form.resetFields()
    },
    resetForm() {
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 350px;
}
.el-form{
  position: absolute;
  top: 30%;
  left: 30%;
}
</style>