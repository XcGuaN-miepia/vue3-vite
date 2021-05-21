import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import axios from '@/utils/axios'
import 'normalreset.css/normalreset.css' // 重置样式

const app = createApp(App)

app.config.globalProperties.$http = axios // axios全局配置

store.forEach(({ module, key }) => {
  app.use(module, key)
})

app.use(router)
app.mount('#app')
