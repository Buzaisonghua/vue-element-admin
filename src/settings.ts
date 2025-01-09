// 检查用户的操作系统是否使用深色模式
const mediaQueryList = window.matchMedia('(prefers-color-scheme: dark)')

const defaultSettings: Global.AppSettings = {
  title: 'VUE - BZSH',
  language: 'ZH',
  size: 'default',
  themeColor: '#409EFF',
  sidebarMoblieWidth: 542,
  tagsView: true,
}

export default defaultSettings
