import { defineStore } from 'pinia'
import { getUserRoutes } from '@/api/routes'
import { store } from '@/store'
import { constantRoutes } from '@/router/modules/constantRoutes'
import { asyncRoutes } from '@/router/modules/asyncRoutes'
import { RouterNamespace } from 'types/router'
import { router } from '@/router'
import { RouteRecordRaw, useRoute } from 'vue-router'

const useRoutesStore = defineStore('routes', {
  state: (): {
    roles: Obj
    routes: RouterNamespace.RouteRecord[]
  } => ({
    // 有权限的导航，列表项为router的name
    roles: { a: 1 },
    routes: [],
  }),
  getters: {
    getRoles: (state) => state.roles,
    getRoutes: (state) => state.routes,
  },
  actions: {
    async setRoles(userId: Auth.UserId) {
      this.setRoute()
      await getUserRoutes({ userId }).then((res) => {
        const { routesList } = res
        if (routesList) {
          routesList.forEach((name) => (this.roles[name] = 'true'))
        }
      })
    },
    // 动态配置路由
    setRoute() {
      this.routes = [...constantRoutes, ...asyncRoutes]
    },
  },
})

export function useRoutesStoreHook() {
  return useRoutesStore(store)
}

export default useRoutesStore
