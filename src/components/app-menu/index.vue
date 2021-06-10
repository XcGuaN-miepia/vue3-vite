<template>
  <el-menu
    class="menu-container"
    background-color="#001529"
    text-color="#fff"
    active-text-color="#409EFF"
    @select="href"
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
          <i :class="`el-icon-${submenu.icon}`" />
          {{ submenu.name }}
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
import { key as commonKey, Menu } from '@/store/common'
import { useRouter } from 'vue-router'

export default {
  setup() {
    const store = useStore(commonKey)
    const menuList = store.state.menuList
    const router = useRouter()

    /**
     * @description: 跳转
     * @param {string} path
     * @param {string[]} indexPath
     */
    const href = function(path: string, indexPath: string[]) {
      router.push(path)

      const getMenu = (list: Menu[], index: number = 0): Menu | undefined => {
        const menu = list.find(item => item.path === indexPath[index])

        if(indexPath.length === index + 1) {
          return menu
        } else if(menu?.children) {
          return getMenu(menu.children, index + 1)
        }
      }
      const menu = getMenu(menuList)

      console.log(menu)

      store.commit('addTabList', {
        key: menu?.path,
        title: menu?.name
      })
    }

    return {
      menuList,
      href
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
