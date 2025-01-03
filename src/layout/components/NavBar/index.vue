<template>
  <nav class="navbar">
    <Hamburger :sidebar="sidebar" @click="sidebarClick" />
    <div class="right-menu">
      <template v-if="!isMobile">
        <div class="right-menu-item">
          <HeaderSearch />
        </div>
        <div class="right-menu-item hover-effect">
          <Fullscreen />
        </div>
        <el-tooltip :content="t('navbar.size')" effect="dark" placement="bottom">
          <SizeSelect :size="size" @change="changeSize" class="right-menu-item hover-effect" />
        </el-tooltip>
        <LangSelect
          :language="language"
          @change="changeLanguage"
          class="right-menu-item hover-effect"
        />
        <div class="right-menu-item hover-effect">
          <DarkBtn />
        </div>
      </template>
      <AvatarSelect class="right-menu-item hover-effect" />
    </div>
  </nav>
</template>
<script setup lang="ts">
import Hamburger from './Hamburger.vue'
import LangSelect from './LangSelect.vue'
import SizeSelect from './SizeSelect.vue'
import Fullscreen from './Fullscreen.vue'
import AvatarSelect from './AvatarSelect.vue'
import DarkBtn from './DarkBtn.vue'
import HeaderSearch from './HeaderSearch.vue'

import { useAppStore } from '@/store/modules/app'
const appStore = useAppStore()
const { t } = useI18n()

const sidebar = computed(() => appStore.getSidebarOpened)
const size = computed(() => appStore.getSize)
const language = computed(() => appStore.getLanguage)

defineProps({
  isMobile: {
    type: Boolean,
    default: () => false,
  },
})

const sidebarClick = () => {
  appStore.setSidebarOpened()
}
const changeSize = (size: string) => {
  appStore.setSize(size)
}
const changeLanguage = (language: string) => {
  appStore.setLanguage(language as Global.LanguageType)
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  display: flex;
  align-items: center;
  justify-content: space-between;
  .right-menu {
    height: 100%;
  }
  .right-menu-item {
    display: inline-block;
    height: 100%;
    font-size: 18px;
    &.hover-effect {
      cursor: pointer;
      transition: background 0.3s;

      &:hover {
        background: var(--el-menu-hover-bg-color);
      }
    }
  }
}
</style>
