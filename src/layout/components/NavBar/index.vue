<template>
  <nav class="navbar">
    <Hamburger :sidebar="sidebar" @toggleClick="sidebarClick" />
    <div class="right-menu">
      <template v-if="!props.isMobile">
        <div class="right-menu-item hover-effect">
          <Fullscreen />
        </div>
        <el-tooltip :content="t('navbar.size')" effect="dark" placement="bottom">
          <SizeSelect class="right-menu-item hover-effect" />
        </el-tooltip>
        <LangSelect class="right-menu-item hover-effect" />
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
import { useAppStore } from '@/store/modules/app'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const appStore = useAppStore()
const sidebar = computed(() => appStore.getSidebarOpened)

const props = defineProps({
  isMobile: {
    type: Boolean,
    default: () => false,
  },
})

const sidebarClick = () => {
  appStore.setSidebarOpened()
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
