import { routerInterface } from 'types/router'
import { getUserRoutes } from '@/api/routes'
import router from '@/router'
import { RouteRecordRaw } from 'vue-router'

// 静态路由
export const asyncRoutes: routerInterface.RouteRecord[] = [
  {
    path: '/authority',
    redirect: '/authority/test',
    component: () => import('@/views/authority/index.vue'),
    children: [
      {
        path: '/test',
        name: 'Test',
        component: () => import('@/views/authority/test/index.vue'),
      },
      {
        path: '/admin',
        name: 'Admin',
        component: () => import('@/views/authority/admin/index.vue'),
        needAuth: true,
      },
      {
        path: '/root',
        name: 'Root',
        component: () => import('@/views/authority/root/index.vue'),
        needAuth: true,
      },
    ],
  },
]
// 服务端传回来的路由权限列表
const authRoutes: { [key in string]: string } = {}
function setRoutesFilter(routes: routerInterface.RouteRecord[]) {
  return routes.map((val) => {
    if (!!authRoutes[val.name as string] && !!val.children) {
      return {} as routerInterface.RouteRecord
    } else {
      // return !!val.children ? {...val, children: setRoutesFilter(val.children)} : (!!authRoutes[val.name as string] ? val : ({} as routerInterface.RouteRecord))
      if (val.children) {
        router.addRoute(val as RouteRecordRaw)
        setRoutesFilter(val.children)
      } else if (!!authRoutes[val.name as string]) {
        router.addRoute(val as RouteRecordRaw)
      }
    }
  })
}

export async function setRoutes(userId: Auth.UserId) {
  await getUserRoutes({ userId }).then((res) => {
    const { routesList } = res
    routesList.forEach((val) => (authRoutes[val] = 'true'))

    // const routesPath = setRoutesFilter(asyncRoutes)
    //     ...asyncRoutes,
    //     children: setRoutesFilter(asyncRoutes.children || [])
    // }
  })
}
