<template>

  <div class="phone">
    <div class="top"><video autoplay="autoplay" loop="loop" id="video" x-webkit-airplay="true" webkit-playsinline="true" muted="">
      <source src="https://cdn.cnbj1.fds.api.mi-img.com/product-images/xiaomiwatchcolor2p4b1/video-play.mp4" type="video/mp4">
    </video>
    </div>
    <div class="phonelist">
      <ul>
        <li v-for="item in phonelist" :key="item.id">
          <router-link :to="{ path: '/Detial', query: {id:item.id} }">
            <img :src=item.path alt />
            <h2>{{item.name}}</h2>
            <h3>{{item.status}}</h3>
            <p>
              <span>{{item.price}}元起</span>
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
  name: "WatchList",
  data(){
    return{
      phonelist:[],
      phone:"智能穿戴"
    }
  },
  methods:{
    getphoneInfo(){
      this.$api.selectallp.selectallp("/selecteproca",{"category":this.phone})
          .then(res=>{
            this.phonelist= res.data
          }).catch(err=>{
        console.log(err)
      })
    },
  },
  mounted() {
    this.getphoneInfo()
  }

}
</script>

<style scoped>

.phone{
  width: 100%;
  height: 100%;
  position: relative;
}
.top{
  position: absolute;
  top: 0px;
  width: 100%;
  height: 600px;
}

.phonelist{
  position: absolute;
  top: 600px;
  width: 80%;
  left: 10%;
}
ul li {
  z-index: 1;
  float: left;
  width: 500px;
  height: 500px;
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
}
ul li img {
  width: 240px;
  display: block;
  margin: 0 auto;
}
ul li h2 {
  margin: 25px 10px 0;
  font-size: 28px;
  font-weight: 400;
  color: #333;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration:blink
}
ul li h3 {
  margin: 5px 10px;
  height: 36px;
  font-size: 24px;
  font-weight: 400;
  color: #b0b0b0;
  text-align: center;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
  text-decoration:none
}
ul li p {
  height: 36px;
  font-size: 24px;
  margin: 20px 20px 20px;
  text-align: center;
  color: #ff6700;
  text-decoration:none
}
ul li p .del {
  margin-left: 0.5em;
  color: #b0b0b0;
  text-decoration: line-through;
}
#more {
  text-align: center;
  line-height: 280px;
}
#more a {
  font-size: 18px;
  color: #333;
}
#more a:hover {
  color: #ff6700;
}
ul li .delete {
  position: absolute;
  top: 10px;
  right: 10px;
  display: none;
}
ul li:hover .delete {
  display: block
}
ul li .delete:hover {
  color: #ff6700;
}
</style>