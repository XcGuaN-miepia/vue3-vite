<template>
  <el-container style="height: 100vh;">
    <el-aside width="220px">
      <app-menu />
    </el-aside>
    <el-container>
      <div id="container" />

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
          >
            <!-- <div :id="`container${title2decode(String(item.title))}`" /> -->
            <router-view>
              <keep-alive>
                <div id="container" />
              </keep-alive>
            </router-view>
          </el-tab-pane>
        </el-tabs>
      </el-main>
      <el-footer>Footer</el-footer>
    </el-container>
  </el-container>
</template>

<script lang="ts">
import AppHeader from '@/components/app-header/index.vue'
import AppMenu from '@/components/app-menu/index.vue'

import store from '@/store'
import { toRaw } from 'vue'

import { key as CommomKey } from '@/store/common'
import { useStore } from 'vuex'

import { computed } from '@vue/runtime-core'
import { useRouter } from 'vue-router'
import { registerMicroApps, start } from 'qiankun'
export default {
  name: 'Home',
  components: {
    AppHeader,
    AppMenu
  },
  setup() {
    const commonStore = useStore(CommomKey)
    const router = useRouter()
    const tabs = computed(() => commonStore.state.tabList) // 获取选项卡
    const currentTab = computed(() => commonStore.state.currentTab) // 获取当前选项卡

    /**
     * @description: 删除选项卡
     * @param {string} tab
     */
    const removeTab = (tab: string) => {
      commonStore.commit('removeTabList', tab)
      router.push(currentTab.value)
    }

    /**
     * @description: 选择菜单
     * @param {any} tab
     */
    const clickTab = (tab: any) => {
      commonStore.commit('setCurrentTab', tab.props.name)
      router.push(tab.props.name)
    }

    /**
     * @description: 中文名修改成编码
     * @param {string} title
     * @return {string}
     */
    const title2decode = (title: string): string => {
      return decodeURIComponent(title)
    }

    return {
      tabs,
      currentTab,
      removeTab,
      clickTab,
      title2decode
    }
  },
  created() {
    window.addEventListener('beforeunload', () => {
      localStorage.setItem(String(CommomKey.description), JSON.stringify((toRaw(useStore(CommomKey).state))))

      // store.forEach(item => {
      //   alert(JSON.stringify((useStore(item.key).state)))

      //   sessionStorage.setItem(String(item.key.description), JSON.stringify((toRaw(useStore(CommomKey).state))))
      // })
    })
  },
  mounted() {
    registerMicroApps([
      {
        name: 'admin',
        entry: '//localhost:3001/vue3-vite-mirco',
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
