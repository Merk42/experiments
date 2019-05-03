<template>
    <div>Is it a full moon?
      <p>{{isFull}}</p>
    </div>
</template>

<script>
import axios from 'axios'

export default {
  name: 'FullMoon',
  props: {
    msg: String
  },
  data () {
    return {
      info: null,
      phaseName: String,
      isFull: Boolean
    }
  },
  created(){
    this.someData();
 },
  methods: {    
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
        this.$emit('fullmoon', this.isFull)
      })
    }
  }
}
//http://icalendar37.net/lunar/api/?lang=en&month=2&year=2019&size=50
</script>
