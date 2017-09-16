<template>
	<div ref="lifeWarpper">
		<div class="dropBit">
      <div class="dropBitHeader">
        <h2>{{bitLow}}</h2>
        <span>{{bitLowInf}}</span>
      </div>
      <div class="warpperHover">
        <li class="dropBitItem" v-for="(item,index) in dropBitItem">
          <img :src="item.imgUrl" @mouseenter.stop="warpperEnter" @mouseleave.stop="warpperLeave" class="dB" :class="{ active: isActive }" alt="瞄^^">
          <span v-if="display">{{ item.info }}</span>
        </li>
      </div>
    </div>
		<div class="bigStory">
      <div class="bigStoryHeader">
        <h2> {{turnPoint}} </h2>
        <span> {{bitLowInf}} </span>
      </div>
      <div class="warpperHover">
        <li class="bigStoryItem" v-for="(item,index) in bigStoryItem">
          <img :src="item.imgUrl" class="bSI">
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
      <div class="messyHeader">
        <h2>{{chaos}}</h2>
        <span>{{bitLowInf}}</span>
      </div>
      <img class="messyItem" v-for="(item,index) in messyItem" >     
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
      isActive: false,
      display: true,
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
    warpperEnter () {
      this.display = false
    },
    warpperLeave () {
      this.display = true
    }
  }
}
</script>

<style>
  .dropBit,
  .bigStroy,
  .interest
  {
    display: flex;
    width: 100%;
    height: 25%;
  }
  .warpperHover{
    display: flex;
    width: 100%;
    height: 100%;
  }
  .dropBitHeader,
  .bigStoryHeader,
  .interestHeader{
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
  .dropBitItem>.dB{
    width: 100%;
    height: 100%;
    opacity: 0;
  }
  .bigStoryItem>.bSI,
  .interestItem>.iI{
    width: 100%;
    height: 100%;
    opacity: 0.9;
  }
  .dropBitItem>span,
  .bigStoryItem>span,
  .interestItem>span{
    position: absolute;
    top: 20px;
    left: 10px;
  }
  .dropBitItem>.dB:hover{
    width: 100%;
    height: 100%;
    border-radius: 100px;
    opacity: 0.9; 
    font-size: 0;
  }
  .bigStory{
    display: flex;
    width: 100%;
    height: 25%;
    background-color: #F00;
  }
  .bigStoryItem{
    width: 100%;
    height: 100%;
    flex: auto;
    list-style-type: none;
    border: 1px solid #000;
    border-radius: 10px;
    position: relative;
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
</style>