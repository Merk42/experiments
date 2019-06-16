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
      var year = d.getFullYear();
      /*
      let response = await axios.get('http://icalendar37.net/lunar/api/?lang=en&month=' + month + '&year=' + year + '&size=50')
      this.info = response.data
      this.phaseName = this.info.phase[date].phaseName
      if (this.phaseName === 'Full moon') {
        this.isFull = true
      } else {
        this.isFull = false
      }
      */

      let response = await axios.get('https://api.usno.navy.mil/rstt/oneday?date=' + month + '/' + date + '/' + year + '&loc=New%20York,%20NY')
      this.info = response.data
      if (typeof this.info.curphase !== 'undefined') {
        if (this.info.curphase === 'Full Moon') {
          this.isFull = true
        } else {
          this.isFull = false;
        }
      } else {
        if (this.info.closestphase.phase === 'Full Moon') {
          this.isFull = true;
        } else {
          this.isFull = false;
        }
      }
      this.$emit('fullEmit', this.isFull)
    }
  }
}
</script>