import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store } from 'vuex'

const state = {
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
  }]
}

export type CommonStateType = typeof state

export const key: InjectionKey<Store<CommonStateType>> = Symbol()

export default createStore<CommonStateType>({
  state,
  getters: {
    /**
     * @description: 获取
     * @param {*} state
     * @return {*}
     */
    getMenuList(state): any[] {
      return state.menuList
    }
  }
})
