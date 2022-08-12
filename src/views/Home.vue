<template>
  <div class="common-layout">
    <el-container>
      <el-aside  style="background-color: #545c64;height: 100vh;" :width="asideWidth"><Aside></Aside></el-aside>
      <el-container>
        <el-header><Header></Header></el-header>
        <el-main><MainContent></MainContent></el-main>
      </el-container>
    </el-container>
  </div>

</template>

<script>
import Aside from "@/views/Aside";
import Header from "@/views/Header"
import MainContent from "@/views/MainContent";
import variables from '@/style/variables.scss'
import { ref } from 'vue'
export default {
  name: "HomePage",
  components: {
    Aside,
    Header,
    MainContent
  },data(){
    return{
      asideWidth : ref(variables.sideBarWidth)
    }
  }
}
</script>

<style scoped>
.common-layout{
  padding: 0;
}
</style>