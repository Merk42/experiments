<template>
  <div id="app" v-bind:class="CSSStyle"> 
    <div v-if="!configuring">
      <h1>Level: {{CSSStyle}}</h1>
      <p>({{threatLevel}} out of {{maxLevel}})</p>
      
      <FullMoon @fullEmit="checkFull"></FullMoon>
      
      <RetrogradeMercury @retrogradeEmit="checkRetrograde"></RetrogradeMercury>
    </div>
    <Config v-if="configuring"></Config>
    <button v-on:click="toggleConfig()">config</button>
  </div>
</template>

<script>

import FullMoon from './components/FullMoon.vue'
import RetrogradeMercury from './components/RetrogradeMercury.vue'
import Config from './components/Config.vue'

export default {
  name: 'app',
  components: {
    FullMoon,
    RetrogradeMercury,
    Config
  },
  data () {
    return {
      CSSStyle: String,
      configuring: false,
      threatLevel: Number,
      maxLevel: Number,
      isFull: Boolean,
      isRetrograde: Boolean,
      defaultSettings: {
        'fullmoon':1,
        'retrograde':1,
        'pms':1
      }
    }
  },
  methods: {

    checkFull ($event) {
      // this.isRetrograde = value
      // return value;
      console.log('event is', $event)
      this.isFull = $event
      this.countDumb();
    },
    checkRetrograde ($event) {
      // this.isRetrograde = value
      // return value;
      console.log('event is', $event)
      this.isFull = $event
      this.countDumb();
    },
    countDumb(){
      this.threatLevel = 0;
      this.maxLevel = parseInt(this.settings().fullmoon) + parseInt(this.settings().retrograde) + parseInt(this.settings().pms);
      

      console.log('is it dumb?')
      console.log(this.isFull)
      if (this.isFull){
        console.log('yes')
        this.threatLevel += parseInt(this.settings().fullmoon);
      }


      this.threatStyle(this.threatLevel, this.maxLevel);
    },
    toggleConfig(){
      this.configuring = !this.configuring;
    },
    settings(){
      // maybe this should be in computed?
      if (localStorage.getItem('settings') == null){
        return this.defaultSettings
      } else {
        return JSON.parse(localStorage.getItem('settings'));
      }
    },
    threatStyle(threat, max){
      let percent = threat/max;
      let cssclass = 'fine';
      if (percent > 0){
        cssclass = 'low';
      }
      if (percent > .3){
        cssclass = 'medium';
      }
      if (percent > .6){
        cssclass = 'high';
      }
      if (percent == 1){
        cssclass = 'worst';
      }
      this.CSSStyle = cssclass;
    }
  },
  mounted(){
  }
}
</script>

<style scoped>
#app{
  height:100vh
}
#app.low{
  background-color:lightgreen;
}
#app.medium{
  background-color:yellow;
}
#app.high{
  background-color:red;
}
#app.worst{
  background-color:darkred;
  color:#FFF
}
button{
  position:fixed;
  bottom:0;
}
</style>
