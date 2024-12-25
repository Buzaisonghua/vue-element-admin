import { getStorage, setStorage } from '@/utils/storage'
import { defineStore } from 'pinia'

export const useAppStore = defineStore('app', {
  state: () => ({
    sidebarOpened: !!+getStorage('SIDEBAR'),
    device: 'desktop', // desktop | mobile
    withMobileClickSidebar: false,
  }),
  getters: {
    getSidebarOpened: (state) => state.sidebarOpened,
    getDevice: (state) => state.device,
    getWithMobileClickSidebar: (state) => state.withMobileClickSidebar,
  },
  actions: {
    setSidebarOpened(close?: boolean) {
      if (close) {
        this.sidebarOpened = false
        setStorage('SIDEBAR', '0')
        return
      }
      this.sidebarOpened = !this.sidebarOpened
      setStorage('SIDEBAR', this.sidebarOpened ? '1' : '0')
      if (this.device === 'mobile' && !this.withMobileClickSidebar) {
        this.setWithMobileClickSidebar()
      }
    },
    setDevice(device: string) {
      this.device = device
    },
    setWithMobileClickSidebar() {
      this.withMobileClickSidebar = true
    },
  },
})

export default useAppStore
