import type { App } from 'vue'
import { constantRoutes } from './modules/constantRoutes'
import { asyncRoutes } from './modules/asyncRoutes'
import { createRouter, createWebHashHistory, RouteRecordRaw } from 'vue-router'
import getPermission from '@/router/guard/permission'
import { RouterNamespace } from 'types/router'
/**
 * 创建路由
 */
export const router = createRouter({
  history: createWebHashHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

addRouter(asyncRoutes)
function addRouter(routes: RouterNamespace.RouteRecord[]) {
  routes.forEach((route: RouterNamespace.RouteRecord) => {
    if (!router.hasRoute(route.name || '')) router.addRoute(route as RouteRecordRaw)
    if (route.children) addRouter(route.children)
  })
}

// 全局注册 router
export async function setupRouter(app: App<Element>) {
  app.use(router)
  getPermission(router)
  await router.isReady()
}

export default setupRouter
