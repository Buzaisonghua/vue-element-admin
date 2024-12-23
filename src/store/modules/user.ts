import {getInfo} from "@/api/auth";
import { defineStore } from "pinia";
import { getToken } from "@/utils/auth";

console.log('每次都要初始化吗')


export const useUserStore = defineStore('user', {
  state: (): Auth.UserInfo => ({
    userId: "",
    username: "",
    nickname: "",
    avatar: "",
  }),
  getters: {
    getToken: () => getToken,
    getUsername: state => state.username,
    getNickName: state => state.nickname,
    getAvatar: state => state.avatar,
    getUserId: state => state.userId
  },
  actions: {
    /** 设置用户id */
    setUserId(userId: Auth.UserId) {
      this.userId = userId
    },
    /** 设置用户名 */
    setUsername(username: string) {
      this.username = username
    },
    setNickname(nickname: string) {
      this.nickname = nickname
    },
    setAvatar(avatar: string) {
      this.avatar = avatar
    },

    /** 获取用户信息接口 */
    async getUserInfo(refresh: boolean = false) {
      if (!this.userId || refresh) {
        const token = getToken()
        const {userId, username, nickname, avatar} = await getInfo(token as string)
        this.setUserId(userId)
        this.setNickname(nickname)
        this.setUsername(username)
        this.setAvatar(avatar)
      }
    }
  },
})

export default useUserStore
