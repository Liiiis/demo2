<template>
  <el-form label-width="120px">
    <el-form-item label="名称"><el-input v-model="pform.name" />
    </el-form-item>
    <el-form-item label="价格"><el-input v-model="pform.price" />
    </el-form-item>
    <el-form-item label="成本"><el-input v-model="pform.cost"/>
    </el-form-item>
    <el-form-item label="数量"><el-input v-model="pform.stock" />
    </el-form-item>
    <el-form-item label="商品规格"><el-input v-model="pform.status"/>
    </el-form-item>
    <el-form-item label="商品类别">
      <el-select v-model="pform.category">
        <el-option label="手机" value="手机" />
        <el-option label="智能穿戴" value="智能穿戴" />
        <el-option label="笔记本" value="笔记本" />
        <el-option label="家电" value="家电" />
        <el-option label="运动出行" value="运动出行" />
        <el-option label="日用百货" value="日用百货" />
      </el-select>
    </el-form-item>
    <el-form-item  label="商品图片地址" >
      <el-input v-model="pform.path" :disabled="true" autocomplete="off" clearable/>
      <el-upload
          :icon="Upload"
          :on-preview="handlePictureCardPreview"
          :on-remove="handleRemove"
          :on-success="successUpload"
          action="http://localhost:8089/uploadimg"
          clearable
          list-type="picture-card"
          style="margin-top: 10px">
        <i class="el-icon-plus"></i>
      </el-upload>
      <el-dialog :visible="dialogVisible">
        <img :src="dialogImageUrl" alt="" width="100%">
      </el-dialog>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">确定</el-button>
      <el-button>重置</el-button>
    </el-form-item>
  </el-form>
</template>

<script>
import {ElMessage} from "element-plus";
export default {
  name: "AddProduct",
  data(){
    return{
      pform:{
        number:"",
        name:"",
        price:"",
        cost:"",
        stock:"",
        status:"",
        category:"",
        path:"",
      },
      dialogImageUrl: '',
      dialogVisible: false,
    }
  },
  methods:{
    submitUpload() {
      this.$refs.upload.submit();
    },
    successUpload(response, file, fileList) {
      console.log('上传成功', response, file, fileList);
      this.$message({
        message: '恭喜你，图片上传成功！',
        type: 'success'
      });
      this.pform.path = response;
    },
    handlePictureCardPreview(file) {
      console.log(file.url)
      this.dialogImageUrl = file.url;
      this.dialogVisible = true;
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    handlePreview(file) {
      console.log(file);
    },
    onSubmit(){
      this.$api.selectallp.post1("/addproduct",this.pform)
          .then(res=>{
            console.log(res)
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
            this.pform={}
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
.el-form{
  position: absolute;
  top: 30%;
  left: 30%;
}
</style>