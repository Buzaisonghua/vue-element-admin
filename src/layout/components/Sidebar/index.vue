<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
    <el-menu
      default-active="viewsRoute.name"
      class="el-menu-vertical-demo"
      :collapse="isCollapse"
      :collapse-transition="false"
    >
      <template v-for="item in viewsRoute?.children" :key="item.path">
        <SidebarItem :route="item" />
      </template>
    </el-menu>
  </el-scrollbar>
</template>

<script lang="ts" setup>
import { useAppStore } from '@/store/modules/app'
import { computed } from 'vue'
import { useRouter } from 'vue-router'
import SidebarItem from './SidebarItem.vue'
const appStore = useAppStore()
const isCollapse = computed(() =>
  appStore.getDevice === 'mobile' ? false : appStore.getSidebarOpened
)
const route = useRouter()
const viewsRoute = route.getRoutes().find((val) => val.path === '/')
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
