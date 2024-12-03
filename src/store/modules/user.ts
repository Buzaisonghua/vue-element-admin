import AuthAPI from "@/api/auth";
import { defineStore } from "pinia";
import { getToken } from "@/utils/auth";

export const useUserStore = defineStore("user", () => {
  let userInfo: any  = undefined
  const token = getToken()
  /**
   * 获取用户信息
   *
   * @returns {UserInfo} 用户信息
   */
  async function getUserInfo() {
    let hasUserInfo = !!userInfo
    if (!hasUserInfo) {
      const data = await AuthAPI.getInfo(token)
      userInfo = data
    }
    return userInfo
  }

  return {
    getUserInfo
  };
});