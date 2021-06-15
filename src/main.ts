import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from '@/utils/axios'
import qiankun from '@/utils/qiankun'
import ElementPlus from 'element-plus'
import 'normalreset.css/normalreset.css' // 重置样式
import '@/assets/css/flex.scss' // 布局样式
import '@/assets/css/index.scss' // 公共样式
import 'element-plus/lib/theme-chalk/index.css' // element样式

const app = createApp(App)

app.config.globalProperties.$http = axios // axios全局配置
app.config.globalProperties.$qiankun = qiankun // qiankun全局配置

store.forEach(({ module, key }) => {
  app.use(module, key)
})

app.use(router).use(ElementPlus).mount('#main-app')
