import axios from 'axios'
import { getToken } from '@/utils/setToken.js'
import { Promise } from 'core-js'
import { Message } from 'element-ui'
const service =axios.create({
    baseURL: "/api",
    timeout:3000
})

service.interceptors.request.use((config) => {
    // 在发送请求前做些什么
    // 获取并设置token
    // console.log(getToken('token'))
    config.headers['token'] = getToken('token')
    return config
},(error) => {
    // 对请求错误做些什么
    return Promise.reject(error)
})

// 添加响应拦截器
service.interceptors.response.use((response) => {
    // 对响应数据做些什么
    // console.log(response)
    let { status, message } = response.data
    if (status !== 200) {
        Message({message: message || 'error', type: 'warning'})
    }
    return response
}, (error) => {
    // 对响应错误做点什么
    return Promise.reject(error)
})

export default service