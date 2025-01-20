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
    component: () => import('@/views/login/index.vue')
  },
  {
    path: '/',
    component: Layout,
    name: 'Layout',
    redirect: '/dashboard',
    showChild: true,
    children: [
      {
        path: 'dashboard',
        name: 'Dashboard',
        component: () => import('@/views/dashboard/index.vue'),
        affix: true,
        meta: {
          title: 'dashboard',
          icon: 'smile-fill'
        }
      }
    ]
  },
  {
    path: '/document',
    component: Layout,
    showChild: true,
    children: [
      {
        path: '',
        name: 'Document',
        component: () => import('@/views/documnet/index.vue'),
        meta: {
          title: 'document',
          icon: 'document'
        }
      }
    ]
  }
]
