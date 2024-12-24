import { routerInterface } from "types/router"

export const Layout = () => import("@/layout/index.vue");

// 静态路由
export const constantRoutes: routerInterface.RouteRecord[] = [
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
      },
      {
        path: 'charts',
        name: 'Charts',
        component: () => import("@/views/charts/index.vue")
      },
      {
        path: 'authority',
        redirect: '/authority/test',
        component: () => import('@/views/authority/main.vue'),
        children: [
            {
                path: 'test',
                name: 'Test',
                component: () => import('@/views/authority/test/index.vue'),
            },
            {
                path: 'admin',
                name: 'Admin',
                component: () => import('@/views/authority/admin/index.vue'),
                needAuth: true
            },
            {
                path: 'root',
                name: 'Root',
                component: () => import('@/views/authority/root/index.vue'),
                needAuth: true
            }
        ]
    }
    ]
  }
];
