<template>

      <el-menu
          active-text-color="#ffd04b"
          background-color="#545c64"
          class="el-menu-vertical-demo"
          default-active="2"
          text-color="#fff"
      >
<!--        <el-sub-menu :index="menu.id" v-for="(menu,index) in menu" :key="menu.id">-->
<!--          <template #title>-->
<!--            <el-icon>-->
<!--              <component :is="iconList[index]"></component>-->
<!--            </el-icon>-->
<!--            <span>{{menu.name}}</span>-->
<!--          </template>-->
<!--&lt;!&ndash;          <router-link to="/Home/ProManger"> <el-menu-item index="1-1">商品管理</el-menu-item></router-link>&ndash;&gt;-->
<!--            <el-menu-item :index="'/'+it.path" v-for="it in menu.children" :key="it.id">{{it.name}}</el-menu-item>-->
<!--        </el-sub-menu>-->
        <el-menu-item index="1">
          <el-icon><Monitor /></el-icon>
          <router-link to="/Home/shop"> <el-menu-item index="1-1"><span>首页</span></el-menu-item></router-link>
        </el-menu-item>
        <el-sub-menu :index="2">
          <template #title>
            <el-icon ><shop></shop></el-icon>
            <span>商品管理</span>
          </template>
          <router-link to="/Home/addproduct"> <el-menu-item index="1-1"><el-icon><Grid /></el-icon>添加商品</el-menu-item></router-link>
          <router-link to="/Home/ProManger"> <el-menu-item index="1-2"><el-icon><Grid /></el-icon>商品列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="3">
          <template #title>
            <el-icon ><user></user></el-icon>
            <span>用户管理</span>
          </template>
          <router-link to="/Home/adduser"> <el-menu-item index="1-1"><el-icon><Grid /></el-icon>添加用户</el-menu-item></router-link>
          <router-link to="/Home/UserManager"> <el-menu-item index="1-2"><el-icon><Grid /></el-icon>用户列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="4">
          <template #title>
            <el-icon ><Histogram></Histogram></el-icon>
            <span>销售分析</span>
          </template>
          <router-link to="/Home/sale"> <el-menu-item index="1-1"><el-icon><Grid /></el-icon>商品列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="5">
          <template #title>
            <el-icon ><Histogram></Histogram></el-icon>
            <span>歌单</span>
          </template>
          <router-link to="/Home/addsonglist"> <el-menu-item index="1-1"><el-icon><Grid /></el-icon>添加歌单</el-menu-item></router-link>
          <router-link to="/Home/SongListall"> <el-menu-item index="1-2"><el-icon><Grid /></el-icon>歌单列表</el-menu-item></router-link>
        </el-sub-menu>
      </el-menu>
</template>

<script>
export default {
  name: "AsidePage",
  data(){
    return{
      menu:[{id:1,name: "首页",children:[{id:1,name:"首页展示"}]},
        {id:2,name: "用户管理",children:[{id:1,name:"添加用户",path:"adduser"},{id:2,name:"用户列表",path:"ProManger"}]},
        {id:3,name: "订单管理",children:[{id:1,name:"订单列表"}]},
        {id:4,name:  "购物车",children:[{id:1,name:"购物车列表"}]},
        {id:5,name: "系统设置",children:[{id:1,name:"添加用户"},{id:2,name:"用户列表"}]},
      ],
      iconList:['HomeFilled', 'user', 'shop', 'tickets', 'setting'],
    }
  }
}
</script>

<style scoped>

</style>