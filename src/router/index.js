import Vue from 'vue'
import Router from 'vue-router'
import root from '@/maincompts/root'

// import startMyWebsite from '../maincompts/startMyWebsite.vue'
// import myLife from '../maincompts/myLife.vue'
// import myBlog from '../maincompts/myBlog.vue'
// import myFooter from '../maincompts/myFooter.vue'
// import myRelationship from '../maincompts/myRelationship.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/',
      name: 'root',
      component: root
    }
    // {
    //   path: '/start',
    //   name: 'startMyWebsite',
    //   component: startMyWebsite,
    //   redirect: '/'
    // },
    // {
    //   path: '/mylife',
    //   name: 'mylife',
    //   component: myLife,
    //   children: [
    //     {
    //       path: '/mylifeMove',
    //       name: 'move'
    //     },
    //     {
    //       path: '/mylifeQuiet',
    //       name: 'quiet'
    //     }
    //   ]
    // },
    // {
    //   path: '/myblog',
    //   name: 'myblog',
    //   component: myBlog
    // },
    // {
    //   path: '/myfoot',
    //   name: 'myfoot',
    //   component: myFooter
    // },
    // {
    //   path: '/relation',
    //   name: 'myRelationship',
    //   component: myRelationship
    // }
  ]
})
