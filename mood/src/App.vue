<template>
  <div id="app" v-bind:class="CSSStyle"> 
    <div v-if="!configuring">
      <FullMoon @fullEmit="checkFull"></FullMoon>
      {{threatLevel}} out of {{maxLevel}}
    </div>
    <Config v-if="configuring"></Config>
    <button v-on:click="toggleConfig()">config</button>
  </div>
</template>

<script>

import FullMoon from './components/FullMoon.vue'
import Config from './components/Config.vue'

export default {
  name: 'app',
  components: {
    FullMoon,
    Config
  },
  data () {
    return {
      CSSStyle: String,
      configuring: false,
      threatLevel: Number,
      maxLevel: Number,
      isFull: Boolean,
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
        return defaultSettings
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
        cssclass = 'med';
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
    this.countDumb();
  }
}
</script>
