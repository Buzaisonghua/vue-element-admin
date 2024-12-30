<template>
  <div class="tags-view-container" v-if="show">
    <router-link
      v-for="tag in visitedViews"
      ref="tag"
      :key="tag.path"
      :class="isActive(tag.name) ? 'active' : ''"
      :to="{ name: tag.name }"
      tag="span"
      class="tags-view-item"
    >
      {{ tag.title }}
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore } from '@/store'
import useTagsStore from '@/store/modules/tags'
const settingsStore = useSettingsStore()

const show = computed(() => settingsStore.getTagsView)
const route = useRoute() // 获取当前路由对象
const tagsStore = useTagsStore()
const visitedViews = tagsStore.getVisitedViews

// 监听路由变化
watch(
  () => route.path, // 监听路由的路径变化
  () => {
    addTags(route)
  },
)

onBeforeMount(() => {
  addTags(route)
})

const isActive = (name: string) => {
  return name === route.name
}

const addTags = (route: Obj) => {
  const {
    name,
    path,
    meta: { title },
  } = route
  tagsStore.addVisitedViews({
    name,
    path,
    title,
  })
}
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
}
</style>
