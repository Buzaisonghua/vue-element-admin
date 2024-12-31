import { RouterNamespace } from 'types/router'

export const Layout = () => import('@/layout/index.vue')

/**
 * 动态路由
 * 动态路由会通过用户权限判断显示路由
 * noCache：不进行权限验证，始终显示
 *  父路由设置了noCache，就不会继续验证权限了！！！！！！！
 * 当路由权限判断后，路由只有一个会自动将其合并为以及菜单
 */
export const asyncRoutes: RouterNamespace.RouteRecord[] = [
  {
    path: '/document',
    component: Layout,
    noCache: true,
    hasChildSidebar: true,
    children: [
      {
        path: '/',
        name: 'Document',
        component: () => import('@/views/documnet/index.vue'),
        meta: {
          title: 'Document',
          icon: 'chart-area',
        },
      },
    ],
  },
  {
    path: '/charts',
    component: Layout,
    children: [
      {
        path: '/',
        name: 'Charts',
        component: () => import('@/views/charts/index.vue'),
        meta: {
          title: 'Charts',
          icon: 'chart-area',
        },
      },
    ],
  },
  {
    path: '/authority',
    name: 'Authority',
    redirect: '/authority/test',
    component: Layout,
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
        meta: {
          title: 'Admin',
        },
      },
      {
        path: 'root',
        name: 'Root',
        component: () => import('@/views/authority/root/index.vue'),
        meta: {
          title: 'Root',
        },
      },
    ],
  },
]
