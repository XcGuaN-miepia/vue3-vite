<template>
  {{ count }}
  {{ a }}
  <button @click="a++">
    a++
  </button>
</template>

<script>
import { ref } from '@vue/reactivity'
export default {
  name: 'Home',
  setup() {
    const a = ref(1)
    const aPlus = function() {
      a.value = a.value + 1
    }

    return {
      a,
      aPlus
    }
  },
  computed: {
    count: function() {
      return this.$store.getters.getCount
    }
  },
  mounted() {
    this.$store.commit('increment')
  }
}
</script>

<style lang="scss" scoped>

</style>
