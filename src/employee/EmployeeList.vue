<template>
  <div>
    <div>
      <el-input placeholder="Please input" v-model="msg"/>
      <el-button type="primary" icon="Search" @click="handlesearch">搜索</el-button>
    </div><br>
    <div>
      <el-table
          :data="ordertableData"
          style="width: 100%" border
          :row-class-name="tableRowClassName"
          @selection-change="handleSelectionChange">
        <el-table-column type="selection" width="55" align="center"/>
        <el-table-column prop="table_id" label="id" width="50" align="center"/>
        <el-table-column prop="number" label="编号" width="150"  align="center"/>
        <el-table-column prop="name" label="姓名" width="100" align="center"/>
        <el-table-column prop="phone" label="电话" width="150" align="center"/>
        <el-table-column prop="gender" label="性别" width="100" align="center"/>
        <el-table-column prop="identity" label="身份证号" width="250" align="center"/>
        <el-table-column prop="position" label="职位" width="150" align="center"/>
        <el-table-column prop="hiredate" label="入职时间" width="150" align="center"/>
        <el-table-column prop="state" label="状态" width="100" align="center"/>
        <el-table-column prop="remark" label="备注" width="100" align="center"/>
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
    <EditEmp v-model:dialogFormVisible="dialogFormVisible"
                   :table_id="table_id"
                   @updateSuccess="handleSucEdit"></EditEmp>
  </div>
</template>

<script>
import {ElMessage} from "element-plus";
import EditEmp from "@/employee/EditEmp";
export default {
  name: "OrderList",
  components: {EditEmp},
  data(){
    return{
      ordertableData:[],
      dialogFormVisible:false,
      table_id:'',
      msg:'',
      total:10,
      currentPage: 1,
      pageSize: 10,
    }
  },
  methods:{
    handleEdit(index, row){
      this.table_id=row.table_id
      this.dialogFormVisible=true
    },
    handleSucEdit(){
      this.dialogFormVisible=false
      this.getpageorderlist()
    },
    handlesearch(){
      this.$api.user.selectvague("/getvagueemplist",{
        'msg': this.msg,
        "currentPage": this.currentPage,
        "pageSize": this.pageSize})
          .then(res=>{
            this.ordertableData= res.data
            this.$api.user.selectuserall("/selectvagueemp",{'msg':this.msg})
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
      console.log(row.ordernumber)
      this.$confirm('确定删除吗？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        this.$api.selectallp.post1("/delorderlist",row.ordernumber)
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
    getpageorderlist(){
      this.$api.user.selectuserall("/getemployeelist",{
        "currentPage": this.currentPage,
        "pageSize": this.pageSize
      }).then(res=>{
        this.ordertableData= res.data
        this.$api.user.selectuserall("/totalemp")
            .then(res=>{
              this.total= res.data
            }).catch(err=>{
          console.log(err)
        })
      }).catch(err=>{
        console.log(err)
      })
    },
    handleSizeChange() {
      this.pageSize;
      if (this.msg==""){
        this.getpageorderlist()
      }else {
        this.handlesearch()
      }
    },
    //获取分页工具条的当前页
    handleCurrentChange() {
      this.currentPage;
      if (this.msg==""){
        this.getpageorderlist()
      }else {
        this.handlesearch()
      }
    },

  },
  mounted() {
    this.getpageorderlist()
  },
}
</script>

<style scoped>
.el-input {
  width: 350px;
}
</style>