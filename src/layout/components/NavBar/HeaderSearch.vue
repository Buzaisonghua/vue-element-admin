<template>
  <div :class="{ show: show }" class="header-search">
    <svg-icon class-name="search-icon" icon-class="search" @click.stop="click" />
    <el-select
      ref="headerSearchSelectRef"
      v-model="search"
      :remote-method="querySearch"
      filterable
      default-first-option
      remote
      placeholder=""
      class="header-search-select"
      @change="change"
    >
      <el-option
        v-for="item in options"
        :key="item.name"
        :value="item.name"
        :label="item.title.join(' > ')"
      />
    </el-select>
  </div>
</template>

<script lang="ts" setup>
interface IOptions {
  name: string
  title: string[]
  pinyinTitle?: string
}
import Fuse from 'fuse.js'
import { useAppStore, useRoutesStoreHook } from '@/store'
import { RouterNamespace } from 'types/router'
const appStore = useAppStore()
const routesStore = useRoutesStoreHook()
const { t } = useI18n()
const router = useRouter()

const headerSearchSelectRef = ref()
const show = ref(false)
const search = ref('')
let searchPool = ref<IOptions[]>([])
let options = ref<IOptions[]>([])
let fuse: any = ''
const language = computed(() => appStore.getLanguage)
const routes = routesStore.getRoutes

watch(show, async (value) => {
  value
    ? document.body.addEventListener('click', close)
    : document.body.removeEventListener('click', close)
  if (value) {
    if (language.value === 'ZH') {
      searchPool.value = await addPinyinField(generateRoutes(routes))
    } else {
      searchPool.value = generateRoutes(routes)
    }
    nextTick(() => {
      initFuse(searchPool.value)
    })
  }
})

// 点击开始搜索
const click = () => {
  show.value = !show.value
  show.value && headerSearchSelectRef && headerSearchSelectRef.value.focus()
}
// 关闭
const close = () => {
  show.value = false
  headerSearchSelectRef && headerSearchSelectRef.value.blur()
}
const querySearch = (query: string) => {
  if (query !== '') {
    options.value = fuse.search(query)
  } else {
    options.value = []
  }
}
const change = (name: string) => {
  router.push({ name: name })
  search.value = ''
  options.value = []
  nextTick(() => {
    close()
  })
}
const generateRoutes = (
  routes: RouterNamespace.RouteRecord[],
  prefixTitle: string[] = [],
): IOptions[] => {
  let res: IOptions[] = []
  for (const router of routes) {
    // skip hidden router
    if (router.hidden) {
      continue
    }
    const data: IOptions = {
      name: router.name || '   ',
      title: [...prefixTitle],
    }
    if (router.meta && router.meta.title) {
      // generate internationalized title
      const i18ntitle = t(`route.${router.meta.title}`)
      data.title = [...data.title, i18ntitle]
      if (router.redirect !== 'noRedirect') {
        // only push the routes with title
        // special case: need to exclude parent router without redirect
        res.push(data)
      }
    }
    // recursive child routes
    if (router.children) {
      const tempRoutes = generateRoutes(router.children, data.title)
      if (tempRoutes.length >= 1) {
        res = [...res, ...tempRoutes]
      }
    }
  }
  return res
}
const addPinyinField = async (list: IOptions[]): Promise<IOptions[]> => {
  const { default: pinyin } = await import('pinyin')
  if (Array.isArray(list)) {
    list.forEach((element) => {
      const title = element.title
      if (Array.isArray(title)) {
        title.forEach((v) => {
          v = pinyin(v, {
            style: pinyin.STYLE_NORMAL,
          }).join('')
          element.pinyinTitle = v
        })
      }
    })
  }
  return list
}
const initFuse = (list: IOptions[]) => {
  fuse = new Fuse(list, {
    shouldSort: true,
    threshold: 0.3,
    location: 0,
    distance: 100,
    minMatchCharLength: 1,
    keys: [
      {
        name: 'pinyinTitle',
        weight: 0.6,
      },
      {
        name: 'title',
        weight: 0.5,
      },
      {
        name: 'path',
        weight: 0.4,
      },
    ],
  })
}
</script>

<style lang="scss" scoped>
.header-search {
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
  .search-icon {
    cursor: pointer;
    font-size: 18px;
    vertical-align: middle;
  }
  .header-search-select {
    font-size: 18px;
    transition: width 0.2s;
    width: 0;
    overflow: hidden;
    background: transparent;
    border-radius: 0;
    display: inline-block;
    vertical-align: middle;

    :deep(.el-input__inner) {
      border-radius: 0;
      border: 0;
      padding-left: 0;
      padding-right: 0;
      box-shadow: none !important;
      border-bottom: 1px solid #d9d9d9;
      vertical-align: middle;
    }
  }
  &.show {
    .header-search-select {
      width: 210px;
      margin-left: 10px;
    }
  }
}
</style>
