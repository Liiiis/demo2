<template>
  <div class="shoppingCart">
    <!-- 购物车头部 -->
    <div class="cart-header">
      <div class="cart-header-content">
        <p>
          <i class="el-icon-shopping-cart-full" style="color:#ff6700; font-weight: 600;"></i>
          我的购物车
        </p>
        <span>温馨提示：产品是否购买成功，以最终下单为准哦，请尽快结算</span>
      </div>
    </div>
    <!-- 购物车头部END -->

    <!-- 购物车主要内容区 -->
    <div class="content" v-if="getShoppingCart.length>0">
      <ul>
        <!-- 购物车表头 -->
        <li class="header">
          <div class="pro-check">
            <el-checkbox v-model="isAllCheck">全选</el-checkbox>
          </div>
          <div class="pro-img"></div>
          <div class="pro-name">商品名称</div>
          <div class="pro-price">单价</div>
          <div class="pro-num">数量</div>
          <div class="pro-total">小计</div>
          <div class="pro-action">操作</div>
        </li>
        <!-- 购物车表头END -->

        <!-- 购物车列表 -->
        <li class="product-list" v-for="(item,index) in getShoppingCart" :key="item.id">
          <div class="pro-check">
            <el-checkbox  @change="checkChange($event,index)"></el-checkbox>
          </div>
          <div class="pro-img">
              <img :src=item.path />
          </div>
          <div class="pro-name">
            <router-link
                :to="{ path: '/Detial', query: {id:item.id} }"
            >{{item.name}}</router-link>
          </div>
          <div class="pro-price">{{item.price}}元</div>
          <div class="pro-num">
            <el-input-number
                size="small"
                v-model="item.num"
                :min="1"
            ></el-input-number>
          </div>
          <div class="pro-total pro-total-in">{{item.price*item.num}}元</div>
          <div class="pro-action">
              <div style="text-align: right; margin: 10px 0 0">
                <el-button
                    type="danger"
                    icon="Delete"
                    @click="deleteItem($event,item.id)"
                >删除</el-button>
              </div>
          </div>
        </li>
        <!-- 购物车列表END -->
      </ul>
      <div style="height:20px;background-color: #f5f5f5"></div>
      <!-- 购物车底部导航条 -->
      <div class="cart-bar">
        <div class="cart-bar-left">
          <span>
            <router-link to="/">继续购物</router-link>
          </span>
          <span class="sep">|</span>
        </div>
        <div class="cart-bar-right">
          <span>
            <span class="total-price-title">合计：</span>
            <span class="total-price">{{totalPrice}}元</span>
          </span>
            <div :class="1> 0 ? 'btn-primary' : 'btn-primary-disabled'" @click="settlement">去结算</div>
        </div>
      </div>
      <!-- 购物车底部导航条END -->
    </div>
    <!-- 购物车主要内容区END -->

    <!-- 购物车为空的时候显示的内容 -->
    <div v-else class="cart-empty">
      <div class="empty">
        <h2>您的购物车还是空的！</h2>
        <p>快去购物吧！</p>
      </div>
    </div>
    <!-- 购物车为空的时候显示的内容END -->
  </div>
</template>

<script>
import {ElMessage} from "element-plus";
// import instance from "@/http/axios";
export default {
  name: "ShopCar",
  data(){
    return{
      getShoppingCart:[],
      proid:[],
      password:'',
      totaller:0,
    }
  },
  mounted() {
    this.getshopingcar()
  },
  methods:{
    getshopingcar(){
      this.password=localStorage.getItem('key')
      console.log("getpassword"+this.password)
      this.$api.selectallp.selectallp("/getshoppingcar")
          .then(res=>{
            this.getShoppingCart= res.data
            console.log(res.data)
          }).catch(err=>{
        console.log(err)
      })
    },

    settlement(){
      this.$confirm('请确定订单？', '提示', {
        confirmButtonText: '确定',
        cancelButtonText: '取消',
        type: 'warning'
      }).then(()=>{
        for (var i = 0 ;i<this.getShoppingCart.length;i++){
          this.proid.push(this.getShoppingCart[i].id)
          this.proid.push(this.getShoppingCart[i].name)
          this.proid.push(this.getShoppingCart[i].num)
        }
        console.log(this.getShoppingCart)
        this.$api.songlist.post1("/addorderlist",{
          "totalPrice":this.totalPrice,
          "getShoppingCart":this.proid,
          "Shoppingcar":this.getShoppingCart
        }).then(res=>{
          console.log(res)
        }).catch(err=>{
          console.log(err)
        })

        this.$api.songlist.get11("/delectshoppingcar")
            .then(res=>{
              ElMessage({
                message: res.data,
                grouping: true,
                type: 'success',
              })
              this.getshopingcar()
            }).catch(err=>{
          console.log(err)
        })
      }).catch((err)=>{
        this.$message({
          type: 'error！',
          message: err
        })
      })
    },
    deleteItem(index,e){
      this.$api.songlist.get11("/deletebyidshop",{'id':e})
          .then(res=>{
            ElMessage({
              message: res.data,
              grouping: true,
              type: 'success',
            })
            this.getshopingcar()
          }).catch(err=>{
        console.log(err)
      })
    },
    checkChange(val,key){
      console.log(key)
    }
  },
  computed:{
      totalPrice:{
          get(){
            var total= 0;
              for (var i = 0; i < this.getShoppingCart.length; i++) {
                  total += this.getShoppingCart[i].price * this.getShoppingCart[i].num
              }
            return total;
          }
      }
  }
}
</script>

