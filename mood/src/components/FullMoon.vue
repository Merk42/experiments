<template>
    <div>Is it a full moon?
      
      <pre>{{currMonth}}</pre>
      <pre>{{currDate}}</pre>
      <pre>{{info}}</pre>
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
      info: null
    }
  },
  updated () {
    axios
      .get('http://icalendar37.net/lunar/api/?lang=en&month=' + currMonth + '&year=2019&size=50')
      .then(response => {
        this.info = response.data;
      })
  },
  computed: {
    now: function () {
      return Date.now()
    },
    currMonth: function (){
             var d = new Date();

      return d.getMonth()+1;
    },
    currDate: function (){
       var d = new Date();
      return d.getDate();
    }
  }
}
//http://icalendar37.net/lunar/api/?lang=en&month=2&year=2019&size=50
</script>
