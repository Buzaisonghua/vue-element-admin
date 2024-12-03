import request from "@/utils/request";

const AUTH_BASE_URL = "/api";

const AuthAPI = {
  /** 登录接口*/
  login(data: Auth.LoginData) {
    console.log(data)
    return request({
      url: `${AUTH_BASE_URL}/login`,
      method: "post",
      data
    });
  },

  // 获取用户信息
  getInfo(token: string) {
    return request({
      url: `${AUTH_BASE_URL}/getUserInfo`,
      method: "post",
      data: {token: token}
    });
  }
};

export default AuthAPI;
