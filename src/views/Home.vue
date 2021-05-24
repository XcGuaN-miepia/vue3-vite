<template>
  <div
    class="flex-v flex-hc"
    style="height: 100vh;"
  >
    <div class="flex-h flex-hc">
      {{ count }}
      {{ a }}
      <button @click="a++">
        a++
      </button>
      <button @click="getData">
        axios
      </button>
    </div>
  </div>
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

  },
  methods: {
    getData() {
      this.$http({
        url: '/test'
      })
    }
  }
}
</script>

<style lang="scss" scoped>

</style>
