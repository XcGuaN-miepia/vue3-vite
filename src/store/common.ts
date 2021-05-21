import { InjectionKey } from "@vue/runtime-core";
import { createStore, Store } from "vuex";

const state = {
  count: 0
}
export type CommonStateType = typeof state

export const key: InjectionKey<Store<CommonStateType>> = Symbol()

export default createStore<CommonStateType>({
  state,
  getters: {

  }
})