<template>
	<div ref="lifeWarpper">
		<div class="dropBit">
      <div class="dropBitHeader">
        <h2>{{bitLow}}</h2>
        <span>{{bitLowInf}}</span>
      </div>
      <div class="warpperHover">
        <li class="dropBitItem" v-for="(item,index) in dropBitItem">
          <img :src="item.imgUrl" class="dB" :class="{ active: isActive }" alt="瞄^^">
          <span>{{ item.info }}</span>
        </li>
      </div>
    </div>
		<div class="bigStory">
      <div class="bigStoryHeader">
        <h2> {{turnPoint}} </h2>
        <span> {{bitLowInf}} </span>
      </div>
      <div class="warpperHover">
        <li class="bigStoryItem" v-for="(item,index) in bigStoryItem" >
          <img :src="item.imgUrl" class="bSI" :class="{ active:isActive }" alt="瞄^^">
          <span>{{ item.info }}</span>
        </li>
      </div>
    </div>
    <div class="interest">
      <div class="interestHeader">
          <h2>{{interest}}</h2>
          <span>{{bitLowInf}}</span>
      </div>
      <div class="warpperHover">
        <li class="interestItem" v-for="(item,index) in bigStoryItem">
          <img :src="item.imgUrl" class="iI">
          <span>{{ item.info }}</span>
        </li>
      </div>
    </div>
    <div class="messy">
      <div class="toLast">
        <div class="iconLast"></div>
        <span class="toLastFont">{{timesMea}}</span>
      </div>
      <div class="toNext">
        <span class="toNextFont">{{gateWay}}</span>
        <div class="iconNext"></div> 
      </div> 
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
      interest: '志趣',
      timesMea: '时光机',
      gateWay: '传送门',
      isActive: false,
      dropBitItem: [
        {
          imgUrl: require('../assets/images/dropbit/db0.jpg'),
          info: '111'
        },
        {
          imgUrl: require('../assets/images/dropbit/db1.jpg'),
          info: '222'
        },
        {
          imgUrl: require('../assets/images/dropbit/db2.jpg'),
          info: '333'
        },
        {
          imgUrl: require('../assets/images/dropbit/db3.jpg'),
          info: '444'
        },
        {
          imgUrl: require('../assets/images/dropbit/db4.jpg'),
          info: '555'
        }
      ],
      bigStoryItem: [
        {
          imgUrl: require('../assets/images/dropbit/db0.jpg'),
          info: '666'
        },
        {
          imgUrl: require('../assets/images/dropbit/db1.jpg'),
          info: '777'
        },
        {
          imgUrl: require('../assets/images/dropbit/db2.jpg'),
          info: '888'
        },
        {
          imgUrl: require('../assets/images/dropbit/db3.jpg'),
          info: '999'
        },
        {
          imgUrl: require('../assets/images/dropbit/db4.jpg'),
          info: '101010'
        }
      ],
      interestItem: [
        {
          imgUrl: require('../assets/images/dropbit/db0.jpg'),
          info: '111'
        },
        {
          imgUrl: require('../assets/images/dropbit/db1.jpg'),
          info: '222'
        },
        {
          imgUrl: require('../assets/images/dropbit/db2.jpg'),
          info: '333'
        },
        {
          imgUrl: require('../assets/images/dropbit/db3.jpg'),
          info: '444'
        },
        {
          imgUrl: require('../assets/images/dropbit/db4.jpg'),
          info: '555'
        }
      ],
      messyItem: [
        {
          imgUrl: require('../assets/images/dropbit/db0.jpg'),
          info: '111'
        },
        {
          imgUrl: require('../assets/images/dropbit/db1.jpg'),
          info: '222'
        },
        {
          imgUrl: require('../assets/images/dropbit/db2.jpg'),
          info: '333'
        },
        {
          imgUrl: require('../assets/images/dropbit/db3.jpg'),
          info: '444'
        },
        {
          imgUrl: require('../assets/images/dropbit/db4.jpg'),
          info: '555'
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
  },
  methods: {
  }
}

</script>

<style scoped>
  .dropBit,
  .bigStory,
  .interest,
  .messy
  {
    display: flex;
    width: 100%;
    height: 25%;
  }
  .dropBitHeader,
  .bigStoryHeader,
  .interestHeader{
    flex: 0 0 200px;
    border:1px solid #000;
    font-size: 24px;
    text-align: center;
  }
  .dropBitHeader>h2,
  .bigStoryHeader>h2,
  .interestHeader>h2{
    margin-top: 30px;
  }
  .dropBitHeader>span,
  .bigStoryHeader>span,
  .interestHeader>span{
    color: #BF1;
    margin-top: 20px;
  }
  .warpperHover
  {
    display: flex;
    width: 100%;
    height: 100%;
  }
  .dropBitItem,
  .bigStoryItem,
  .interestItem{
    width: 100%;
    height: 100%;
    flex: auto;
    list-style-type: none;
    border: 1px solid #000;
    border-radius: 10px;
    position: relative;
  }
  .dropBitItem>.dB,
  .bigStoryItem>.bSI,
  .interestItem>.iI{
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .dropBitItem>span,
  .bigStoryItem>span,
  .interestItem>span{
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .dropBitItem>.dB:hover,
  .bigStoryItem>.bSI:hover,
  .interestItem>.iI:hover{
    width: 100%;
    height: 100%;
    border-radius: 100px;
    opacity: 0.9; 
  }
  .dropBitItem>.dB:hover + span,
  .bigStoryItem>.bSI:hover + span,
  .interestItem>.iI:hover + span{
    font-size: 0;
  }
  .messy{
    display: flex;
    align-items: center;
  }
  .messy>.toLast{
    flex: auto; 
    text-align: center;
    font-size: 24px;
  }
  .messy>.toNext{
    flex: auto;
    text-align: center;
    font-size: 24px;
  }
  .iconLast{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-left: 1px solid #495060;
    border-bottom: 1px solid #495060;
    transform: rotate(45deg);
    -webkit-transform: rotate(45deg);
    -moz-border: rotate(45deg);
  }
  .iconNext{
    display: inline-block;
    width: 15px;
    height: 15px;
    border-left: 1px solid #495060;
    border-bottom: 1px solid #495060;
    transform: rotate(225deg);
    -webkit-transform: rotate(225deg);
    -moz-border: rotate(225deg);
  }
</style>