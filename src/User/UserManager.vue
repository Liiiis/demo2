<template>
  <div>
    <div>
      <el-input placeholder="Please input" v-model="msg"/>
      <el-button type="primary" icon="Search" @click="handlesearch">搜索</el-button>
    </div><br>
    <div>
      <el-table
          :data="UsertableData"
          style="width: 100%"
          :row-class-name="tableRowClassName"
          @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" />
        <el-table-column prop="id" label="id" width="120" />
        <el-table-column prop="name" label="姓名" width="120"  />
        <el-table-column prop="phone" label="电话号码" width="150" />
        <el-table-column prop="email" label="邮箱" width="200" />
        <el-table-column prop="sex" label="性别" width="120"  />
        <el-table-column prop="ctime" label="添加时间" width="300" />
        <el-table-column prop="uptime" label="修改时间" width="300" />
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button type="success" round @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
   <EditUser v-model:dialogFormVisible="dialogFormVisible"
             :id="id"
             @updateSuccess="handleSucEdit"></EditUser>
  </div>
</template>

<script>
import EditUser from "@/User/EditUser";
import {ElMessage} from "element-plus";
export default {
  name: "UserManager",
  components: {EditUser},
  data() {
    return {
      dialogFormVisible:false,
      id:-1,
      msg:'',
      UsertableData:[]
    }
  },
  mounted(){
    this.getUserInfo();
  },
  methods: {
    getUserInfo(){
      this.$api.user.selectuserall("/selectuserall")
          .then(res=>{
            this.UsertableData= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    handleEdit(index, row){
      this.id=row.id
      this.dialogFormVisible=true
    },
    handleSucEdit(){
      this.dialogFormVisible=false
      this.getUserInfo()
    },
    handlesearch(){
      this.$api.user.selectvague("/selectuservague",{'msg': this.msg})
          .then(res=>{
            this.UsertableData= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    handleDelete(index, row){
      this.$api.user.deletebyid("/deluser",{'id': row.id})
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
            this.getUserInfo()
          }).catch(err=>{
        console.log(err)
      })
    }

  }
}
</script>

<style scoped>
.el-input {
  width: 350px;
}
</style>