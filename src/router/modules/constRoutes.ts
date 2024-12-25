import { RouterInterface } from 'types/router'

export const Layout = () => import('@/layout/index.vue')

// 静态路由
export const constantRoutes: RouterInterface.RouteRecord[] = [
  {
    path: '/login',
    name: 'Login',
    component: () => import('@/views/login/index.vue'),
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
        component: () => import('@/views/dashboard/index.vue'),
        meta: {
          title: 'Dashboard',
          icon: 'smile-fill',
        },
      },
      {
        path: 'charts',
        name: 'Charts',
        component: () => import('@/views/charts/index.vue'),
        meta: {
          title: 'Charts',
          icon: 'chart-area',
        },
      },
      {
        path: 'authority',
        name: 'Authority',
        redirect: '/authority/test',
        component: () => import('@/views/authority/index.vue'),
        meta: {
          title: 'Authority',
          icon: 'gem',
        },
        children: [
          {
            path: 'test',
            name: 'Test',
            component: () => import('@/views/authority/test/index.vue'),
            meta: {
              title: 'Test',
              icon: 'user-fill',
            },
          },
          {
            path: 'admin',
            name: 'Admin',
            component: () => import('@/views/authority/admin/index.vue'),
            needAuth: true,
            meta: {
              title: 'Admin',
            },
          },
          {
            path: 'root',
            name: 'Root',
            component: () => import('@/views/authority/root/index.vue'),
            needAuth: true,
            meta: {
              title: 'Root',
            },
          },
        ],
      },
    ],
  },
]
