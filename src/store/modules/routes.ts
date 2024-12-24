import { defineStore } from "pinia";
import { getUserRoutes } from "@/api/routes";
import { asyncRoutes } from '@/router/modules/asyncRoutes'
import { routerInterface } from "types/router";
import router from '@/router'
import { RouteRecordRaw } from "vue-router";
// 服务端传回来的路由权限列表
const  authRoutes: {[key in string]: string} = {}

const useRoutesStore = defineStore('routes', {
    state: () => ({
        routes: [],
       
    }),
    getters: {
        getRoutes: state => state.routes
    },
    actions: {
        async setRoutes(userId: Auth.UserId) {
            await getUserRoutes({userId}).then(res => {
                const { routesList } = res
                routesList.forEach(val => authRoutes[val] = 'true')
                console.log(authRoutes['Test'])
                
                const routes = setRoutesFilter(asyncRoutes)
                console.log('11111111', routes)
                router.addRoute(routes as RouteRecordRaw)
            })
        }
    }
})

export default useRoutesStore