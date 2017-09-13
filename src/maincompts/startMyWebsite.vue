<template>
  <div class="startBackGround">
    <img src="../assets/images/city.jpg" alt="当你看不到图片时能看到我的心情。是的，我喜欢你！" class="backGroundImg">  
    <h1>{{WhoIAm}}</h1>
    <div class="starGo">
      <can-star></can-star>
    </div>  
    <div class="connectMe">{{connectMe}}</div> 
    <div class="downArrow"></div> 
  </div>
  
</template>

<script>
import canStar from '../littlecompts/canStar.vue'
export default {
  name: 'startMyWebsite',
  data () {
    return {
      WhoIAm: '我是叶忠澈',
      connectMe: '撩我'
    }
  },
  components: {
    canStar
  }
}

</script>

<style scoped>
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
  .downArrow{
    position: absolute;
    width: 30px;
    height: 30px;
    top: 88%;
    left: 50%;
    margin-left: -15px;
    border-bottom: 2px solid rgba(255,254,253,0.9);
    border-right: 2px solid rgba(255,254,253,0.9);
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
  }
</style>
