<template>
  <div class="wrapper">
    <p></p>
  </div>
</template>

<script>
import * as D3 from 'd3'
export default {
  mounted () {
    let p = D3.select('p')
               .text('hello,world!')
    p.style('color', 'red')
    p.style('font-size', '72px')
    p.transition()
      .attr(fill, steelblue)
  }
}
</script>

<style>
	
</style>