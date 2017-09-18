<template>
  <div>
    <!-- <start-my-website></start-my-website> -->
    <!-- <my-life></my-life> -->
    <my-blog></my-blog>
    <my-footer></my-footer>
    <my-relation-ship></my-relation-ship>
    <call-me></call-me> 
  </div>
</template>

<script>
import startMyWebsite from './startMyWebsite.vue'
import myLife from './myLife.vue'
import myBlog from './myBlog.vue'
import myFooter from './myFooter.vue'
import myRelationship from './myRelationship.vue'
import callMe from './callMe.vue'

export default {
  name: 'root',
  components: {
    startMyWebsite,
    myLife,
    myBlog,
    myFooter,
    myRelationship,
    callMe
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #42b983;
}
</style>
