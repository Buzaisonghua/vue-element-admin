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
      applyTheme(colors)
    },
  },
})

export default useSettingsStore
