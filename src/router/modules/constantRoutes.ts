import { RouterNamespace } from 'types/router'

export const Layout = () => import('@/layout/index.vue')

/**
 * 静态路由
 * 定义在这里的路由是不会去验证权限的
 */
export const constantRoutes: RouterNamespace.RouteRecord[] = [
  {
    path: '/login',
    name: 'Login',
    hidden: true,
    component: () => import('@/views/login/index.vue'),
  },
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    redirect: '/dashboard',
    constantInRoute: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        noCache: true,
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'smile-fill',
        },
      },
    ],
  },
]
