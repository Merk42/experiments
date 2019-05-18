<template>
    <div>Is it a full moon?
      <span v-if="isFull">yes</span>
      <span v-if="!isFull">no</span>
    </div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'FullMoon',
  data () {
    return {
      isFull: Boolean
    }
  },
  async created () {
    await this.isMoonFullAsnyc()
  },
  methods: {
    isMoonFullAsnyc: async function () {
      var d = new Date()
      var date = d.getDate()
      var month = d.getMonth() + 1
      let response = await axios.get('http://icalendar37.net/lunar/api/?lang=en&month=' + month + '&year=2019&size=50')
      this.info = response.data
      this.phaseName = this.info.phase[date].phaseName
      if (this.phaseName === 'Full moon') {
        this.isFull = true
      } else {
        this.isFull = false
      }
      // this.$emit('fullmoon', true)
      this.$emit('fullEmit', this.isFull)
    }
  }
}
</script>