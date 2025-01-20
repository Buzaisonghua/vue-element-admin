import NProgress from 'nprogress'
import routeWhiteList from './routeWhiteList'
import type { Router } from 'vue-router'
import getPageTitle from '@/utils/getPageTitle'
import { getToken } from '@/utils/auth'
import 'nprogress/nprogress.css'
import { useRoutesStoreHook, useUserStoreHook } from '@/store'
function getPermission(router: Router) {
  // 进度条
  NProgress.configure({
    // 动画方式
    easing: 'ease',
    // 递增进度条的速度
    speed: 500,
    // 是否显示加载ico
    showSpinner: false,
    // 自动递增间隔
    trickleSpeed: 200,
    // 初始化时的最小百分比
    minimum: 0.3
  })

  router.beforeEach(async (to, from, next) => {
    NProgress.start()
    document.title = getPageTitle(to.meta.title as string)
    // 判断是否登录
    const hasLogin = !!getToken()
    if (hasLogin) {
      if (to.path === '/login') {
        next({ path: '/' })
      } else {
        await getUserAndRoute()
        next()
      }
    } else {
      if (routeWhiteList.includes(to.path)) {
        next()
      } else {
        // other pages that do not have permission to access are redirected to the login page.
        next(`/login?redirect=${to.path}`)
      }
    }
  })

  // 后置守卫，保证每次路由跳转结束时关闭进度条
  router.afterEach(() => {
    NProgress.done()
  })
}

async function getUserAndRoute() {
  const userStoreHook = useUserStoreHook()
  // 还没有获取登录信息
  if (!userStoreHook.getNickName) {
    await userStoreHook.setUserInfo()
    const userId = userStoreHook.getUserId
    // 获取路由信息
    const routeStoreHook = useRoutesStoreHook()
    await routeStoreHook.setRoles(userId)
  }
}
// 重定向到登录页
// function redirectToLogin(to: RouteLocationNormalized, next: NavigationGuardNext) {
//   const params = new URLSearchParams(to.query as Record<string, string>)
//   const queryString = params.toString()
//   const redirect = queryString ? `${to.path}?${queryString}` : to.path
//   next(`/login?redirect=${encodeURIComponent(redirect)}`)
// }

export default getPermission
