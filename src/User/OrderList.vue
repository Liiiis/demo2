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
        <el-table-column prop="id" label="id" width="120" align="center"/>
        <el-table-column prop="ordernumber" label="订单编号" width="150"  align="center"/>
        <el-table-column prop="sumPrice" label="总价" width="150" align="center"/>
        <el-table-column prop="shoppingcar" label="订单详情" width="800" align="center"/>
        <el-table-column prop="ctime" label="添加时间" width="150" align="center"/>
        <el-table-column label="操作" align="center">
          <template #default="scope">
            <el-button type="success" round @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
            <el-button type="danger" @click="handleDelete(scope.$index, scope.row)">退款</el-button>
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
    <EditOrderList v-model:dialogFormVisible="dialogFormVisible"
              :id="id"
              @updateSuccess="handleSucEdit"></EditOrderList>
  </div>
</template>

<script>
import EditOrderList from "@/User/EditOrderList";
import {ElMessage} from "element-plus";
export default {
  name: "OrderList",
  components: {EditOrderList},
  data(){
    return{
      ordertableData:[],
      dialogFormVisible:false,
      id:'',
      msg:'',
      total:10,
      currentPage: 1,
      pageSize: 10,
    }
  },
  methods:{
    getUserInfo(){
      this.$api.user.selectuserall("/selectallorlist")
          .then(res=>{
            this.ordertableData= res.data
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
      this.getpageorderlist()
    },
    handlesearch(){
      this.$api.user.selectvague("/selectordervague",{
        'msg': this.msg,
        "currentPage": this.currentPage,
        "pageSize": this.pageSize})
          .then(res=>{
            this.ordertableData= res.data
            this.$api.user.selectuserall("/selectvaguetotal",{'msg':this.msg})
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
      this.$confirm('确定退款吗？', '提示', {
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
      this.$api.user.selectuserall("/getpageorderlist",{
        "currentPage": this.currentPage,
        "pageSize": this.pageSize
      }).then(res=>{
            this.ordertableData= res.data
          this.$api.user.selectuserall("/getalltotal")
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