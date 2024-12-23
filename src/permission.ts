import type { NavigationGuardNext, RouteLocationNormalized, RouteRecordRaw } from "vue-router";
import { getToken } from "@/utils/auth";
import router from "@/router";
import NProgress from "nprogress";
import "nprogress/nprogress.css";
import { useUserStore } from '@/store'
// 进度条
NProgress.configure({
  // 动画方式
  easing: "ease",
  // 递增进度条的速度
  speed: 500,
  // 是否显示加载ico
  showSpinner: false,
  // 自动递增间隔
  trickleSpeed: 200,
  // 初始化时的最小百分比
  minimum: 0.3,
});

// 白名单路由
const whiteList = ["/login"];

router.beforeEach(async (to, from, next) => {
    NProgress.start();
    const isLogin = !!getToken(); // 判断是否登录
    if (isLogin) {
        if (to.path === "/login") {
            // 已登录，访问登录页，跳转到首页
            next({ path: "/" });
        } else {
            const userStore = useUserStore()
            await userStore.getUserInfo()
            // 判断路由是否加载完成
            next()
      }
    } else {
      // 未登录，判断是否在白名单中
      if (whiteList.includes(to.path)) {
        next();
      } else {
        // 不在白名单，重定向到登录页
        redirectToLogin(to, next);
        NProgress.done();
      }
    }
  });

  // 后置守卫，保证每次路由跳转结束时关闭进度条
  router.afterEach(() => {
    NProgress.done();
  });

// 重定向到登录页
function redirectToLogin(to: RouteLocationNormalized, next: NavigationGuardNext) {
  const params = new URLSearchParams(to.query as Record<string, string>);
  const queryString = params.toString();
  const redirect = queryString ? `${to.path}?${queryString}` : to.path;
  next(`/login?redirect=${encodeURIComponent(redirect)}`);
}

/** 判断是否有权限 */
export function hasAuth(value: string | string[], type: "button" | "role" = "button") {
  const { roles, perms } = useUserStore().userInfo;

  // 超级管理员 拥有所有权限
  if (type === "button" && roles.includes("ROOT")) {
    return true;
  }

  const auths = type === "button" ? perms : roles;
  return typeof value === "string"
    ? auths.includes(value)
    : value.some((perm) => auths.includes(perm));
}
