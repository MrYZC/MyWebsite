<template>
  <div class="wrapper">
  	<el-amap 
    vid="amapDemo"
    :center="center"
    :zoom="zoom"
    class="amap-demo"
    :events="events">
  		<el-amap-marker v-for="marker in markers" :position="marker.position">
  		</el-amap-marker>
  	</el-amap>
  </div>
</template>
	
<script>
import AMap from 'vue-amap'
export default {
  data () {
    let self = this
    return {
      zoom: 12,
      center: [121.59996, 31.197646],
      markers: [],
      markerRefs: [],
      events: {
        init (o) {
          setTimeout(() => {
            let cluster = new AMap.MarkCluster(o, self.markerRefs, {
              gridSize: 80,
              renderCluserMarker: self._renderCluserMarker
            })
            console.log(cluster)
          }, 1000)
        }
      }
    }
  },
  created () {
    let self = this
    let markers = []
    let index = 0
    let basePosition = [121.59996, 31.197646]
    while (++index <= 30) {
      markers.push({
        position: [basePosition[0] + 0.01 * index, basePosition[1]],
        content: '<div style="text-align:center; background-color: hsla(180, 100%, 50%, 0.7); height: 24px; width: 24px; border: 1px solid hsl(180, 100%, 40%); border-radius: 12px; box-shadow: hsl(180, 100%, 50%) 0px 0px 1px;"></div>',
        events: {
          init (o) {
            self.markerRefs.push(o)
          }
        }
      })
    }
    this.markers = markers
  },
  methods: {
    _renderCluserMarker (context) {
      const count = this.markers.length
      let factor = Math.pow(context.count / count, 1 / 18)
      let div = document.createElement('div')
      let Hue = 180 - factor * 180
      let bgColor = 'hsla(' + Hue + ', 100%, 50%, 0.7)'
      let fontColor = 'hsla(' + Hue + ', 100%, 20%, 1)'
      let borderColor = 'hsla(' + Hue + ', 100%, 40%, 1)'
      let shadowColor = 'hsla(' + Hue + ', 100%, 50%, 1)'
      div.style.backgroundColor = bgColor
      let size = Math.round(30 + Math.pow(context.count / count, 1 / 5) * 20)
      div.style.width = div.style.height = size + 'px'
      div.style.border = 'solid 1px ' + borderColor
      div.style.borderRadius = size / 2 + 'px'
      div.style.boxShadow = '0 0 1px' + shadowColor
      div.innerHTML = context.count
      div.style.lineHeight = size + 'px'
      div.style.color = fontColor
      div.style.fontSize = '14px'
      div.style.textAlign = 'center'
      context.marker.setOffset(new AMap.Pixel(-size / 2, -size / 2))
      context.marker.setContent(div)
    }
  },
  mounted () {
    // 姑且N为2
    // 为地图添加两个人
    this.markers = [
      {
        position: [121.5273285, 31.21515044]
      },
      {
        position: [121.5273286, 31.21515045]
      }
    ]
    // 模拟实时更新位置
    // 开启一个1s的轮训，每个人的经纬度都自增0.00001
    const step = 0.00001
    setInterval(() => {
      this.markers.forEach((marker) => {
        marker.position = [marker.position[0] + step, marker.position[1] + step]
      })
    }, 1000)
  }
}
</script>
<style scoped>
  .wrapper{
    position: absolute;
    width: 100%;
    height: 100%;
  }
	#amapDemo{
		
	}
</style>