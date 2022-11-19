<template>
  <div class="protable">
  <div>
      <el-input placeholder="Please input" v-model="msg"/>
      <el-button type="primary" icon="Search" @click="handlesearch">搜索</el-button>
  </div><br>
  <div>
  <el-table
      :data="tableData"
      style="width: 100%;"
      border
      :row-class-name="tableRowClassName"
      @selection-change="handleSelectionChange">
    <el-table-column type="selection" width="55" align="center"/>
    <el-table-column prop="id" label="id" width="120" align="center"/>
    <el-table-column prop="number" label="编号" width="120" align="center"/>
    <el-table-column prop="name" label="名称" width="120"  align="center"/>
    <el-table-column prop="price" label="价格" width="120" align="center"/>
    <el-table-column prop="cost" label="成本" width="120" align="center"/>
    <el-table-column prop="stock" label="库存" width="120"  align="center"/>
    <el-table-column prop="status" label="商品规格" width="400" align="center"/>
    <el-table-column prop="category" label="类别" width="120" align="center"/>
    <el-table-column align="center" label="商品图片" prop="path" width="190" >
      <template #default="scope" >
        <img v-bind:src="scope.row.path" style="width:80px;height:80px;border:none;">
      </template>
    </el-table-column>
    <el-table-column label="操作" align="center">
      <template #default="scope">
        <el-button type="success" round @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
  </div>
    <div class="block">
      <el-pagination
          @size-change="handleSizeChange"
          @current-change="handleCurrentChange"
          :current-page="currentPage4"
          v-model:currentPage = "currentPage" v-model:page-size="pageSize"
          :page-sizes="[5, 10, 20, 50]"
          :page-size="100"
          layout="total, sizes, prev, pager, next, jumper"
          :total="total">
      </el-pagination>
    </div>
    <EditPro v-model:dialogFormVisible="dialogFormVisible"
             :id="id"
             @updateSuccess="handleSucEdit"
    ></EditPro>
  </div>
</template>

<script>
import EditPro from "@/Menu/EditPro";
import {ElMessage} from "element-plus";
export default {
  name: "ProManger",
  components:{
    EditPro
  },
  data(){
    return{
     dialogFormVisible:false,//更新弹窗
      id:-1,
      msg:'',
      tableData:[],
      total:10,
      currentPage: 1,
      pageSize: 5,
    }
  },mounted(){
    this.getUserInfo();
  },
  methods:{
    getUserInfo(){
      this.$api.selectallp.selectallp("/selectallp",{
        "currentPage": this.currentPage,
        "pageSize": this.pageSize
      }).then(res=>{
            this.tableData= res.data
        this.$api.user.selectuserall("/totalpro")
            .then(res=>{
              this.total= res.data
            }).catch(err=>{
          console.log(err)
        })
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
      this.$api.selectallp.selectvague("/selectvague",{
        'msg': this.msg,
        "currentPage": this.currentPage,
        "pageSize": this.pageSize})
          .then(res=>{
            this.tableData= res.data
            this.$api.user.selectuserall("/totalprovague",{'msg':this.msg})
                .then(res=>{
                  this.total= res.data
                }).catch(err=>{
              console.log(err)
            })
          }).catch(err=>{
        console.log(err)
      })
    },
    handleDelete(index, row){
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
      this.$api.selectallp.post1("/delpro",row.id)
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
            this.getUserInfo();
          }).catch(err=>{
        console.log(err)
      })
      }).catch((err)=>{
        this.$message({
          type: 'error！',
          message: err
        })
      })
    },
    handleSizeChange() {
      this.pageSize;
      if (this.msg==""){
        this.getUserInfo()
      }else {
        this.handlesearch()
      }
    },
    //获取分页工具条的当前页
    handleCurrentChange() {
      this.currentPage;
      if (this.msg==""){
        this.getUserInfo()
      }else {
        this.handlesearch()
      }
    },
  }

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
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
  margin: 0 auto;
  position: relative;
}
</style>