import { InjectionKey } from '@vue/runtime-core'
import { RouteRecordName } from 'vue-router'
import { createStore, Store } from 'vuex'

const state: {
  menuList: Menu[],
  tabList: Tab[]
} = {
  menuList: [{
    path: '/test1',
    name: '导航1',
    children: [{
      path: '/test1/tt1',
      name: '菜单1'
    }, {
      path: '/test1/tt2',
      name: '菜单2'
    }, {
      path: '/test1/tt3',
      name: '菜单2'
    }]
  }, {
    path: '/test2',
    name: '导航2'
  }, {
    path: '/test3',
    name: '导航3'
  }],
  tabList: []
}

export type CommonStateType = typeof state
export interface Tab {
  title: RouteRecordName | null | undefined,
  key: string
}

export interface Menu {
  path: string,
  name: string,
  children?: Menu[]
}

export const key: InjectionKey<Store<CommonStateType>> = Symbol()

export default createStore<CommonStateType>({
  state,
  getters: {
    /**
     * @description: 获取菜单列表
     * @param {*} state
     * @return {*}
     */
    getMenuList(state): Menu[] {
      return state.menuList
    },
    /**
     * @description: 获取选项卡列表
     * @param {*} state
     * @return {*}
     */
    getTabList(state): Tab[] {
      return state.tabList
    }
  },
  mutations: {
    /**
     * @description: 添加选项卡
     * @param {*} state
     * @param {Tab} payload
     */
    addTabList(state, payload: Tab) {
      if(state.tabList.every(item => item.key !== payload.key)) {
        state.tabList.push(payload)
      }
    },
    /**
     * @description: 删除选项卡
     * @param {*} state
     * @param {string} payload
     */
    removeTabList(state, payload: string) {
      console.log(state.tabList )

      state.tabList = state.tabList.filter(item => item.key !== payload)
      console.log(state.tabList )
    }
  }
})
