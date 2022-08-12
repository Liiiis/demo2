<template>
  <div class="protable">
  <div>
      <el-input placeholder="Please input" v-model="msg"/>
      <el-button type="primary" icon="Search" @click="handlesearch">搜索</el-button>
  </div><br>
  <div>
  <el-table
      :data="tableData"
      style="width: 100%"
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" />
    <el-table-column prop="id" label="id" width="120" />
    <el-table-column prop="number" label="编号" width="120" />
    <el-table-column prop="name" label="名称" width="120"  />
    <el-table-column prop="price" label="价格" width="120" />
    <el-table-column prop="cost" label="成本" width="120" />
    <el-table-column prop="stock" label="库存" width="120"  />
    <el-table-column prop="status" label="商品规格" width="180" />
    <el-table-column prop="category" label="类别" width="120" />
    <el-table-column align="center" label="商品图片" prop="path" width="190">
      <template #default="scope" >
        <img v-bind:src="scope.row.path" style="width:80px;height:80px;border:none;">
      </template>
    </el-table-column>
    <el-table-column label="Operations">
      <template #default="scope">
        <el-button type="success" round @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
    <EditPro v-model:dialogFormVisible="dialogFormVisible"
             :id="id"
             :@updateSuccess="handleSucEdit"
    ></EditPro>
  </div>
</template>

<script>
import EditPro from "@/Menu/EditPro";
export default {
  name: "ProManger",
  components:{
    EditPro
  },
  data(){
    return{
     dialogFormVisible:false,
      id:-1,
      msg:'',
      tableData:[],
    }
  },mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      this.$api.selectallp.selectallp("/selectallp")
          .then(res=>{
            this.tableData= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    handleEdit(index, row){
      console.log(row.id)
      this.id=row.id
      console.log(this.id)
      this.dialogFormVisible=true
    },
    handleSucEdit(){
      this.dialogFormVisible=false
      this.getUserInfo()
    },
    handlesearch(){
      this.$api.selectallp.selectvague("/selectvague",{'msg': this.msg})
          .then(res=>{
            this.tableData= res.data
          }).catch(err=>{
        console.log(err)
      })
    }
  }

}
</script>

<style scoped>
.el-table .warning-row {
  --el-table-tr-bg-color: var(--el-color-warning-light-9);
}
.el-table .success-row {
  --el-table-tr-bg-color: var(--el-color-success-light-9);
}

.el-input {
  width: 350px;
}
.protable{
  width: 100%;
  height: 100%;
}
</style>