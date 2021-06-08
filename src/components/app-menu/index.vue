<template>
  <el-menu
    class="menu-container"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"
    @select="index => $router.push(index)"
  >
    <div class="header">
      <img
        src="~@/assets/logo.png"
        class="logo"
      >
      <span class="title">管理平台</span>
    </div>
    <template
      v-for="menu in menuList"
      :key="menu.path"
    >
      <!-- 下拉菜单 -->
      <el-submenu
        v-if="menu.children"
        :index="menu.path"
      >
        <template #title>
          <i :class="`el-icon-${menu.icon}`" />
          {{ menu.name }}
        </template>
        <el-menu-item
          v-for="submenu in menu.children"
          :key="submenu.path"
          :index="submenu.path"
        >
          <i :class="`el-icon-${menu.icon}`" />
          {{ menu.name }}
        </el-menu-item>
      </el-submenu>
      <!-- 单菜单 -->
      <el-menu-item
        v-else
        :index="menu.path"
      >
        <i :class="`el-icon-${menu.icon}`" />
        {{ menu.name }}
      </el-menu-item>
    </template>
  </el-menu>
</template>

<script lang="ts">
import { useStore } from 'vuex'
import { key as commonKey } from '@/store/common'

export default {
  setup() {
    const menuList = useStore(commonKey).state.menuList

    return {
      menuList
    }
  }
}
</script>

<style lang="scss" scoped>
@import '@/assets/css/var.scss';

.menu-container {
  height: 100%;
  border-right: 0;

  .header {
    padding: 15px;
    color: #fff;

    .logo {
      width: 34px;
      height: 34px;
    }

    .title {
      margin-left: 10px;
    }
  }

}
</style>
