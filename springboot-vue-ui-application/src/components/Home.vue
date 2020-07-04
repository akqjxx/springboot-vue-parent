<template>
  <div>
    <h2>我是首页</h2>
      <p>sewrewrwerewrwerwerwewerwrew</p>
<router-link to="/home/news" style="margin: 15px">新闻</router-link>
<router-link to="/home/message">消息</router-link>
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: "Home",
    components: {}
  }
</script>

<style scoped>

</style>
