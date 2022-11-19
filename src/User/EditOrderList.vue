<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑用户" :before-close="cancel"
             @open="handleopen" >
    <el-form :model="form" label-width="120px" ref="form">
      <el-form-item label="id">
        <el-input v-model="form.id" disabled />
      </el-form-item>
      <el-form-item label="订单编号">
        <el-input v-model="form.ordernumber"  />
      </el-form-item>
      <el-form-item label="订单总价" >
        <el-input v-model="form.sumPrice" />
      </el-form-item>
      <el-form-item label="订单详情" >
        <el-input v-model="form.shoppingcar" />
      </el-form-item>
      <el-form-item label="创建时间">
        <el-input v-model="form.ctime" disabled/>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel" >取消</el-button>
        <el-button type="primary" @click="handlesure">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script>
import {ElMessage} from "element-plus";

export default {
  name: "EditOrderList",
  data(){
    return{
      form:{
        id:"",
        ordernumber:"",
        sumPrice:"",
        shoppingcar:"",
        ctime:"",
      }
    }
  },
  props:{
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
    },
    handleopen(){
      this.$api.user.selectbyid("/selectbyidorder",{'id': this.id})
          .then(res=>{
            this.form=res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    handlesure(){
      this.$api.user.updatauser("/updataorder",this.form)
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
    },
  }
}
</script>

<style scoped>

</style>