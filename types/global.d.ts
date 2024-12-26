declare namespace Global {
  /**
   * 系统设置
   */
  interface AppSettings {
    /** 系统标题 */
    title: string
    /** 主题颜色 */
    themeColor: string
    /** 语言( zh-cn| en) */
    language: string
  }
}

declare type Obj = { [key in string]: any }

/**
 * 后台系统tag数据
 */
declare namespace TagsType = {
  interface Tags {
    // 路由
    path: string
    // 路由的name
    name: string
    // 名称
    title: string
  }
}