<style scoped>
.shoppingCart {
  background-color: #f5f5f5;
  padding-bottom: 20px;
}
/* 购物车头部CSS */
.shoppingCart .cart-header {
  height: 64px;
  border-bottom: 2px solid #ff6700;
  background-color: #fff;
  margin-bottom: 20px;
}
.shoppingCart .cart-header .cart-header-content {
  width: 1650px;
  margin: 0 auto;
}
.shoppingCart .cart-header p {
  font-size: 25px;
  line-height: 58px;
  float: left;
  font-weight: normal;
  color: #424242;
}
.shoppingCart .cart-header span {
  color: #757575;
  font-size: 12px;
  float: left;
  height: 20px;
  line-height: 20px;
  margin-top: 30px;
  margin-left: 15px;
}
/* 购物车头部CSS END */

/* 购物车主要内容区CSS */
.shoppingCart .content {
  width: 1480px;
  margin: 0 auto;
  background-color: #fff;
}

.shoppingCart .content ul {
  background-color: #fff;
  color: #424242;
  line-height: 85px;
}
/* 购物车表头及CSS */
.shoppingCart .content ul .header {
  height: 85px;
  padding-right: 20px;
  color: #424242;
  list-style: none;
}
.shoppingCart .content ul .product-list {
  height: 85px;
  padding: 15px 26px 15px 0;
  border-top: 1px solid #e0e0e0;
  list-style: none;
}
.shoppingCart .content ul .pro-check {
  float: left;
  height: 85px;
  width: 110px;
}
.shoppingCart .content ul .pro-check .el-checkbox {
  font-size: 16px;
  margin-left: 24px;
}
.shoppingCart .content ul .pro-img {
  float: left;
  height: 85px;
  width: 120px;
}
.shoppingCart .content ul .pro-img img {
  height: 80px;
  width: 80px;
}
.shoppingCart .content ul .pro-name {
  float: left;
  width: 300px;
}
.shoppingCart .content ul .pro-name a {
  color: #424242;
}
.shoppingCart .content ul .pro-name a:hover {
  color: #ff6700;
}
.shoppingCart .content ul .pro-price {
  float: left;
  width: 140px;
  padding-right: 18px;
  text-align: center;
}
.shoppingCart .content ul .pro-num {
  float: left;
  width: 150px;
  text-align: center;
}
.shoppingCart .content ul .pro-total {
  float: left;
  width: 120px;
  padding-right: 81px;
  text-align: right;
}
.shoppingCart .content ul .pro-total-in {
  color: #ff6700;
}
.shoppingCart .content ul .pro-action {
  float: left;
  width: 80px;
  text-align: center;
}
.shoppingCart .content ul .pro-action i:hover {
  color: #ff6700;
}
/* 购物车表头及CSS END */

/* 购物车底部导航条CSS */
.shoppingCart .cart-bar {
  width: 1225px;
  height: 50px;
  line-height: 50px;
  background-color: #fff;
}
.shoppingCart .cart-bar .cart-bar-left {
  float: left;
}
.shoppingCart .cart-bar .cart-bar-left a {
  line-height: 50px;
  margin-left: 32px;
  color: #757575;
}
.shoppingCart .cart-bar .cart-bar-left a:hover {
  color: #ff6700;
}
.shoppingCart .cart-bar .cart-bar-left .sep {
  color: #eee;
  margin: 0 20px;
}
.shoppingCart .cart-bar .cart-bar-left .cart-total {
  color: #757575;
}
.shoppingCart .cart-bar .cart-bar-left .cart-total-num {
  color: #ff6700;
}
.shoppingCart .cart-bar .cart-bar-right {
  float: right;
}
.shoppingCart .cart-bar .cart-bar-right .total-price-title {
  color: #ff6700;
  font-size: 14px;
}
.shoppingCart .cart-bar .cart-bar-right .total-price {
  color: #ff6700;
  font-size: 30px;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary {
  float: right;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-left: 50px;
  background: #ff6700;
  color: #fff;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary-disabled {
  float: right;
  width: 200px;
  text-align: center;
  font-size: 18px;
  margin-left: 50px;
  background: #e0e0e0;
  color: #b0b0b0;
}
.shoppingCart .cart-bar .cart-bar-right .btn-primary:hover {
  background-color: #f25807;
}
/* 购物车底部导航条CSS END */
/* 购物车主要内容区CSS END */

/* 购物车为空的时候显示的内容CSS */
.shoppingCart .cart-empty {
  width: 1225px;
  margin: 0 auto;
}
.shoppingCart .cart-empty .empty {
  height: 300px;
  padding: 0 0 130px 558px;
  margin: 65px 0 0;
  background: url(../img/cart-empty.png) no-repeat 124px 0;
  color: #b0b0b0;
  overflow: hidden;
}
.shoppingCart .cart-empty .empty h2 {
  margin: 70px 0 15px;
  font-size: 36px;
}
.shoppingCart .cart-empty .empty p {
  margin: 0 0 20px;
  font-size: 20px;
}
</style>