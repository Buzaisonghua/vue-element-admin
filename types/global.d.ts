declare namespace Global {
  type LanguageType = 'ZH' | 'EN'
  /**
   * 系统设置
   */
  interface AppSettings {
    /** 系统标题 */
    title: string
    /** 主题颜色 */
    themeColor: string
    /** 语言( zh-cn| en) */
    language: LanguageType
    /** 组件尺寸 */
    size: EpPropMergeType
    /** 宽度低于多少认定移动端 */
    sidebarMoblieWidth: number
    /** 是否显示 tagsView */
    tagsView: boolean
  }
}

declare type Obj = { [key in string]: any }

/**
 * 后台系统tag数据
 */
declare namespace TagsType {
  interface Tags {
    // 路由
    path: string
    // 路由的name
    name: string
    // 名称
    title: string
    /** 是否允许操作删除 */
    detail?: boolean
  }
}

type AlertType = 'success' | 'info' | 'warning' | 'error'
