<template>
    <div>Is this emittting?</div>
</template>
<script>
import axios from 'axios'

export default {
  name: 'DumbEmergency',
  data () {
    return {
        isFull: Boolean
    }
  },
  created(){
    // this.someData();
    this.isEmergencyHappening();
 },
  methods: {    
    isEmergencyHappening: function() {
        console.log('emitting from child')
        this.$emit('dumbEmit', false)
    },
    someData: function() {
      var d = new Date();
      var date = d.getDate();
      var month = d.getMonth()+1;
      axios
      .get('http://icalendar37.net/lunar/api/?lang=en&month=' + month + '&year=2019&size=50')
      .then(response => {
        this.info = response.data;
        this.phaseName = this.info.phase[date].phaseName;
        if (this.phaseName === "Full moon") {
          this.isFull = true;
        } else {
          this.isFull = false;
        }
        console.log('going to emit ', this.isFull)
        // this.$emit('fullmoon', true)
        this.$emit('dumbEmit', this.isFull)
      })
    }
  }
}
</script>