<template>
  <el-container style="height: 100vh;">
    <el-aside width="220px">
      <app-menu />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>Main</el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import { ref } from '@vue/reactivity'
import { useStore } from 'vuex'
import { key as commonKey } from '@/store/common'

import AppHeader from '@/components/app-header/index.vue'
import AppMenu from '@/components/app-menu/index.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu
  },
  setup() {
    const a = ref(1)
    const count = useStore(commonKey).state.count

    return {
      a,
      count
    }
  },
  mounted() {
    this.test({ a: 2 })
  },
  methods: {
    test(data: {a: 2, b?: 3, c?: 5} = { a: 2, b: 3, c: 5 }) {
      console.log(data.a, data.b, data.c)
    },
    getData() {
      this.$http({
        url: '/test'
      })
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/var.scss';
:deep(.el-header) {
  background: $skin_color;
}
</style>
