import * as VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'

const routes:VueRouter.RouteRecordRaw[] = [{
  path: '/',
  component: Home,
  children: []
}, {
  path: '/404',
  component: NotFound
}, {
  path: '/:pathMatch(.*)*',
  redirect: '/404'
}]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHashHistory(),
  routes
})

export default router
