import { routerInterface } from "types/router";

// 静态路由
export const constantRoutes: routerInterface.Routes[] = [
    {
      path: "/login",
      component: () => import("@/views/login/index.vue"),
      meta: { hidden: true },
    },
    {
      path: '/',
      needLogin: true,
      redirect: '/dashboard',
      children: [
        {
          path: 'dashboard',
          name: 'Dashboard',
          component: () => import("@/views/dashboard/index.vue")
        }
      ]
    }
  ];
  