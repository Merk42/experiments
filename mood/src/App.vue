<template>
  <div id="app">
    <FullMoon @fullmoon="checkFull"></FullMoon>
    <RetrogradeMercury @retrograde="checkRetrograde"></RetrogradeMercury>
    <TimeOfMonth></TimeOfMonth>
    <h1>threat level {{level}}</h1>
  </div>
</template>

<script>
import FullMoon from './components/FullMoon.vue'
import RetrogradeMercury from './components/RetrogradeMercury.vue'
import TimeOfMonth from './components/TimeOfMonth.vue'

export default {
  name: 'app',
  components: {
    FullMoon,
    RetrogradeMercury,
    TimeOfMonth
  },
  data () {
    return {
      isPMS: Boolean,
      isRetrograde: Boolean,
      isFull: Boolean,
      level: Number
    }
  },
  methods: {
    checkFull (value) {
      this.isFull = value
    },
    checkRetrograde (value) {
      this.isRetrograde = value
      return value;
    },
    threatLevel() {
      this.level = 0;
      console.log(this.isRetrograde);
      console.log(this.checkRetrograde());
      if (this.isRetrograde){
        this.level = this.level+1
      }
      if (this.isFull){
        this.level = this.level+1
      }
    }
  },
  mounted(){
    this.threatLevel();
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
