/* eslint-disable no-undef */
import path from 'path'
import vue from '@vitejs/plugin-vue'

export default {
  base: './',
  plugins: [vue()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src')
    }
  },
  server: {
    // proxy: {
    //   '/test': {
    //     target: 'http://127.0.0.1:7001/'
    //   }
    // }
  }
}
