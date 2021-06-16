import { InjectionKey } from '@vue/runtime-core'
import { createStore, Store } from 'vuex'

const state: {
  test: any
} = {
  test: ''
}

export type TestStateType = typeof state

export const key: InjectionKey<Store<TestStateType>> = Symbol('test')

export default createStore<TestStateType>({
  state
})
