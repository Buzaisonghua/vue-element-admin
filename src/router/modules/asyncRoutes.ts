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
    path: '/charts',
    component: Layout,
    showChild: true,
    children: [
      {
        path: '',
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
    path: '/icons',
    name: 'Icons',
    redirect: '/icons/demo',
    component: Layout,
    meta: {
      title: 'Icons',
      icon: 'icon-demo',
    },
    children: [
      {
        path: 'my',
        name: 'MyIcons',
        component: () => import('@/views/iconsView/myIcons.vue'),
        meta: {
          title: 'MyIcons',
          icon: 'my-icons',
        },
      },
      {
        path: 'element',
        name: 'ElementIcons',
        component: () => import('@/views/iconsView/elementIcons.vue'),
        meta: {
          title: 'ElementIcons',
          icon: 'element-icons',
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
        role: true,
        meta: {
          title: 'Test',
          icon: 'user-fill',
        },
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/authority/admin/index.vue'),
        role: true,
        meta: {
          title: 'Admin',
        },
      },
      {
        path: 'root',
        name: 'Root',
        role: true,
        component: () => import('@/views/authority/root/index.vue'),
        meta: {
          title: 'Root',
        },
      },
    ],
  },
]
