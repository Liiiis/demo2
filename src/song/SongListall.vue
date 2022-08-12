<template>
  <div class="all">
    <div class="top">
      <el-input placeholder="Please input" />
      <el-button type="primary" icon="Search">搜索</el-button>
      <br>
      <el-button type="danger" icon="Delete">批量删除</el-button>
    </div><br>
    <div>
      <el-table
          :data="tableData"
          border
          style="width: 100%">
        <el-table-column type="selection" width="55" />
        <el-table-column
            fixed
            prop="listId"
            label="歌单id"
            width="150">
        </el-table-column>
        <el-table-column
            prop="listName"
            label="歌单名字"
            width="120">
        </el-table-column>
        <el-table-column
            prop="publishStatus"
            label="发布状态"
            width="120">
        </el-table-column>
        <el-table-column
            prop="creator"
            label="创建者"
            width="120">
        </el-table-column>
        <el-table-column
            prop="createTime"
            label="创建时间"
            width="300">
        </el-table-column>
        <el-table-column
            prop="updateTime"
            label="更新时间"
            width="120">
        </el-table-column>
        <el-table-column label="Operations">
          <template #default="scope">
            <el-button type="primary" icon="Edit" size="small" @click="handleEdit(scope.$index, scope.row)">Edit</el-button>
            <el-button type="danger"  icon="Delete" size="small" @click="handleDelete(scope.$index, scope.row)">Delete</el-button>
            <el-button type="info" icon="CirclePlusFilled" size="small">添加歌曲</el-button>
          </template>
        </el-table-column>
      </el-table>
    </div>
    <el-drawer
        v-model="dialogtable"
        title="I have a nested table inside!"
        direction="rtl"
        size="50%">
      <SongListDetail :listId="listId"></SongListDetail>
    </el-drawer>
  </div>
</template>

<script>
import SongListDetail from "@/song/SongListDetail";
export default {
  name: "SongListall",
  components:{
    SongListDetail
  },
  data() {
    return {
      dialogtable:false,
      tableData:[],
      listId:"-1"
    }
  },

  mounted() {
    this.getsonglist()
  },
  methods: {
    handleEdit(index, row){
      this.dialogtable=true;
      this.listId=row.listId
    },
    getsonglist(){
      this.$api.songlist.songlistall("/songlistall")
          .then(res=>{
            console.log(res.data)
            this.tableData= res.data
          }).catch(err=>{
        console.log(err)
      })
    }
  },

}
</script>

<style scoped>
.el-input {
  width: 350px;
  padding-right: 10px;
  padding-bottom: 10px;
}
</style>