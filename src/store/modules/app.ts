import Cookies from 'js-cookie'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpened: Cookies.get('sidebarOpened')
      ? (!!+Cookies.get('sidebarOpened') as unknown as string)
      : false,
  }),
  getters: {
    getSidebarOpened: (state) => state.sidebarOpened,
  },
  actions: {
    /** 设置用户id */
    setUserId() {
      this.sidebarOpened = !this.sidebarOpened
      if (this.sidebarOpened) {
        Cookies.set('sidebarOpened', '1')
      } else {
        Cookies.set('sidebarOpened', '0')
      }
    },
  },
})

export default useAppStore
