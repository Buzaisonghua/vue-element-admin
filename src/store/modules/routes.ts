import { defineStore } from 'pinia'
import { getUserRoutes } from '@/api/routes'
import { store } from '@/store'
import { constantRoutes } from '@/router/modules/constantRoutes'
import { asyncRoutes } from '@/router/modules/asyncRoutes'
import { RouterNamespace } from 'types/router'
import { router } from '@/router'
import { RouteRecordRaw } from 'vue-router'

const useRoutesStore = defineStore('routes', {
  state: (): {
    roles: Obj
    routes: RouterNamespace.RouteRecord[]
  } => ({
    // 有权限的导航，列表项为router的name
    roles: {},
    routes: [],
  }),
  getters: {
    getRoles: (state) => state.roles,
    getRoutes: (state) => state.routes,
  },
  actions: {
    async setRoles(userId: Auth.UserId) {
      await getUserRoutes({ userId }).then((res) => {
        const { routesList } = res
        if (routesList) {
          routesList.forEach((name) => (this.roles[name] = 'true'))
        }
      })
      this.setRoute()
    },
    // 动态配置路由
    setRoute() {
      let routes: RouterNamespace.RouteRecord[] = constantRoutes
        .filter((val) => val.constantInRoute)
        .concat(filterAsyncRoutes(asyncRoutes, this.getRoles))
        .filter((val) => {
          return filterAsyncRoutesEmpty(val)
        })
      addRouter(routes)
      console.log('1,', this)
      this.routes = routes
      console.log('?????', this.routes)
    },
  },
})

function filterAsyncRoutes(
  routes: RouterNamespace.RouteRecord[],
  roles: Obj,
): RouterNamespace.RouteRecord[] {
  const filterRoute: RouterNamespace.RouteRecord[] = routes
    .map((route) => {
      if (route.noCache) {
        return route
      } else if (route.children) {
        return {
          ...route,
          children: filterAsyncRoutes(route.children, roles),
        }
      }
      return !!roles[route.name || ''] ? route : ({} as RouterNamespace.RouteRecord)
    })
    .filter((val) => val.path)
  return filterRoute
}

function filterAsyncRoutesEmpty(route: RouterNamespace.RouteRecord): boolean {
  if (!route.children) {
    return true
  } else if (route.children && !route.children.length) {
    return false
  } else {
    return route.children?.filter((val) => filterAsyncRoutesEmpty(val)).length !== 0
  }
}

function addRouter(routes: RouterNamespace.RouteRecord[]) {
  routes.forEach((route: RouterNamespace.RouteRecord) => {
    if (!router.hasRoute(route.name || '')) router.addRoute(route as RouteRecordRaw)
    if (route.children) addRouter(route.children)
  })
}

export function useRoutesStoreHook() {
  return useRoutesStore(store)
}

export default useRoutesStore
