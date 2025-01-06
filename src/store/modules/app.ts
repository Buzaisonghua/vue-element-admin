import { getStorage, setStorage } from '@/utils/storage'
import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { store } from '@/store'
import zh from 'element-plus/es/locale/lang/zh-cn'
import en from 'element-plus/es/locale/lang/en'

export const useAppStore = defineStore('app', {
  state: () => ({
    // 当前导航栏状态， true为收缩，false为展开
    sidebarOpened: !!+getStorage('SIDEBAR'),
    // 当前的页面状态
    device: 'desktop', // desktop | mobile
    withoutAnimation: true,
    // 语言文字
    language: defaultSettings.language,
    size: defaultSettings.size,
  }),
  getters: {
    getSidebarOpened: (state) => state.sidebarOpened,
    getDevice: (state) => state.device,
    getWithoutAnimation: (state) => state.withoutAnimation,
    getLanguage: (state) => state.language,
    getLanguageEl: (state) => {
      switch (state.language) {
        case 'EN':
          return en
        default:
          return zh
      }
    },
    getSize: (state) => state.size,
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
    // 设置语言
    setLanguage(lang: Global.LanguageType) {
      this.language = lang
    },
    setSize(size) {
      this.size = size
    },
  },
})
export default useAppStore

/**
 * 用于在组件外部（如在Pinia Store 中）使用 Pinia 提供的 store 实例。
 * 官方文档解释了如何在组件外部使用 Pinia Store：
 * https://pinia.vuejs.org/core-concepts/outside-component-usage.html#using-a-store-outside-of-a-component
 */
export function useAppStoreHook() {
  return useAppStore(store)
}
