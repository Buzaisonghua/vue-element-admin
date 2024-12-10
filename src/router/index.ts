import type { App } from "vue";
import { createRouter, createWebHistory, type RouteRecordRaw } from "vue-router";

export const Layout = () => import("@/layout/index.vue");

interface StantRoutes {
  needLogin?: boolean,
  children?: StantRoutesType[]
}

type StantRoutesType =  StantRoutes | RouteRecordRaw

// 静态路由
export const constantRoutes: StantRoutesType[] = [
  {
    path: "/login",
    component: () => import("@/views/login/index.vue"),
    meta: { hidden: true },
  },
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    needLogin: true,
    redirect: '/dashboard',
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import("@/views/dashboard/index.vue")
      }
    ]
  }
];

/**
 * 创建路由
 */
const router = createRouter({
  history: createWebHistory(),
  routes: constantRoutes,
  // 刷新时，滚动条位置还原
  scrollBehavior: () => ({ left: 0, top: 0 }),
});

// 全局注册 router
export function setupRouter(app: App<Element>) {
  app.use(router);
}

export default router;
