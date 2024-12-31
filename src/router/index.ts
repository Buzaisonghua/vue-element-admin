import type { App } from 'vue'
import { constantRoutes } from './modules/constantRoutes'
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router'
import getPermission from '@/router/guard/permission'
/**
 * 创建路由
 */
export const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes as RouteRecordRaw[],
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
})

// 全局注册 router
export async function setupRouter(app: App<Element>) {
  app.use(router)
  getPermission(router)
  await router.isReady()
}

export default setupRouter
