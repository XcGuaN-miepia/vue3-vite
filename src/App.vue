<template>
  <div >
    <input v-model="text" type="text" />
    <div v-html="text" style="width: 200px;"></div>
    <button @click="$fourceUpdate()">refresh</button>
    {{ count }}
  </div>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
export default {
  name: 'App',
  data() {
    return {
      text: ''
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
