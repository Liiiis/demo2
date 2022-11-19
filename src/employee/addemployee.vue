<template>
  <el-form label-width="120px" :model="form" ref="form">
    <el-form-item label="姓名">
      <el-input v-model="form.name" />
    </el-form-item>
    <el-form-item label="手机号码">
      <el-input v-model="form.phone"/>
    </el-form-item>
    <el-form-item label="性别">
      <el-input v-model="form.gender" />
    </el-form-item>
    <el-form-item label="身份证号">
      <el-input v-model="form.identity" />
    </el-form-item>
    <el-form-item label="职位">
      <el-input v-model="form.position" />
    </el-form-item>
    <el-form-item label="备注">
      <el-input v-model="form.remark" />
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
        number:"",
        name:"",
        phone:"",
        gender:"",
        identity:"",
        position:"",
        remark:""
      },
      }
  },methods:{
    onSubmit(){
      this.$api.user.adduser("/addemployee",this.form)
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
          }).catch(err=>{
        console.log(err)
      })
      this.form={}
    },
    resetForm() {
      this.form={}
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