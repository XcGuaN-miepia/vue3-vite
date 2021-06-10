import * as VueRouter from 'vue-router'
// import store from '@/store/common'
import Home from '@/views/Home.vue'
import NotFound from '@/views/404.vue'

const routes:VueRouter.RouteRecordRaw[] = [{
  path: '/:pathMatch(.*)*',
  component: Home
}, {
  path: '/404',
  component: NotFound
}]

const router = VueRouter.createRouter({
  history: VueRouter.createWebHistory(),
  routes
})

// router.beforeEach((to, from, next) => {
//   // if(to.path === '/login' || to.path === '/main' || to.path === '/404') {
//   //   next()
//   // } else {
//   //   store.commit('addTabList', {
//   //     key: to.path,
//   //     title: to.name
//   //   })
//   //   next()
//   // }
//   next()
// })

export default router
