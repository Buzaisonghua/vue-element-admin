// 检查用户的操作系统是否使用深色模式
const mediaQueryList = window.matchMedia("(prefers-color-scheme: dark)");

const defaultSettings: global.AppSettings = {
    title: 'Vue Vite',
    language: 'ZH_CN',
    themeColor: 'red'
};

export default defaultSettings;
