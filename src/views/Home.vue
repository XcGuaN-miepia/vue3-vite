<template>
  <el-container style="height: 100vh;">
    <el-aside width="220px">
      <app-menu />
    </el-aside>
    <el-container>
      <el-header>
        <app-header />
      </el-header>
      <el-main>
        <el-tabs
          :model-value="currentTab"
          type="card"
          closable
          @tab-remove="removeTab"
          @tab-click="clickTab"
        >
          <el-tab-pane
            v-for="item in tabs"
            :key="item.key"
            :label="item.title"
            :name="item.key"
          />
          <router-view>
            <div id="container" />
          </router-view>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import AppHeader from '@/components/app-header/index.vue'
import AppMenu from '@/components/app-menu/index.vue'

import { key as CommomKey } from '@/store/common'
import { useStore } from 'vuex'

import { registerMicroApps, start } from 'qiankun'
import { computed } from '@vue/runtime-core'
export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu
  },
  setup() {
    const commonStore = useStore(CommomKey)
    /**
     * @description: 删除选项卡
     * @param {string} tab
     */
    const removeTab = (tab: string) => {
      commonStore.commit('removeTabList', tab)
    }

    const clickTab = (tab: any) => {
      commonStore.commit('setCurrentTab', tab.props.name)
    }

    return {
      tabs: computed(() => commonStore.state.tabList), // 获取选项卡
      currentTab: computed(() => commonStore.state.currentTab), // 获取当前选项卡
      removeTab,
      clickTab
    }
  },
  mounted() {
    registerMicroApps([
      {
        name: 'admin',
        entry: 'http://139.198.186.30/vue3-vite-mirco/',
        container: '#container',
        activeRule: '/'
      }
    ])
    // 启动 qiankun
    start()
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
