// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// import iView from 'iview'
// import 'iview/dist/styles/iview.css'
import AMap from 'vue-amap'
import * as D3 from 'd3'

Vue.config.productionTip = false
// Vue.use(iView)
Vue.use(AMap)
Vue.use(D3)
// Object.definePrototype(Vue.prototype, '$D3', {value: D3})

AMap.initAMapApiLoader({
  key: '8be5542f899001703e51d3ee9f4ceb99',
  plugin: ['AMap.Autocomplete', 'AMap.PlaceSearch', 'AMap.Scale', 'AMap.OverView', 'AMap.ToolBar', 'AMap.MapType', 'AMap.PolyEditor', 'AMap.CircleEditor', 'AMap.MarkerClusterer']
})
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  template: '<App/>',
  components: { App }
})

