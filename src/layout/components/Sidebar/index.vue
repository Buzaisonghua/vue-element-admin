<template>
  <el-scrollbar wrap-class="scrollbar-wrapper">
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
import { useAppStore } from '@/store/modules/app'
import { computed } from 'vue'
import SidebarItem from './SidebarItem.vue'
const appStore = useAppStore()
const isCollapse = computed(() =>
  appStore.getDevice === 'mobile' ? true : appStore.getSidebarOpened
)
const route = useRoute()
const active = computed(() => route.name)
const router = useRouter()
const viewsRoute = router.getRoutes().find((val) => val.path === '/')
</script>

<style>
.el-menu-vertical-demo:not(.el-menu--collapse) {
  width: 200px;
  min-height: 400px;
}
</style>
