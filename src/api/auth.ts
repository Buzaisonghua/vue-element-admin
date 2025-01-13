import request from "@/utils/request";

/** 登录接口*/
export const login = (data: Auth.LoginData): Promise<{
  accessToken: string
}> => {
  return request({
    url: `/login`,
    method: "post",
    data
  });
}

// 获取用户信息
export const getInfo = (token: string):Promise<Auth.UserInfo> => {
  return request({
    url: `/getUserInfo`,
    method: "get",
    params: {token: token}
  });
}
