<template>
  <el-scrollbar wrap-class="scrollbar-wrapper" height="100%">
    {{ viewsRoute }}
    <el-menu
      :default-active="active as string"
      class="el-menu-vertical-demo"
      :collapse="!isCollapse"
      :collapse-transition="false"
    >
      <template v-for="item in viewsRoute?.children" :key="item.path">
        <SidebarItem :route="item" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store'
import useRoutesStore from '@/store/modules/routes'
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
const appStore = useAppStore()
const isCollapse = computed(() =>
  appStore.getDevice === 'mobile' ? true : appStore.getSidebarOpened,
)
const routesStore = useRoutesStore()
const viewsRoute = routesStore.getRoutes
console.log(viewsRoute, routesStore)
</script>

<style lang="scss">
.scrollbar-wrapper > div {
  height: 100%;
  .el-menu-vertical-demo:not(.el-menu--collapse) {
    width: 200px;
  }
  .el-menu-vertical-demo {
    height: 100%;
    border-right: 0 none;
    background-color: $drawerBg;
  }
}
</style>
