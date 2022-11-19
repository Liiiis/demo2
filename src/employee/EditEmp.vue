<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑用户" :before-close="cancel"
             @open="handleopen" >
    <el-form :model="form" label-width="120px" ref="form">
      <el-form-item label="id">
        <el-input v-model="form.table_id" disabled />
      </el-form-item>
      <el-form-item label="员工编号">
        <el-input v-model="form.number" disabled  />
      </el-form-item>
      <el-form-item label="员工姓名" >
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="员工电话" >
        <el-input v-model="form.phone" />
      </el-form-item>
      <el-form-item label="性别">
        <el-input v-model="form.gender" disabled />
      </el-form-item>
      <el-form-item label="身份证号">
        <el-input v-model="form.identity" disabled/>
      </el-form-item>
      <el-form-item label="职位">
        <el-input v-model="form.position"/>
      </el-form-item>
      <el-form-item label="入职时间">
        <el-input v-model="form.hiredate" disabled/>
      </el-form-item>
      <el-form-item label="员工状态">
        <el-input v-model="form.state"/>
      </el-form-item>
      <el-form-item label="备注">
        <el-input v-model="form.remark" />
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
        table_id:"",
        number:"",
        name:"",
        phone:"",
        gender:"",
        identity:"",
        position:"",
        remark:"",
        hiredate:"",
        state:""
      }

    }
  },
  props:{
    dialogFormVisible:{
      default:false
    },
    table_id:{
      required:true,
      type:Number
    }
  },
  methods:{
    cancel(){
      this.$emit("update:dialogFormVisible",false)
    },
    handleopen(){
      this.$api.user.selectbyid("/editemployee",{'table_id': this.table_id})
          .then(res=>{
            this.form=res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    handlesure(){
      this.$api.user.updatauser("/updataemp",this.form)
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