<template>
  <div class="startBackGround">
    <img src="../assets/images/city.jpg" alt="图片被汪涵拉倒火星开会去了！" class="backGroundImg">  
    <h1>我是叶忠澈</h1>
    <div class="starGo">
      <can-star></can-star>
    </div>
    <div class="connectMe">撩我</div>  
  </div>
  
</template>

<script>
import canStar from '../littlecompts/canStar.vue'
import test1010 from '../littlecompts/test1010.vue'
export default {
  name: 'startMyWebsite',
  components: {
    canStar,
    test1010
  }
}

</script>

<style>
  .startBackGround{
    position: absolute;
    width: 100%;
    height: 100%;
    z-index: -1;
  }
  .backGroundImg{
    height: 100%;
    width: 100%;
  }

  h1{
    height: 72px;
    width: 240px;
    font-size: 48px;
    color: rgba(255,254,253,0.9);
    position: absolute;
    top: 50%;
    left: 50%;
    margin-left: -120px;
    margin-top: -36px;
  }
  .starGo{
    height: 80px;
    width: 100%;
    position:absolute;
    top: 0;
    left: 0;
  }
  .connectMe{
    height: 72px;
    width: 240px;
    font-size: 24px;
    color: rgba(255,254,253,0.9);
    position: absolute;
    top: 80%;
    left: 50%;
    margin-left: -25px;
  }
</style>
