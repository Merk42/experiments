<template>
    <div>Is Mercury in Retrograde?
      <p>{{info}}</p>
    </div>
    
</template>

<script>
import axios from 'axios'

export default {
  name: 'RetrogradeMercury',
  props: {
    msg: String
  },
  data () {
    return {
      info: null
    }
  },
  mounted () {
    axios
      .get('https://mercuryretrogradeapi.com')
      .then(response => {
        this.info = response.data.is_retrograde;
      })
  }
}
</script>