<template>
  <el-dialog :model-value="dialogFormVisible" title="编辑商品" :before-close="cancel"
         @open="handleopen" >
    <el-form :model="form" label-width="120px" ref="form">
      <el-form-item label="id">
        <el-input v-model="form.id" disabled />
      </el-form-item>
      <el-form-item label="编号">
        <el-input v-model="form.number" disabled />
      </el-form-item>
      <el-form-item label="名称" >
        <el-input v-model="form.name" />
      </el-form-item>
      <el-form-item label="价格" >
        <el-input v-model="form.price" />
      </el-form-item>
      <el-form-item label="成本">
        <el-input v-model="form.cost"/>
      </el-form-item>
      <el-form-item label="添加数量">
        <el-input v-model="form.stock"/>
      </el-form-item>
      <el-form-item label="商品规格" >
        <el-input v-model="form.status"/>
      </el-form-item>
      <el-form-item label="商品类别" >
        <el-input v-model="form.category"/>
      </el-form-item>
      <el-form-item label="图片">
        <el-image :src=form.path style="width:100px;height:100px;border:none;"></el-image>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="cancel" >Cancel</el-button>
        <el-button type="primary" @click="handleupdata">Confirm</el-button>
      </span>
    </template>
  </el-dialog>
</template>

<script >
import {ElMessage} from "element-plus";

export default {
  name: "EditProduct",
  data(){
    return{
      form:{
        id:"",
        number:"",
        name:"",
        price:"",
        cost:"",
        stock:"",
        status:"",
        category:"",
        path:""
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
      this.$api.selectallp.selectbyid("/selectbyid",{'id': this.id})
          .then(res=>{
            this.form=res.data.data
            this.form.stock=0
            console.log(this.form)
          }).catch(err=>{
        console.log(err)
      })
    },
    handleupdata(){
      this.$api.selectallp.post1("/updataproduct",this.form)
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
.el-button--text {
  margin-right: 15px;
}
.el-select {
  width: 300px;
}
.el-input {
  width: 300px;
}
.dialog-footer button:first-child {
  margin-right: 10px;
}
</style>