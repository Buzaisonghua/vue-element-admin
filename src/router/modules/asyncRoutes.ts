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
          title: 'charts',
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
      title: 'icons',
      icon: 'icon-demo',
    },
    children: [
      {
        path: 'my',
        name: 'MyIcons',
        component: () => import('@/views/iconsView/myIcons.vue'),
        meta: {
          title: 'myIcons',
          icon: 'my-icons',
        },
      },
      {
        path: 'element',
        name: 'ElementIcons',
        component: () => import('@/views/iconsView/elementIcons.vue'),
        meta: {
          title: 'elementIcons',
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
      title: 'authority',
      icon: 'gem',
    },
    children: [
      {
        path: 'test',
        name: 'Test',
        component: () => import('@/views/authority/test/index.vue'),
        role: true,
        meta: {
          title: 'test',
          icon: 'user-fill',
        },
      },
      {
        path: 'admin',
        name: 'Admin',
        component: () => import('@/views/authority/admin/index.vue'),
        role: true,
        meta: {
          title: 'admin',
        },
      },
      {
        path: 'root',
        name: 'Root',
        role: true,
        component: () => import('@/views/authority/root/index.vue'),
        meta: {
          title: 'root',
        },
      },
    ],
  },
  {
    path: '/menu',
    component: Layout,
    redirect: '/menu/menu1/menu1-1',
    name: 'Menu',
    meta: {
      title: 'menu',
      icon: 'layer group-fill',
    },
    children: [
      {
        path: 'menu1',
        component: () => import('@/views/menu/menu1/index.vue'),
        name: 'Menu1',
        meta: { title: 'menu1' },
        redirect: '/menu/menu1/menu1-1',
        children: [
          {
            path: 'menu1-1',
            component: () => import('@/views/menu/menu1/menu1-1/index.vue'),
            name: 'Menu1-1',
            meta: { title: 'menu1-1' },
          },
          {
            path: 'menu1-2',
            component: () => import('@/views/menu/menu1/menu1-2/index.vue'),
            name: 'Menu1-2',
            redirect: '/menu/menu1/menu1-2/menu1-2-1',
            meta: { title: 'menu1-2' },
            children: [
              {
                path: 'menu1-2-1',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-1/index.vue'),
                name: 'Menu1-2-1',
                meta: { title: 'menu1-2-1' },
              },
              {
                path: 'menu1-2-2',
                component: () => import('@/views/menu/menu1/menu1-2/menu1-2-2/index.vue'),
                name: 'Menu1-2-2',
                meta: { title: 'menu1-2-2' },
              },
            ],
          },
          {
            path: 'menu1-3',
            component: () => import('@/views/menu/menu1/menu1-3/index.vue'),
            name: 'Menu1-3',
            meta: { title: 'menu1-3' },
          },
        ],
      },
      {
        path: 'menu2',
        name: 'Menu2',
        component: () => import('@/views/menu/menu2/index.vue'),
        meta: { title: 'menu2' },
      },
    ],
  },
]
