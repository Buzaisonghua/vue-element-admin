import { type RouteRecordRaw } from 'vue-router'
declare namespace RouterNamespace {
  type RouteRecord = {
    path: string
    name?: string
    meta?: RouteMeta
    query?: any
    /** 判断导航是否在导航栏显示，默认是fasle,true为不显示 */
    hidden?: boolean
    /** 判断路由是否需要权限，默认是false,true为需要验证权限 */
    role?: boolean
    /** 当路由的子路由仅剩一个时，默认会取消这个子路由显示，合并到父级路由上 */
    showChild?: boolean
    /** 设置为true时会默认在tagsView上显示 */
    affix?: boolean
    children?: RouteRecord[]
  } & Omit<RouteRecordRaw, 'name' | 'children'>
  interface RouteMeta {
    // 是否隐藏面包屑
    breadcrumbHidden?: boolean
    // 是否显示在菜单中显示隐藏路由(默认值：false)
    hidden?: boolean
    // 图标
    icon?: string
    // 菜单、面包屑、多标签页显示的名称
    title?: string
    // 当前路由是否不缓存(默认值：false)
    noKeepAlive?: boolean
    // 在新窗口中打开
    target?: '_blank' | false
  }
}
