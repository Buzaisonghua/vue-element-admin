import { type RouteRecordRaw } from 'vue-router'
declare namespace RouterInterface {
  type RouteRecord = {
    name: string
    path: string
    meta?: RouteMeta
    childrenPathList?: string[]
    parentIcon?: string
    redirect?: string
    query?: any
    hidden?: boolean
    /** 是否需要登录 */
    needLogin?: boolean
    needAuth?: boolean
    children?: RouteRecord[]
  } & Omit<RouteRecordRaw, 'name' | 'children'>
  interface RouteMeta {
    hidden?: boolean
    // 高亮指定菜单
    activeMenu?: string
    // badge小标签(只支持子级)
    badge?: string
    // 是否隐藏面包屑
    breadcrumbHidden?: boolean
    // 是否显示小圆点
    dot?: boolean
    // 动态传参路由是否新开标签页
    dynamicNewTab?: boolean
    // 权限
    guard?: string[] | GuardType
    // 是否显示在菜单中显示隐藏路由(默认值：false)
    hidden?: boolean
    // 图标
    icon?: string
    // 是否是自定义svg图标(默认值：false)
    // 如果设置true，那么需要把你的svg拷贝到icon下，然后icon字段配置上你的图标名
    isCustomSvg?: boolean
    // 是否显示在菜单中显示隐藏一级路由(默认值：true)
    levelHidden?: boolean
    // 当前路由是否可关闭多标签页，同上
    noClosable?: boolean
    // 是否隐藏侧边栏
    noColumn?: boolean
    // 当前路由是否不缓存(默认值：false)
    noKeepAlive?: boolean
    // 当前路由是否不显示多标签页
    tabHidden?: boolean
    // 在新窗口中打开
    target?: '_blank' | false
    // 菜单、面包屑、多标签页显示的名称
    title?: string
    // 第二级没有子级
    isLevel2?: boolean
    // 是不是第一级
    isLevel1?: boolean
    // 菜单折叠之后的名称
    subTitle?: string
    // 是否使用页面pading
    noPadding?: boolean
    // 是否开启页面配置化账号关联
    isCache?: boolean
    // microApp子应用名称
    microAppName?: string
    // 外链
    href?: string
  }
}
