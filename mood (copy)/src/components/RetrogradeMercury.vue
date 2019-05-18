<template>
    <div>Is Mercury in Retrograde?
      <span v-if="isRetrograde">yes</span>
      <span v-if="!isRetrograde">no</span>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'FullMoon',
  data () {
    return {
        isRetrograde: Boolean
    }
  },
  async created(){
    // this.isMoonFull();
     // this.isHardcoded();
    await this.isMercuryRetrograde();
 },
  methods: {    
    isMercuryRetrograde: async function() {

      let response = await axios.get('https://mercuryretrogradeapi.com')
      this.isRetrograde = response.data.is_retrograde;
      this.$emit('retrogradeEmit', this.isRetrograde)
    }
  }
}
</script>