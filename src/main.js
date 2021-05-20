import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import router from './router'
import 'normalreset.css/normalreset.css' // 重置样式

const app = createApp(App)

app.use(store)
app.use(router)
app.mount('#app')
