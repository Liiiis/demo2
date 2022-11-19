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
          <router-link to=""> <el-menu-item index="1-1"><span>首页</span></el-menu-item></router-link>
        </el-menu-item>
        <el-sub-menu :index="2">
          <template #title>
            <el-icon ><shop></shop></el-icon>
            <span>商品管理</span>
          </template>
          <router-link to="/Home/addproduct"> <el-menu-item index="2-1"><el-icon><Grid /></el-icon>添加商品</el-menu-item></router-link>
          <router-link to="/Home/ProManger"> <el-menu-item index="2-2"><el-icon><Grid /></el-icon>商品列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="3">
          <template #title>
            <el-icon ><user></user></el-icon>
            <span>用户管理</span>
          </template>
          <router-link to="/Home/adduser"> <el-menu-item index="3-1"><el-icon><Grid /></el-icon>添加用户</el-menu-item></router-link>
          <router-link to="/Home/UserManager"> <el-menu-item index="3-2"><el-icon><Grid /></el-icon>用户列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="4">
          <template #title>
            <el-icon ><Histogram></Histogram></el-icon>
            <span>销售分析</span>
          </template>
          <router-link to="/Home/sale"> <el-menu-item index="4-1"><el-icon><Grid /></el-icon>类别销量</el-menu-item></router-link>
          <router-link to="/Home/sale2"> <el-menu-item index="4-2"><el-icon><Grid /></el-icon>日期销售额</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="5">
          <template #title>
            <el-icon><DocumentRemove /></el-icon>
            <span>订单管理</span>
          </template>
          <router-link to="/Home/OrderList"> <el-menu-item index="5-1"><el-icon><Grid /></el-icon>订单列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-sub-menu :index="6">
          <template #title>
            <el-icon ><user></user></el-icon>
            <span>员工管理</span>
          </template>
          <router-link to="/Home/addemployee"> <el-menu-item index="6-1"><el-icon><Grid /></el-icon>添加员工</el-menu-item></router-link>
          <router-link to="/Home/EmployeeList"> <el-menu-item index="6-2"><el-icon><Grid /></el-icon>员工列表</el-menu-item></router-link>
        </el-sub-menu>

        <el-menu-item index="7">
          <el-icon><SwitchButton /></el-icon>
          <router-link to="/"> <el-menu-item index="7-1"><span>退出</span></el-menu-item></router-link>
        </el-menu-item>
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