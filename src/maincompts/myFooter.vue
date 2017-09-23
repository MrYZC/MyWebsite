<template>
  <div class="wrapper">
  	<el-amap
      vid="amapDemo"  
      :center="center"
      :zoom="zoom"  
      class="amap-demo">
      <el-amap-marker v-for="marker in markers" :position="marker.position" :events="marker.events"></el-amap-marker>
      <el-amap-info-window v-for="window in windows" :position="window.position" :visible="window.visible" :content="window.content"></el-amap-info-window>
    </el-amap>
  </div>
</template>
	
<script>
// import AMap from 'vue-amap'
export default {
  data () {
    return {
      zoom: 16,
      center: [114.838325, 30.644583],
      // center: [113.0448630848, 23.0429354222],
      markers: [],
      windows: []
    }
  },
  mounted () {
    let markers = []
    let windows = []
    let locationPoints = [
      [114.839268, 30.642535], // 出生
      [114.845939, 30.634475], // 搬迁
      [114.838325, 30.644554], // 小学
      [114.741834, 30.612775], // 中学(初中)
      [114.57162, 30.674589], // 中学(高中)
      [114.81565, 30.832590], // 复读
      [114.336702, 29.851102], // 大学
      [114.066919, 23.076567], // 暑期工
      [113.0448630848, 23.0429354222] // 佛山罗村工作
    ]
    let self = this
    let info = [
      ['1998年搬迁至此生活19年'],
      ['人生开始的地方'],
      ['学习还不错'],
      ['学校有点乱'],
      ['2009-2011 有些美好的回忆'],
      ['2011-2012 人生狷介'],
      ['2012-2016 风景旧曾谙'],
      ['14.7-14.9 暑期工'],
      ['2016-2017 RCG佛山锐诚云智能照明']
    ]
    for (let point = 0; point < locationPoints.length; point++) {
      markers.push({
        position: locationPoints[point],
        events: {
          click () {
            self.windows.forEach(window => {
              window.visible = false
            })

            self.$nextTick(() => {
              self.windows[point].visible = true
            })
          }
        }
      })
      windows.push({
        position: locationPoints[point],
        content: `<div class="prompt">${info[point]}</div>`,
        visible: false
      })
    }
    this.markers = markers
    this.windows = windows
  }
}
</script>
<style scoped>
  .amap-demo{
    position: absolute;
    width: 100%;
    height: 100%;
  }
  .prompt{
    background: white;
    width: 100px;
    height: 30px;
    text-align: center;
  }
</style>
