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

      <span class="el-icon-close" />
    </router-link>
  </div>
</template>
<script lang="ts" setup>
import { useSettingsStore, useRoutesStoreHook } from '@/store'
import useTagsStore from '@/store/modules/tags'
import { RouterNamespace } from 'types/router'
const settingsStore = useSettingsStore()

const show = computed(() => settingsStore.getTagsView)
const router = useRoutesStoreHook()
const route = useRoute() // 获取当前路由对象
const tagsStore = useTagsStore()
const visitedViews = tagsStore.getVisitedViews

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

// 监听路由变化
watch(
  () => route.path, // 监听路由的路径变化
  () => {
    addTags(route)
  },
)

onBeforeMount(() => {
  initTags()
  addTags(route)
})

const filterAffixTags = (routes: RouterNamespace.RouteRecord[], basePath = '/') => {
  let tags: Array<TagsType.Tags> = []
  routes.forEach((route) => {
    if (route.affix) {
      const tagPath = basePath + route.path
      tags.push({
        path: tagPath,
        name: route.name || '',
        title: route.meta?.title || '',
        detail: true,
      })
    }
    if (route.children) {
      const tempTags = filterAffixTags(route.children, route.path)
      if (tempTags.length >= 1) {
        tags = [...tags, ...tempTags]
      }
    }
  })
  return tags
}

const initTags = () => {
  const affixTags = filterAffixTags(router.getRoutes)
  for (const tag of affixTags) {
    // Must have tag name
    if (tag.name) {
      tagsStore.addVisitedViews(tag)
    }
  }
}

const isActive = (name: string) => {
  return name === route.name
}
</script>
<style lang="scss" scoped>
.tags-view-container {
  height: 34px;
  width: 100%;
  box-shadow:
    0 1px 3px 0 rgba(0, 0, 0, 0.12),
    0 0 3px 0 rgba(0, 0, 0, 0.04);
  .tags-view-item {
    display: inline-block;
    position: relative;
    cursor: pointer;
    height: 26px;
    line-height: 26px;
    border: 1px solid #d8dce5;
    color: #495060;
    background: #fff;
    padding: 0 8px;
    font-size: 12px;
    margin-left: 5px;
    margin-top: 4px;
    &:first-of-type {
      margin-left: 15px;
    }
    &:last-of-type {
      margin-right: 15px;
    }
    &.active {
      background-color: $bg;
      color: #fff;
      border-color: $bg;
      &::before {
        content: '';
        background: #fff;
        display: inline-block;
        width: 8px;
        height: 8px;
        border-radius: 50%;
        position: relative;
        margin-right: 2px;
      }
    }
  }
}
</style>
