<template>
	<canvas id="myStar">当前浏览器不支持canvas</canvas>	
</template>

<script>
class Draw {
  constructor (el) {
    this.el = el
    this.canvas = document.getElementById(this.el)
    this.cxt = this.canvas.getContext('2d')
    this.canvas.width = window.innerWidth
    this.canvas.height = 200
    this.path = {
      beginX: 0,
      beginY: 0,
      endX: 0,
      endY: 0
    }
  }
}
export default {
  name: 'canStar',
  ready () {
    let draw = new Draw('myStar')
    draw()
  }
}
</script>

<style>
	
</style>