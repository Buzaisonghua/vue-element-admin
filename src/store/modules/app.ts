import { getStorage, setStorage } from '@/utils/storage'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    // 当前导航栏状态， true为收缩，false为展开
    sidebarOpened: !!+getStorage('SIDEBAR'),
    // 当前的页面状态
    device: 'desktop', // desktop | mobile
    withoutAnimation: true,
  }),
  getters: {
    getSidebarOpened: (state) => state.sidebarOpened,
    getDevice: (state) => state.device,
    getWithoutAnimation: (state) => state.withoutAnimation,
  },
  actions: {
    setSidebarOpened(close?: boolean) {
      if (close) {
        this.sidebarOpened = false
        setStorage('SIDEBAR', '0')
        return
      }
      this.setWithoutAnimation()
      this.sidebarOpened = !this.sidebarOpened
      setStorage('SIDEBAR', this.sidebarOpened ? '1' : '0')
    },
    setDevice(device: string) {
      this.device = device
    },
    setWithoutAnimation(boolean?: boolean) {
      this.withoutAnimation = !!boolean
    },
  },
})

export default useAppStore
