import axios from 'axios'

const request = axios.create({
  timeout: 100000 // 默认10s超时
})

// 请求拦截器
request.interceptors.request.use(config => {
  return config
})

// 响应拦截器
request.interceptors.response.use(response => {
  const res = response.data

  return res
}, err => {
  console.error(err)
})

export default request
