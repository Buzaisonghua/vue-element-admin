import { routerInterface } from "types/router";

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: routerInterface.Routes[] = [
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
