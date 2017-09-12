<template>
  <div class="starBody">
  	<canvas id="star1">当前浏览器不支持canvas</canvas>
  </div>	
</template>

<script>
class Stars {
  constructor (ctx, width, height, amount) {
    this.ctx = ctx
    this.width = width
    this.height = height
    this.stars = this.getStars(amount)
  }

  getStars (amount) {
    let stars = []
    while (amount--) {
      stars.push({
        x: Math.random() * this.width,
        y: Math.random() * this.height,
        r: Math.random() + 0.2
      })
    }
    return stars
  }

  draw () {
    let ctx = this.ctx
    ctx.save()
    ctx.fillStyle = 'white'
    this.stars.forEach(star => {
      ctx.beginPath()
      ctx.arc(star.x, star.y, star.r, 0, 2 * Math.PI)
      ctx.fill()
    })
    ctx.restore()
  }

  blink () {
    this.stars = this.stars.map(star => {
      let sign = Math.random() > 0.5 ? 1 : -1
      star.r += sign * 0.2
      if (star.r < 0) {
        star.r = -star.r
      } else if (star.r > 1) {
        star.r -= 0.2
      }
      return star
    })
  }
}
export default{
  data () {
    return {
    }
  },
  mounted: function () {
    let canvas = document.getElementById('star1')
    let ctx = canvas.getContext('2d')
    let width = window.innerWidth
    let height = window.innerHeight
    let stars = new Stars(ctx, width, height, 200)
    let count = 0
    canvas.width = width
    canvas.height = height
    const frame = () => {
      count++
      count % 10 === 0 && stars.blink()
      stars.draw()
      requestAnimationFrame(frame)
    }
    frame()
  }
}
</script>

<style scoped>
  #star1{
    width: 100%;
    height: 80px;
  }
</style>