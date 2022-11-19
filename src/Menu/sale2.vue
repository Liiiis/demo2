<template>

  <div  class="echart"
        id="mychart"
        :style="{ float: 'left', width: '50%', height: '400px' }"
  ></div>

  <div id="chartPie" style="width:400px; height:550px;"></div>
  <div id="chartline" :style="{ float: 'left', width: '50%', height: '400px' }"></div>
</template>

<script>
import * as echarts from "echarts";
export default {
  name: "AsaleB",
  data(){
    return{
      sumdata:[],//一天的销售总额
      cateorydata:[],//日期
      bing:[],//类别销量饼形图;
      catlegend:[],//类别销量图例
    }
  },
  mounted() {
    this.getsum()
    this.getdata()
    this.getbing()
  },
  methods:{
    getsum(){  //销售额 一天
      this.$api.selectallp.selectallp("/selectsumPrice")
          .then(res=>{
            for (var i=0;i<res.data.length;i++){
              this.sumdata.push(res.data[i].value)
            }
          }).catch(err=>{
        console.log(err)
      })
    },
    getdata(){
      this.$api.selectallp.selectallp("/selectsumPrice")  //日期
          .then(res=>{
            for (var i=0;i<res.data.length;i++){
              this.cateorydata.push(res.data[i].name)
            }
            this.initEcharts()
            this.initzhexian()
          }).catch(err=>{
        console.log(err)
      })
    },
    getbing(){
      this.$api.selectallp.selectallp("/selectsumPrice")
          .then(res=>{
            this.bing=res.data
            for (var i=0;i<res.data.length;i++){
              this.catlegend.push(res.data[i].name)
            }
            this.bingxing()
          }).catch(err=>{
        console.log(err)
      })
    },

    initEcharts() {
      const option = {
        title: {
          text: "米家销量"
        },
        tooltip: {},
        legend: {
          data: ["销售额"]
        },
        xAxis: {
          data: this.cateorydata
        },
        yAxis: {},
        series: [
          {
            name: "销售额",
            type: "bar", //类型为柱状图
            data: this.sumdata
          }
        ]
      };
      const myChart = echarts.init(document.getElementById("mychart"));// 图标初始化
      myChart.setOption(option);// 渲染页面
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        myChart.resize();
      });
    },
    bingxing(){
      this.chartPie = echarts.init(document.getElementById("chartPie"));
      this.chartPie.setOption({
        //设置标题,副标题,以及标题位置居中
        title: {
          text: '米家销量(饼状图)',
          //subtext: '纯属虚构',
          x: 'center'
        },
        //具体点击某一项触发的样式内容
        tooltip: {
          trigger: 'item',
          formatter: "{a} <br/>{b} : {c} ({d}%)"
        },
        //左上侧分类条形符
        legend: {
          orient: 'vertical',
          left: 'left',
          data: this.catlegend
        },
        //饼状图类型以及数据源
        series: [
          {
            name: '销量',
            type: 'pie',
            //radius: '70%',
            //center: ['50%', '60%'],
            data: this.bing,
            //设置饼状图扇形区域的样式
            itemStyle: {
              emphasis: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: 'rgba(0, 0, 0, 0.5)'
              }
            },
          }
        ]
      });
    },
    initzhexian() {
      const option = {
        xAxis: {
          data: this.cateorydata
        },
        legend: { // 图例
          data:this.cateorydata,
          bottom: "0%"
        },
        yAxis: {},
        series: [
          {
            name: "销量",
            data: this.sumdata,
            type: "line", // 类型设置为折线图
            label: {
              show: true,
              position: "top",
              textStyle: {
                fontSize: 16
              }
            }
          },
        ]
      };
      this.myChart = echarts.init(document.getElementById("chartline"));
      this.myChart.setOption(option);
      //随着屏幕大小调节图表
      window.addEventListener("resize", () => {
        this.myChart.resize();
      });
    }
  },

}
</script>

<style scoped>
#mychart{
  left: 30px;
  width: 600px;
  top: 30px;
  height: 600px;
}
#chartPie{
  left: 1100px;
  height: 800px;
  top: 30px;
  width: 800px;
}
</style>