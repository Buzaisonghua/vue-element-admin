import request from "@/utils/request";
import {AUTH_BASE_URL} from './index'

/** 登录接口*/
export const login = (data: Auth.LoginData): Promise<{
  accessToken: string
}> => {
  return request({
    url: `${AUTH_BASE_URL}/login`,
    method: "post",
    data
  });
}

// 获取用户信息
export const getInfo = (token: string):Promise<Auth.UserInfo> => {
  return request({
    url: `${AUTH_BASE_URL}/getUserInfo`,
    method: "post",
    data: {token: token}
  });
}
