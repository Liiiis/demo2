<template>
  <el-form label-width="120px" :model="form">
    <el-form-item label="歌单id">
      <el-input  v-model="form.listId" />
    </el-form-item>
    <el-form-item label="歌单名字">
      <el-input v-model="form.listName" />
    </el-form-item>
    <el-form-item label="发布状态">
      <el-input v-model="form.publishStatus"/>
    </el-form-item>
    <el-form-item label="创建者">
      <el-input v-model="form.creator" />
    </el-form-item>
    <el-form-item>
      <el-button type="primary" icon="Check" @click="onSubmit">确定</el-button>
      <el-button @click="reset">重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "AddsongList",
  data(){
    return{
      form:{
        listId:"",
        listName:"",
        publishStatus:"",
        creator:"",
      }
    }
  },methods:{
    onSubmit(){
      this.$api.songlist.addsonglist("/addsonglist",this.form)
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
          }).catch(err=>{
        console.log(err)
      })
    },
    reset(){
      this.$refs.form.resetFields()
    }
  }
}
</script>

<style scoped>
.el-input {
  width: 350px;
}
</style>