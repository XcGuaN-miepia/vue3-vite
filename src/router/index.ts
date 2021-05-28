import * as VueRouter from 'vue-router'
import Home from '@/views/Home.vue'

const routes:VueRouter.RouteRecordRaw[] = [{
  path: '/',
  component: Home,
  children: []
}]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
