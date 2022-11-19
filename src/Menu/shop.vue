<template>
<div class="wrapper">
<!--  顶部图片以及链接-->
  <div class="top">
      <div class="xmimage">  <el-image src="https://img.ixintu.com/download/jpg/20200817/f0410bd09e688ddb41b673de039ff704_512_512.jpg!con"
      style="width: 90px;height: 90px"></el-image>    </div>
    <div class="nav">
      <ul class="first">
        <li> <router-link to="/PhoneList"><a href="#"><el-icon><Iphone /></el-icon>手机</a></router-link></li>
        <li> <router-link to="/NootBook"><a href="#"><el-icon><Platform /></el-icon>笔记本</a></router-link></li>
        <li><router-link to="/WatchList"><a href="#"><el-icon><Watch /></el-icon>智能穿戴</a></router-link></li>
        <li><router-link to="/AppLiance"><a href="#"><el-icon><Monitor /></el-icon>家电</a></router-link></li>
        <li><a href="#"><el-icon><HelpFilled /></el-icon>运动出行</a></li>
        <li><a href="#"><el-icon><ElementPlus /></el-icon>日用百货</a></li>
        <li><a href="#">服务中心</a></li>
        <li><router-link to="/ShopCar"><a href="#"><el-icon><ShoppingCart /></el-icon>购物车</a></router-link></li>
        <li><router-link to="/login"><a href="#"><el-icon><HomeFilled /></el-icon>后台管理</a></router-link></li>
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
    <div class="phonetop" style="font-size: 30px;background-color: cornflowerblue" >{{this.phone}}专区</div>
    <div class="phonelist">
      <ul>
        <li v-for="item in phonelist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
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

<!--智能穿戴-->
  <div class="dressed">
    <div class="phonetop" style="font-size: 30px;background-color: cornflowerblue" >{{this.dressed}}专区</div>
    <div class="phonelist">
      <ul>
        <li v-for="item in dressedlist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
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

<!--  笔记本-->
  <div class="nootbook">
    <div class="phonetop" style="font-size: 30px;background-color: cornflowerblue" >{{this.nootbook}}专区</div>
    <div class="phonelist">
      <ul>
        <li v-for="item in nootbooklist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
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

<!--  家电-->
  <div class="appliance">
    <div class="phonetop" style="font-size: 30px;background-color: cornflowerblue" >{{this.appliance}}专区</div>
    <div class="phonelist">
      <ul>
        <li v-for="item in appliancelist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
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

<!--  运动出行-->
  <div class="Sportstravel">
    <div class="phonetop" style="font-size: 30px;background-color: cornflowerblue" >{{this.Sportstravel}}专区</div>
    <div class="phonelist">
      <ul>
        <li v-for="item in Sportstravellist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
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

<!--  日用百货-->
  <div class="daily">
    <div class="phonetop" style="font-size: 30px;background-color: cornflowerblue" >{{this.daily}}专区</div>
    <div class="phonelist">
      <ul>
        <li v-for="item in dailylist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
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
      phonelist:[],
      dressedlist:[],
      nootbooklist:[],
      appliancelist:[],
      Sportstravellist:[],
      dailylist:[],
      phone:"手机",
      dressed:"智能穿戴",
      nootbook:"笔记本",
      appliance:"家电",
      Sportstravel:"运动出行",
      daily:"日用百货"
    }
  },
  mounted() {
    this.getphoneInfo()
    this.getdressedInfo()
    this.getnootbookInfo()
    this.getapplianceInfo()
    this.getSportstravelInfo()
    this.getdailyInfo()
  },
  methods:{
    getphoneInfo(){
      this.$api.selectallp.selectallp("/selectphoneten",{"phone":this.phone})
          .then(res=>{
            this.phonelist= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    getdressedInfo(){
      this.$api.selectallp.selectallp("/selectphoneten",{"phone":this.dressed})
          .then(res=>{
            this.dressedlist= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    getnootbookInfo(){
      this.$api.selectallp.selectallp("/selectphoneten",{"phone":this.nootbook})
          .then(res=>{
            this.nootbooklist= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    getapplianceInfo(){
      this.$api.selectallp.selectallp("/selectphoneten",{"phone":this.appliance})
          .then(res=>{
            this.appliancelist = res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    getSportstravelInfo(){
      this.$api.selectallp.selectallp("/selectphoneten",{"phone":this.Sportstravel})
          .then(res=>{
            this.Sportstravellist = res.data
          }).catch(err=>{
        console.log(err)
      })
    },
    getdailyInfo(){
      this.$api.selectallp.selectallp("/selectphoneten",{"phone":this.daily})
          .then(res=>{
            this.dailylist = res.data
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
  background-color: #99a9bf;
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
  color: #ff6700;
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
  top: 730px;
  left: 30px;
  width: 100%;
  height: 630px;
}
.phonetop{
  position: absolute;
  top: 0px;
  height: 40px;
  width: 15%;
}
.phonelist{
  position: absolute;
  top: 40px;
  height: 560px;
  width: 100%;
}
 ul li {
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
 ul li:hover {
  z-index: 2;
  -webkit-box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  box-shadow: 0 15px 30px rgba(0, 0, 0, 0.1);
  -webkit-transform: translate3d(0, -2px, 0);
  transform: translate3d(0, -2px, 0);
}
 ul li img {
  width: 160px;
  display: block;
  margin: 0 auto;
}
 ul li h2 {
  margin: 25px 10px 0;
  font-size: 14px;
  font-weight: 400;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration:none;
}
 ul li h3 {
  margin: 5px 10px;
  height: 18px;
  font-size: 12px;
  font-weight: 400;
  color: #b0b0b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration:none;
}
 ul li p {
  margin: 10px 10px 10px;
  text-align: center;
  color: #ff6700;
  text-decoration:none;
}



/*智能穿戴*/
.dressed{
  position: absolute;
  top: 1420px;
  width: 100%;
  left: 30px;
  height:600px;
}

/*笔记本*/
.nootbook{
  position: absolute;
  top: 2120px;
  width: 100%;
  left: 30px;
  height: 600px;
}
/*家电*/
.appliance{
  position: absolute;
  top: 2820px;
  width: 100%;
  left: 30px;
  height: 600px;
}

/*运动出行*/
.Sportstravel{
  position: absolute;
  top: 3500px;
  width: 100%;
  left: 30px;
  height: 650px;
}

/*日用百货*/
.daily{
  position: absolute;
  top: 4200px;
  width: 100%;
  left: 30px;
  height: 650px;
}

</style>