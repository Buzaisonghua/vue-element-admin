import { type RouteRecordRaw } from "vue-router";
declare namespace routerInterface {
    type Routes  = {
        needLogin?: boolean,
        children?: StantRoutes[]
    } & RouteRecordRaw
}