<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑用户" :before-close="cancel"
             @open="handleopen" >
    <el-form :model="form" label-width="120px" ref="form">
      <el-form-item label="id">
        <el-input v-model="form.id" disabled />
      </el-form-item>
      <el-form-item label="姓名">
        <el-input v-model="form.name"  />
      </el-form-item>
      <el-form-item label="电话号码" >
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="邮箱" >
        <el-input v-model="form.email" />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.sex" disabled/>
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="form.ctime" disabled/>
      </el-form-item>
      <el-form-item label="修改时间" >
        <el-input v-model="form.uptime" disabled/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel" >取消</el-button>
        <el-button type="primary" @click="handlesure">确定</el-button
        >
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "EditUser",
  data(){
    return{
      form:{
        id:"",
        name:"",
        phone:"",
        email:"",
        sex:"",
        ctime:"",
        uptime:"",
      }
    }
  },props:{
    dialogFormVisible:{
      default:false
    },
    id:{
      required:true,
      type:Number
    }
  },
  methods:{
    cancel(){
      this.$emit("update:dialogFormVisible",false)
      this.$refs["form"].resetFields()
    },
    handleopen(){
      this.$api.user.selectbyid("/selectuserbyid",{'id': this.id})
          .then(res=>{
            this.form=res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    handlesure(){
      this.$api.user.updatauser("/updatauser",this.form)
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
           this.$emit("updateSuccess")
          }).catch(err=>{
        console.log(err)
      })
    }
  }
}
</script>

<style scoped>

</style>