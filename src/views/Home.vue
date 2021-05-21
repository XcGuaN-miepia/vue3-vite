<template>
  {{ count }}
  <div />
  <button />
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { key as commonKey } from '@/store/common'
export default {
  name: 'Home',
  setup() {
    const a = ref(1)
    const count = useStore(commonKey).state.count

    return {
      a,
      count
    }
  },
  mounted() {
    this.$store.commit('increment')
  }
}
</script>

<style lang="scss" scoped>

</style>
