import { defineStore } from 'pinia'
import defaultSettings from '@/settings'
import { setTheme } from '@/utils/theme'

export const useSettingsStore = defineStore('settings', {
  state: () => ({
    themeColor: defaultSettings.themeColor,
    tagsView: defaultSettings.tagsView,
  }),
  getters: {
    getThemeColor: (state) => state.themeColor,
    getTagsView: (state) => state.tagsView,
  },
  actions: {
    setDark() {
      useToggle(useDark())()
      Promise.resolve().then(() => this.setThemeColor(this.themeColor))
    },
    setThemeColor(color: string) {
      this.themeColor = color
      setTheme(this.themeColor, useDark().value)
    },
    setTagsView(tagsView: boolean) {
      this.tagsView = tagsView
    },
  },
})

export default useSettingsStore
