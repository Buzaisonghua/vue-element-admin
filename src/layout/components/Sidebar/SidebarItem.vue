<template>
  <template v-if="!hidden">
    <template v-if="routeHasChildren() && !showChild">
      <el-sub-menu :index="name as string">
        <template #title>
          <Item :icon="meta?.icon" :title="meta?.title" />
        </template>
        <sidebar-item
          v-for="child in props.route?.children"
          :key="child.path"
          :route="child"
        />
      </el-sub-menu>
    </template>
    <template v-else-if="showChild">
      <sidebar-item
        v-for="child in props.route?.children"
        :key="child.path"
        :route="child"
      />
    </template>
    <template v-else>
      <el-menu-item :index="name" @click="clickMenuItem">
        <Item :icon="meta?.icon" :title="meta?.title" />
      </el-menu-item>
    </template>
  </template>
</template>
<script lang="ts" setup>
import Item from './Item.vue'
import type { RouterNamespace } from 'types/router'
import { useRoutesStoreHook } from '@/store/modules/routes'
const routesStoreHook = useRoutesStoreHook()
const router = useRouter()
defineOptions({
  name: 'SidebarItem'
})

const props = defineProps({
  route: {
    type: Object as PropType<RouterNamespace.RouteRecord>
  }
})
const { path, hidden, name, meta, role, showChild, children } =
  props.route as RouterNamespace.RouteRecord

// 判断路由是否有子路由
const routeHasChildren = () => {
  return !!props.route?.children
}

// 判断是否有权限
const routeHasRole = () => {
  const getRoles = routesStoreHook.getRoles
  return !role ? true : !!getRoles[name || '']
}

const clickMenuItem = () => {
  router.push({ name: props.route?.name })
}
</script>
