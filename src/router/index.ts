import * as VueRouter from 'vue-router'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'
import Main from '@/views/main/main.vue'

const routes:VueRouter.RouteRecordRaw[] = [{
  path: '/',
  component: Home,
  redirect: '/main',
  children: [{
    path: '/main',
    component: Main
  }]
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
