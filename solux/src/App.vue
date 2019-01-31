<template>
  <div id="app">
    <Header></Header>
    <Cart></Cart>
    <Footer></Footer>
    <!--<router-view/>-->
  </div>
</template>

<script>
  import Header from './components/Header.vue'
  import Cart from './components/Cart.vue'
  import Footer from './components/Footer.vue'

  export default {
    components:{Header,Cart,Footer},
    name: 'App'
  }
</script>

<style>
  #app {
    font-family: "Helvetica Neue",Helvetica,"PingFang SC","Hiragino Sans GB","Microsoft YaHei","微软雅黑",Arial,sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    color: #2c3e50;
  }
</style>
