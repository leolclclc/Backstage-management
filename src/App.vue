<template>
  <div id="app">
    <!-- home -->
    <router-view></router-view>
    <!-- <Home/> -->
  </div>
</template>

<script>
// import Home from './components/Home.vue'

export default {
  name: 'App',
  components: {
    // Home
  }
}
</script>

<style lang="scss">
html, body{
  width: 100%;
  height: 100%;
}
@import url('./assets/css/reset.css');
#app {
  width: 100%;
  height: 100%;
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
} 
</style>
