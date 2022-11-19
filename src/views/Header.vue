<template>
  <el-menu
      :default-active="activeIndex"
      class="el-menu-demo"
      mode="horizontal"
      :ellipsis="false"
      @select="handleSelect"
  >
    <el-menu-item index="0"><el-image src="https://img.ixintu.com/download/jpg/20200817/f0410bd09e688ddb41b673de039ff704_512_512.jpg!con"
                                      style="width: 50px;height: 50px"></el-image></el-menu-item>
    <div class="flex-grow" />
    <el-menu-item index="1">小米后台管理</el-menu-item>
    <el-sub-menu index="2">
      <template #title>Workspace</template>
      <el-menu-item index="2-1">item one</el-menu-item>
      <el-menu-item index="2-2">item two</el-menu-item>
      <el-menu-item index="2-3">item three</el-menu-item>
      <el-sub-menu index="2-4">
        <template #title>item four</template>
        <el-menu-item index="2-4-1">item one</el-menu-item>
        <el-menu-item index="2-4-2">item two</el-menu-item>
        <el-menu-item index="2-4-3">item three</el-menu-item>
      </el-sub-menu>
    </el-sub-menu>
  </el-menu>
</template>

<script>
export default {
  name: "HeaderPage",

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
</style>