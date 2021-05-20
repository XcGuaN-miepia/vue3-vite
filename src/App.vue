<template>
  <div>
    {{ count }}
    {{ a }}
    <button @click="aPlus">
      a++
    </button>
  </div>
</template>

<script lang="ts">
import { ref } from 'vue'
export default {
  name: 'App',
  setup() {
    const aA = ref(1)
    const aPlus = function() {
      aA.value = aA.value + 1
    }

    return {
      aA,
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
