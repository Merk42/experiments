<template>
  <div id="app">
    <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/>
    <FullMoon></FullMoon>
    <RetrogradeMercury></RetrogradeMercury>
    <TimeOfMonth></TimeOfMonth>
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue'
import FullMoon from './components/FullMoon.vue'
import RetrogradeMercury from './components/RetrogradeMercury.vue'
import TimeOfMonth from './components/TimeOfMonth.vue'

export default {
  name: 'app',
  components: {
    HelloWorld,
    FullMoon,
    RetrogradeMercury,
    TimeOfMonth
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
