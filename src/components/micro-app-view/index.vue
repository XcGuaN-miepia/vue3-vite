<template>
  <div ref="container" />
</template>

<script lang="ts">
import { loadMicroApp, MicroApp } from 'qiankun'
import { defineComponent, onMounted, onUnmounted, PropType, ref, unref } from 'vue'

export interface MicroAppConfig {
  name: string;
  entry: string;
  activeRule: string;
}

export default defineComponent({
  name: 'MicroAppView',
  props: {
    config: {
      type: Object as PropType<MicroAppConfig>,
      required: true
    }
  },
  setup(prop) {
    const container = ref<HTMLDivElement>()
    const app = ref<MicroApp | null>(null)

    onMounted(() => {
      app.value = loadMicroApp(
        {
          ...prop.config,
          container: unref(container)!
        },
        {
          sandbox: {
            experimentalStyleIsolation: true
          }
        }
      )
    })

    onUnmounted(async() => {
      await unref(app)?.unmount()
      app.value = null
    })

    return {
      container
    }
  }
})
</script>

<style scoped>

</style>
