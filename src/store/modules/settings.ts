import { defineStore } from 'pinia'
import defaultSettings from '@/settins'
import { getStorage } from '@/utils/storage'
import { generateThemeColors, applyTheme } from '@/utils/theme'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    themeColor: defaultSettings.themeColor,
  }),
  getters: {
    getThemeColor: (state) => state.themeColor,
  },
  actions: {
    setThemeColor(color: string) {
      const colors = generateThemeColors(color)
      console.log('1111', colors)
      applyTheme(colors)
    },
  },
})

export default useSettingsStore
