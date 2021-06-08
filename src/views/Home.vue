<template>
  <el-container style="height: 100vh;">
    <el-aside width="220px">
      <app-menu />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main><router-view /></el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import AppHeader from '@/components/app-header/index.vue'
import AppMenu from '@/components/app-menu/index.vue'

export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/var.scss';
:deep(.el-header) {
  background: $skin_color;
  height: 65px;
  box-shadow: 0px 1px 4px 0px rgba(0, 21, 41, 0.12);
}
</style>
