<template>
  <template v-if="!hidden">
    <!-- 存在子路由 -->
    <template v-if="routeHasChildren()">
      <el-sub-menu :index="name">
        <template #title>
          <Item :icon="meta?.icon" :title="meta?.title" />
        </template>
        <sidebar-item v-for="child in props.route?.children" :key="child.path" :route="child" />
      </el-sub-menu>
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
import { RouterNamespace } from 'types/router'

const router = useRouter()
defineOptions({
  name: 'SidebarItem',
})

const props = defineProps({
  route: {
    type: Object as PropType<RouterNamespace.RouteRecord>,
  },
})
const { path, hidden, name, meta } = props.route as RouterNamespace.RouteRecord

// 判断路由是否有子路由
const routeHasChildren = () => {
  return !!props.route?.children
}

const clickMenuItem = () => {
  router.push({ name: props.route?.name })
}
</script>
