<template>
<div class="wrapper">
<!--  顶部图片以及链接-->
  <div class="top">
      <div class="xmimage">  <el-image src="https://img.ixintu.com/download/jpg/20200817/f0410bd09e688ddb41b673de039ff704_512_512.jpg!con"
      style="width: 90px;height: 90px"></el-image>    </div>
    <div class="nav">
      <ul class="first">
        <li> <router-link to="/Home/UserManager"><a href="#">Xiaomi手机</a></router-link>
        </li><li><a href="#">Redmi手机</a></li><li><a href="#">电视</a></li><li><a href="#">笔记本</a></li><li><a href="#">平板</a></li>
        <li><a href="#">家电</a></li><li><a href="#">路由器</a></li><li><a href="#">服务中心</a></li><li><a href="#">社区</a></li>
      </ul>
    </div>
  </div>

<!--  轮播图-->
  <div class="loop">
    <div class="block text-center" m="t-4">
      <el-carousel trigger="click" height="600px">
        <el-carousel-item v-for="item in item" :key="item">
          <h3 class="small justify-center" text="2xl"><el-image  :src=item style="width: 1200px;height: 600px" /></h3>
        </el-carousel-item>
      </el-carousel>
    </div>
  </div>

<!--  手机-->
  <div class="phone">
    <ul>
      <li v-for="item in phonelist" :key="item.id">
        <router-link :to="{ path: '/goods/details', query: {productID:item.productId} }">
          <img :src=item.path alt />
          <h2>{{item.name}}</h2>
          <h3>{{item.status}}</h3>
          <p>
            <span>{{item.price}}元</span>
            <span
                v-show="item.price != item.price"
                class="del"
            >{{item.price}}元</span>
          </p>
        </router-link>
      </li>
    </ul>
  </div>



</div>
</template>

<script>
export default {
  name: "ShopPage",
  data(){
    return{
      item: [
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/23ab407e0e0f7654a2112afc26a38d4b.jpg?thumb=1&w=1149&h=431&f=webp&q=90",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/6cdd149cb0fc40637a84b1fc5971f662.jpg?w=2452&h=920",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/b6f6c0c0eb8ede475c8858bc1370cfe9.jpg?thumb=1&w=1149&h=431&f=webp&q=90",
          "https://cdn.cnbj1.fds.api.mi-img.com/mi-mall/36b45c624f42fa81732457e3f9773dbd.jpg?thumb=1&w=1149&h=431&f=webp&q=90"
      ],
      phonelist:[]
    }
  },
  mounted() {
    this.getUserInfo()
  },
  methods:{
    getUserInfo(){
      this.$api.selectallp.selectallp("/selectallp")
          .then(res=>{
            this.phonelist= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
  }

}
</script>

<style scoped>
*{
  margin: 0;
  padding: 0;
}
.wrapper{
  width: 1300px;
  height: 100%;
  margin: 0 auto;
  position: relative;
}
/*顶部*/
.top{
  position: absolute;
  left: 30px;
  top: 0px;
  width: 100%;
  height: 93px;
}
/*导航栏*/
.nav{
  position: absolute;
  left: 160px;
  top: 35px;
}

ul.first > li a{
  display: block;
  text-decoration:none;
  text-align: center;
  line-height: 35px;
  color: black;
}
ul.first>li{
  position: relative;
  list-style: none;
  width: 97px;
  height: 35px;
  float: left;
  z-index: 2;
}
ul.first > li a:hover{
  background-color: #1a436f;
  display: block;
}

/*轮播图*/
.loop{
    position: absolute;
    top: 100px;
    left: 30px;
  width: 1200px;
  height: 600px;
}
.el-carousel__item h3 {
  color: #475669;
  opacity: 0.75;
  line-height: 150px;
  margin: 0;
  text-align: center;
}

.el-carousel__item:nth-child(2n) {
  background-color: #99a9bf;
}

.el-carousel__item:nth-child(2n + 1) {
  background-color: #d3dce6;
}

/*手机*/
.phone{
  position: absolute;
  top: 700px;
  left: 30px;
  width: 100%;
  height: 580px;
}
.phone ul li {
  z-index: 1;
  float: left;
  width: 234px;
  height: 290px;
  padding: 10px 0;
  margin: 0 0 14.5px 13.7px;
  background-color: white;
  -webkit-transition: all 0.2s linear;
  transition: all 0.2s linear;
  position: relative;
  list-style: none;
}
.phone ul li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
.phone ul li img {
  width: 160px;
  display: block;
  margin: 0 auto;
}
.phone ul li h2 {
  margin: 25px 10px 0;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.phone ul li h3 {
  margin: 5px 10px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #b0b0b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.phone ul li p {
  margin: 10px 10px 10px;
  text-align: center;
  color: #ff6700;
}
.phone ul li p .del {
  margin-left: 0.5em;
  color: #b0b0b0;
  text-decoration: line-through;
}
.phone #more {
  text-align: center;
  line-height: 280px;
}
.phone #more a {
  font-size: 18px;
  color: #333;
}
.phone #more a:hover {
  color: #ff6700;
}
.phone ul li .delete {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
.phone ul li:hover .delete {
  display: block
}
.phone ul li .delete:hover {
  color: #ff6700;
}
</style>