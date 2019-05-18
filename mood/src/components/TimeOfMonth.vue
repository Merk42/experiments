<template>
    <div>Is it that time of the month?
      <span v-if="isPMS">yes?</span>
      <span v-if="!isPMS">no? (idk)</span>
    </div>
</template>

<script>
export default {
  name: 'TimeOfMonth',
  data () {
    return {
      isPMS: false
    }
  },
  async created () {
    await this.isPMS()
  },
  methods: {
    isPMS: async function () {
      // let response = await axios.get('https://mercuryretrogradeapi.com')
      this.isPMS = false
      this.$emit('pmsEmit', false)
    }
  }
}
</script>
