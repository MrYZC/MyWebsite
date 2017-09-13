<template>
	<div ref="lifeWarpper">
		<div class="dropBit">
      <div class="dropBitHeader">
        <h2>{{bitLow}}</h2>
        <span>{{bitLowInf}}</span>
      </div>
      <div class="warpperHover">
        <li class="dropBitItem" v-for="(item,index) in dropBitItem">
          <img :src="item.imgUrl" class="dB" alt="......">
        </li>
      </div>
    </div>
		<div class="bigStory">
      <div class="bigStoryHeader">
        <h2>{{turnPoint}}</h2>
        <span></span>
      </div>
      <img class="bigStoryItem" v-for="(item,index) in bigStoryItem">
    </div>
		<div class="messy">
      <div class="messyHeader">
        <h2>{{chaos}}</h2>
        <span></span>
      </div>
      <img class="messyItem" v-for="(item,index) in messyItem" >     
    </div>
    <div class="interest">
      <div class="interestHeader">
          <h2>{{interest}}</h2>
          <span></span>
      </div>
      <img class="interestItem">
    </div>
	</div>
</template>

<script>
export default {
  name: 'myLife',
  data () {
    return {
      bitLow: '点滴',
      bitLowInf: '润物细无声',
      turnPoint: '巨变',
      chaos: '祛熵',
      interest: '志趣',
      dropBitItem: [
        {
          imgUrl: require('../assets/images/dropbit/db0.jpg')
        },
        {
          imgUrl: require('../assets/images/dropbit/db1.jpg')
        },
        {
          imgUrl: require('../assets/images/dropbit/db2.jpg')
        },
        {
          imgUrl: require('../assets/images/dropbit/db3.jpg')
        },
        {
          imgUrl: require('../assets/images/dropbit/db4.jpg')
        }
      ],
      bigStoryItem: [
        {
          imgUrl: 'R'
        },
        {
          imgUrl: 'C'
        },
        {
          imgUrl: 'G'
        },
        {
          imgUrl: 'N'
        },
        {
          imgUrl: 'B'
        }
      ],
      messyItem: [
        {
          imgUrl: 'R'
        },
        {
          imgUrl: 'C'
        },
        {
          imgUrl: 'G'
        },
        {
          imgUrl: 'N'
        },
        {
          imgUrl: 'B'
        }
      ]
    }
  },
  mounted () {
    let w = window.innerWidth || document.documentElement.clientWidth || document.body.clientWidth
    let h = window.innerHeight || document.documentElement.clientWidth ||
      document.body.clientWidth
    this.$refs.lifeWarpper.style.height = h + 'px'
    this.$refs.lifeWarpper.style.width = w + 'px'
  }
}
</script>

<style>
  .dropBit{
    display: flex;
    width: 100%;
    height: 25%;
    background-color: rgb(251,244,230);
  }
  .warpperHover{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .dropBitHeader{
    flex: 0 0 200px;
    border:1px solid #000;
    font-size: 24px;
    text-align: center;
  }
  .dropBitHeader>h2{
    margin-top: 30px;
  }
  .dropBitHeader>span{
    color: #BF1;
    margin-top: 20px;
  }
  .dropBitItem{
    width: 100%;
    height: 100%;
    flex: auto;
    list-style-type: none;
    border: 1px solid #000;
    border-radius: 10px;
    z-index: 100;
  }
  .dropBitItem>.dB{
    width: 100%;
    height: 100%;
    opacity: 0.5;
  }
  .bigStory{
    display: flex;
    width: 100%;
    height: 25%;
    background-color: #F00;
  }
  .bigStoryHeader{

  }
  .bigStoryItem{

  }
  .messy{
    display: flex;
    width: 100%; 
    height: 25%;
    background-color: #0F0;
  }
  .messyHeader{

  }
  .messyItem{

  }
  .interest{
    display: flex;
    width: 100%; 
    height: 25%;
  }
</style>