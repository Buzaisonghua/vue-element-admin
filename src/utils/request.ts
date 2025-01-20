import axios, {
  type AxiosResponse,
  type InternalAxiosRequestConfig
} from 'axios'
import { ElMessage } from 'element-plus'
import { getToken, removeToken } from './auth'
import 'element-plus/dist/index.css' // 引入 Element Plus 样式

// 创建 axios 实例
const service = axios.create({
  baseURL: import.meta.env.VITE_API,
  timeout: 2000
})

const ResultEnum = {
  /**成功*/
  SUCCESS: '20000',
  /**错误*/
  ERROR: '50000',
  /** 账号或密码错误 */
  ACCOUNTWARN: '50001',
  /**访问令牌无效或过期*/
  TOKEN_INVALID: 'A0230',
  /**刷新令牌无效或过期 */
  REFRESH_TOKEN_INVALID: 'A0231'
}

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getToken()
    // 如果 Authorization 设置为 no-auth，则不携带 Token，用于登录、刷新 Token 等接口
    if (config.headers.Authorization !== 'no-auth' && accessToken) {
      config.headers.Authorization = accessToken
    } else {
      delete config.headers.Authorization
    }
    return config
  },
  (error) => Promise.reject(error)
)
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    const res = response.data
    // if the custom code is not 20000, it is judged as an error.
    if (res.code !== ResultEnum.SUCCESS) {
      // 登录过期
      if (res.code === ResultEnum.TOKEN_INVALID) {
        ElMessageBox.alert('登录过期，重新登录', '提示', {
          type: 'warning',
          showCancelButton: false,
          confirmButtonText: '重新登录'
        }).then(() => {
          removeToken()
          location.reload()
        })
      } else {
        ElMessage({
          message: res.msg || 'Error',
          type: 'warning'
        })
      }
      return Promise.reject(new Error(res.message || 'Error'))
    } else {
      return res.data
    }
  },
  async (error: any) => {
    return Promise.reject(error.message)
  }
)

export default service
