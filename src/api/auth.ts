import request from "@/utils/request";

const AUTH_BASE_URL = "/api/v1/auth";

const AuthAPI = {
  /** 登录接口*/
  login(data: Auth.LoginData) {
    console.log(1)
    return request({
      url: `${AUTH_BASE_URL}/login`,
      method: "post",
      data: data,
      headers: {
        "Content-Type": "multipart/form-data",
      },
    });
  }
};

export default AuthAPI;
