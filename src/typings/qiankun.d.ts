import { MicroAppStateActions } from "qiankun";

declare module 'vue' {
  interface ComponentCustomProperties {
    $qiankun: MicroAppStateActions
  }
}
