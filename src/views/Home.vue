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
          v-model="activeTab"
          type="card"
          closable
          @tab-remove="removeTab"
        >
          <el-tab-pane
            v-for="item in tabs"
            :key="item.key"
            :label="item.title"
            :name="item.key"
          />
          <router-view v-slot="{ Component }">
            <keep-alive>
              <div id="container" />
            </keep-alive>
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
import { useRoute } from 'vue-router'

import { registerMicroApps, start } from 'qiankun'
export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu
  },
  setup() {
    const commonStore = useStore(CommomKey)
    const tabs = commonStore.state.tabList // 获取选项卡
    const activeTab = useRoute().path

    /**
     * @description: 删除选项卡
     * @param {string} tab
     */
    const removeTab = function(tab: string) {
      commonStore.commit('removeTabList', tab)
    }

    return {
      tabs,
      activeTab,
      removeTab
    }
  },
  mounted() {
    console.log('aaa', document.querySelector('#container'))
    registerMicroApps([
      {
        name: 'admin',
        entry: '//localhost:3001',
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
