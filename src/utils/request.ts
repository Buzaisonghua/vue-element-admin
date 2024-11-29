import axios, { type InternalAxiosRequestConfig, type AxiosResponse } from "axios";
import { getToken } from "./auth";

// 创建 axios 实例
const service = axios.create({
  baseURL: '//',
  timeout: 50000,
});

// 请求拦截器
service.interceptors.request.use(
  (config: InternalAxiosRequestConfig) => {
    const accessToken = getToken();
    // do something before request is sent

    // if (store.getters.token) {
    //     // let each request carry token
    //     // ['X-Token'] is a custom headers key
    //     // please modify it according to the actual situation
    //     config.headers['X-Token'] = getToken()
    // }
    return config;
  },
  (error) => Promise.reject(error)
) 
  // response interceptor
//   service.interceptors.response.use(
//     /**
//      * If you want to get http information such as headers or status
//      * Please return  response => response
//     */
  
//     /**
//      * Determine the request status by custom code
//      * Here is just an example
//      * You can also judge the status by HTTP Status Code
//      */
//     response => {
//       const res = response.data
  
//       // if the custom code is not 20000, it is judged as an error.
//       if (res.code !== 20000) {
//         Message({
//           message: res.message || 'Error',
//           type: 'error',
//           duration: 5 * 1000
//         })
  
//         // 50008: Illegal token; 50012: Other clients logged in; 50014: Token expired;
//         if (res.code === 50008 || res.code === 50012 || res.code === 50014) {
//           // to re-login
//           MessageBox.confirm('You have been logged out, you can cancel to stay on this page, or log in again', 'Confirm logout', {
//             confirmButtonText: 'Re-Login',
//             cancelButtonText: 'Cancel',
//             type: 'warning'
//           }).then(() => {
//             store.dispatch('user/resetToken').then(() => {
//               location.reload()
//             })
//           })
//         }
//         return Promise.reject(new Error(res.message || 'Error'))
//       } else {
//         return res
//       }
//     },
//     error => {
//       console.log('err' + error) // for debug
//       Message({
//         message: error.message,
//         type: 'error',
//         duration: 5 * 1000
//       })
//       return Promise.reject(error)
//     }
// 
// 响应拦截器
service.interceptors.response.use(
  (response: AxiosResponse) => {
    // 如果响应是二进制流，则直接返回，用于下载文件、Excel 导出等
    if (response.config.responseType === "blob") {
      return response;
    }

    // const { code, data, msg } = response.data;
    // if (code === ResultEnum.SUCCESS) {
    //   return data;
    // }

    // ElMessage.error(msg || "系统出错");
    return Promise.reject(new Error("Error"));
  },
  async (error: any) => {
    // 非 2xx 状态码处理 401、403、500 等
    // const { config, response } = error;
    // if (response) {
    //   const { code, msg } = response.data;
    //   if (code === ResultEnum.ACCESS_TOKEN_INVALID) {
    //     // Token 过期，刷新 Token
    //     return handleTokenRefresh(config);
    //   } else if (code === ResultEnum.REFRESH_TOKEN_INVALID) {
    //     return Promise.reject(new Error(msg || "Error"));
    //   } else {
    //     ElMessage.error(msg || "系统出错");
    //   }
    // }
    return Promise.reject(error.message);
  }
);

export default service;