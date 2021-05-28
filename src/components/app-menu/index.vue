<template>
  <el-menu
    default-active="1-4-1"
    class="menu-container"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"
  >
    <el-submenu index="1">
      <template #title>
        <i class="el-icon-location" />
        <span>导航一</span>
      </template>
      <el-menu-item-group>
        <template #title>
          分组一
        </template>
        <el-menu-item index="1-1">
          选项1
        </el-menu-item>
        <el-menu-item index="1-2">
          选项2
        </el-menu-item>
      </el-menu-item-group>
      <el-menu-item-group title="分组2">
        <el-menu-item index="1-3">
          选项3
        </el-menu-item>
      </el-menu-item-group>
      <el-submenu index="1-4">
        <template #title>
          选项4
        </template>
        <el-menu-item index="1-4-1">
          选项1
        </el-menu-item>
      </el-submenu>
    </el-submenu>
    <el-menu-item index="2">
      <i class="el-icon-menu" />
      <template #title>
        导航二
      </template>
    </el-menu-item>
    <el-menu-item
      index="3"
      disabled
    >
      <i class="el-icon-document" />
      <template #title>
        导航三
      </template>
    </el-menu-item>
    <el-menu-item index="4">
      <i class="el-icon-setting" />
      <template #title>
        导航四
      </template>
    </el-menu-item>
  </el-menu>
</template>

<script lang="ts">
export default {
  methods: {
    // TODO: 跳转处理
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/var.scss';

.menu-container {
  height: 100%;
  border-right: 0;
}
</style>
