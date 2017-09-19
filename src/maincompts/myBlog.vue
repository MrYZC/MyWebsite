<template>
  <div class="wrapper">
  	<div class="wrapper1">
  		<div class="header">
  			<div class="wrapper2">
  				<input type="text" class="blog_input"><button class="blog_search">{{ searchContent }}</button>
  				<span class="find_1">{{find1}}</span>
  				<span class="find_2">{{find2}}</span>
  				<span class="find_3">{{find3}}</span>
  				<span class="find_4">{{find4}}</span>
  			</div>
  		</div>
  		<div class="essay">
  			<div class="wrapper2">
  				<div class="essay_item" v-for="essayItem in essayItems">
  					<h2 class="essay_header">{{essayItem.essayHeader}}</h2>
  					<p class="essay_content">{{essayItem.essayContent}}</p>
  				</div>
  			</div>	
  		</div>
  		<div class="tail">
  		  <div class="hot_essay">
          <h3>热门TOP10</h3>
          <div class="comm_to_read">
            <li class="list_essay" v-for="listEssay in listEssays">{{ listEssay.index}}. {{listEssay.essayHeader}}</li>  
          </div>
        </div>
        <div class="goHome"></div>
  		</div>
  	</div>
  </div>
</template>
<script>
export default {
  data () {
    return {
      searchContent: '我是AI',
      find1: 'web前端',
      find2: 'web后端',
      find3: '物联网',
      find4: '瞎掰',
      essayItems: [
        {
          essayHeader: 'Vue的艺术',
          essayContent: '作为一款轻量级的前端框架，Vue一直受中国前端的热力追捧，其MVVM的特性和周边诸如vue-router和vue-cli等插件带来了前端又一次革命'
        },
        {
          essayHeader: 'react的艺术',
          essayContent: '作为一款轻量级的前端框架，Vue一直受中国前端的热力追捧，其MVVM的特性和周边诸如vue-router和vue-cli等插件带来了前端又一次革命'
        },
        {
          essayHeader: 'Vue的艺术',
          essayContent: '作为一款轻量级的前端框架，Vue一直受中国前端的热力追捧，其MVVM的特性和周边诸如vue-router和vue-cli等插件带来了前端又一次革命'
        },
        {
          essayHeader: 'Vue的艺术',
          essayContent: '作为一款轻量级的前端框架，Vue一直受中国前端的热力追捧，其MVVM的特性和周边诸如vue-router和vue-cli等插件带来了前端又一次革命'
        },
        {
          essayHeader: 'Vue的艺术',
          essayContent: '作为一款轻量级的前端框架，Vue一直受中国前端的热力追捧，其MVVM的特性和周边诸如vue-router和vue-cli等插件带来了前端又一次革命'
        },
        {
          essayHeader: 'Vue的艺术',
          essayContent: '作为一款轻量级的前端框架，Vue一直受中国前端的热力追捧，其MVVM的特性和周边诸如vue-router和vue-cli等插件带来了前端又一次革命'
        }
      ],
      listEssays: [
        {
          essayHeader: '无人驾驶',
          index: '1'
        },
        {
          essayHeader: '最后的晚餐',
          index: '2'
        },
        {
          essayHeader: 'Vue的艺术',
          index: '3'
        },
        {
          essayHeader: 'react的实现',
          index: '4'
        },
        {
          essayHeader: 'bootStrap的目标',
          index: '5'
        },
        {
          essayHeader: 'es6的便利',
          index: '6'
        },
        {
          essayHeader: 'es6的便利',
          index: '7'
        },
        {
          essayHeader: 'es6的便利',
          index: '8'
        },
        {
          essayHeader: 'es6的便利',
          index: '9'
        },
        {
          essayHeader: 'es6的便利',
          index: '10'
        }
      ]
    }
  }
}
</script>
<style>
  .wrapper{
    background-color: #f5f5d5;
  }
	.wrapper1{
    width: 80%;
    margin: 0 auto;
	}
	.header{
		width: 100%;
		height: 100px;
	}
	.wrapper2{
		width: 100%;
		text-align: center;	
		padding-top: 35px;
	}
	.blog_input{
		width: 25%;
		height: 30px;
	}
  .find_1{
    margin-left: 30px;
    background-color: rgb(0,255,255);
  }
  .find_2{
    background-color: rgb(255,255,0);
  }
  .find_3{
    background-color: rgb(218,112,214);
  }
  .find_4{
    background-color: rgb(3,168,158);
  }
  .find_1,
  .find_2,
  .find_3,
  .find_4{
    border:1px solid #000;
    border-radius: 8px;
    padding: 5px;
  }
	.blog_search{
		width: 5%;
		height: 30px;
		background: rgb(0,107,255);
		border: none;
		color: #FFF;
	}
	.essay_item{
		height: 150px;
		border-bottom:1px solid #000;
	}
  .essay_header{
    
  }
  .essay_content{

  }
  .tail{
    background-color: #DEEBF7;
  }
  .list_essay{
    display: inline-block;
    font-weight: bolder;
    padding: 10px;
  }
</style>