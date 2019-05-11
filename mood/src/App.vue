<template>
  <div id="app">
    <div v-if="!configuring">
      <FullMoon @fullEmit="checkFull"></FullMoon>
      {{threatLevel}}
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
      configuring: false,
      threatLevel: Number,
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
      console.log('using settings of: ', this.settings());
      console.log('is it dumb?')
      console.log(this.isFull)
      if (this.isFull){
        console.log('yes')
        this.threatLevel += parseInt(this.settings().fullmoon);
      }

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
    }
  },
  mounted(){
    this.countDumb();
  }
}
</script>
