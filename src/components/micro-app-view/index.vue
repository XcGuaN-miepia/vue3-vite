<template>
  <div ref="container" />
</template>

<script lang="ts">
import { defineComponent, onMounted, ref } from 'vue'
export default defineComponent({
  name: 'MicroAppView',
  setup() {
    const container= ref<HTMLDivElement>()

    onMounted(() => {

    })
  }
})
</script>

<style scoped>

</style>
