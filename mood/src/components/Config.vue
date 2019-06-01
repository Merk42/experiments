<template>
    <div style="background-color:#FFF" class="config">
        <p>On a scale of 1 to 10, how much do the following affect you?</p>
        <div>
            <label>Full Moon</label>
            <input type="range" min="1" max="10" step="1" v-model="fullMoonEffect"/>
            <span>{{fullMoonEffect}}</span>
        </div>
        <div>
            <label>Mercury in Retrograde</label>
            <input type="range" min="1" max="10" step="1" v-model="retrogradeEffect"/>
            <span>{{retrogradeEffect}}</span>
        </div>
        <div>
            <label>PMS</label>
            <input type="range" min="1" max="10" step="1" v-model="PMSEffect"/>
            <span>{{PMSEffect}}</span>
        </div>
        <button v-on:click="saveSettings()">save</button>
    </div>
</template>

<script>
export default {
  name: 'Config',
  data () {
    return {
      fullMoonEffect: Number,
      retrogradeEffect: Number,
      PMSEffect: Number
    }
  },
  created () {
    this.loadSettings()
  },
  methods: {
    loadSettings () {
      /* move if to app level since it'd load before settings, then settings would never be empty */
      if (localStorage.getItem('settings') == null) {
        // make default?
        console.log('should make default duh!')
        this.fullMoonEffect = 1
        this.retrogradeEffect = 1
        this.PMSEffect = 1
      } else {
        let settings = JSON.parse(localStorage.getItem('settings'))
        this.fullMoonEffect = settings.fullmoon
        this.retrogradeEffect = settings.retrograde
        this.PMSEffect = settings.pms
      }
    },
    saveSettings () {
      let settings = {
        'fullmoon': this.fullMoonEffect,
        'retrograde': this.retrogradeEffect,
        'pms': this.PMSEffect
      }
      localStorage.setItem('settings', JSON.stringify(settings))
      this.$emit('save')
    }
  }
}
</script>

<style scoped>
.config{
    height:100vh;
}
label{
    display:block;
}
</style>