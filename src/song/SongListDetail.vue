<template>

    <el-table :data="gridData">
      <el-table-column property="date" label="Date" width="150" />
      <el-table-column property="name" label="Name" width="200" />
      <el-table-column property="address" label="Address" />
    </el-table>

</template>

<script>
export default {
  name: "SongListDetail",
  data(){
    return{
      gridData:[],
    }
  },props: {
    dialogtable: {
      default: false
    },
  },mounted() {
  }
}
</script>

<style scoped>

</style>