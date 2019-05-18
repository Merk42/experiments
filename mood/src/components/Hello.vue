<template>
  <div id="app" v-bind:class="CSSStyle"> 
    <header v-bind:class="{ menu: configuring }">
      <button v-on:click="toggleConfig()" id="menuButton">menu</button>
      <h1>Level: {{CSSStyle}}</h1>
    </header>
    <main>
      <p>({{threatLevel}} out of {{maxLevel}})</p>
      <FullMoon @fullEmit="checkFull"></FullMoon>
      <RetrogradeMercury @retrogradeEmit="checkRetrograde"></RetrogradeMercury>
      <TimeOfMonth @pmsEmit="checkPMS"></TimeOfMonth>
    </main>
    <div id="closeMenu" v-on:click="toggleConfig()"></div>
    <aside>
      <Config></Config>
    </aside>
  </div>
</template>

<script>
import FullMoon from './FullMoon.vue'
import RetrogradeMercury from './RetrogradeMercury.vue'
import TimeOfMonth from './TimeOfMonth.vue'
import Config from './Config.vue'
export default {
  name: 'hello',
  components: {
    FullMoon,
    RetrogradeMercury,
    TimeOfMonth,
    Config
  },
  data () {
    return {
      msg: 'Welcome to Your Vue.js PWA',
      CSSStyle: String,
      configuring: false,
      threatLevel: Number,
      maxLevel: Number,
      isFull: Boolean,
      isRetrograde: Boolean,
      isPMS: Boolean,
      defaultSettings: {
        'fullmoon': 1,
        'retrograde': 1,
        'pms': 1
      }
    }
  },
  methods: {
    checkFull ($event) {
      // this.isRetrograde = value
      // return value;
      console.log('event is', $event)
      this.isFull = $event
      this.countDumb()
    },
    checkRetrograde ($event) {
      // this.isRetrograde = value
      // return value;
      console.log('event is', $event)
      this.isRetrograde = $event
      this.countDumb()
    },
    checkPMS ($event) {
      // this.isRetrograde = value
      // return value;
      console.log('event is', $event)
      this.isPMS = $event
      this.countDumb()
    },
    countDumb () {
      this.threatLevel = 0
      this.maxLevel = parseInt(this.settings().fullmoon) + parseInt(this.settings().retrograde) + parseInt(this.settings().pms)
      console.log('is it dumb?')
      console.log(this.isFull)
      if (this.isFull) {
        console.log('yes')
        this.threatLevel += parseInt(this.settings().fullmoon)
      }
      this.threatStyle(this.threatLevel, this.maxLevel)
    },
    toggleConfig () {
      this.configuring = !this.configuring
    },
    settings () {
      // maybe this should be in computed?
      if (localStorage.getItem('settings') == null) {
        return this.defaultSettings
      } else {
        return JSON.parse(localStorage.getItem('settings'))
      }
    },
    threatStyle (threat, max) {
      let percent = threat / max
      let cssclass = 'fine'
      if (percent > 0) {
        cssclass = 'low'
      }
      if (percent > 0.3) {
        cssclass = 'medium'
      }
      if (percent > 0.6) {
        cssclass = 'high'
      }
      if (percent === 1) {
        cssclass = 'worst'
      }
      this.CSSStyle = cssclass
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style>
h1, h2 {
  font-weight: normal;
}

ul {
  list-style-type: none;
  padding: 0;
}

li {
  display: inline-block;
  margin: 0 10px;
}

a {
  color: #35495E;
}
</style>
