import { createApp } from 'vue'
import App from './App.vue'
import store from './store'
import './assets/css/index.scss'

// 全局样式
// import '@/assets/css/index.scss'

const app = createApp(App)

app.use(store) // store
app.mount('#app')
