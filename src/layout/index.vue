<template>
  <main
    class="layout-box"
    :class="[
      isMobile ? 'is-mobile' : 'is-desktop',
      sidebar ? 'sidebar-close' : 'sidebar-open',
      withMobileClickSidebar ? (sidebar ? 'sidebar-moblie-open' : 'sidebar-moblie-close') : '',
    ]"
  >
    <div v-if="device === 'mobile' && sidebar" class="drawer-bg" @click="handleClickOutside" />
    <div class="layout-sidebar">
      <Sidebar />
    </div>
    <section class="layout-center">
      <header class="layout-header"> <NavBar /> {{ sidebar }} </header>
      <div class="center-box">
        <RouterView />
      </div>
    </section>
  </main>
</template>
<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import NavBar from './components/NavBar/index.vue'
import ResizeMixin from './mixin/ResizeHandler'
import useAppStore from '@/store/modules/app'
const appStore = useAppStore()
const device = computed(() => appStore.getDevice)
const sidebar = computed(() => appStore.getSidebarOpened)
const isMobile = computed(() => appStore.getDevice === 'mobile')
const withMobileClickSidebar = computed(() => appStore.getWithMobileClickSidebar)

defineOptions({
  mixins: [ResizeMixin],
})
const handleClickOutside = () => {
  appStore.setSidebarOpened()
}
</script>
<style lang="scss" scoped>
.layout-box {
  height: 100%;
  display: flex;
  position: relative;
  .layout-sidebar {
    background-color: #fff;
    height: 100%;
  }
  .layout-center {
    flex: 1;
    background: #f2f3f5;
    z-index: 0;
    .layout-header {
      height: 84px;
      background: #fff;
    }
    .center-box {
      height: calc(100% - 84px);
    }
  }
  .drawer-bg {
    z-index: 1;
    background-color: bisque;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: #000;
    opacity: 0.3;
  }
  &.is-desktop {
    &.sidebar-close .layout-sidebar {
      width: 60px;
      transition: 300ms all;
    }
    &.sidebar-open .layout-sidebar {
      width: 200px;
      transition: 300ms all;
    }
  }
  // 显示器宽度变化，适合切换到移动端状态
  &.is-mobile {
    .layout-sidebar {
      position: absolute;
      top: 0;
      bottom: 0;
      width: 200px;
      z-index: 1;
      transform: translateX(-200px);
    }
    &.sidebar-moblie-close .layout-sidebar {
      z-index: 1;
      transform: translateX(-200px);
      transition: 300ms all;
    }
    &.sidebar-moblie-open .layout-sidebar {
      z-index: 1;
      transform: translateX(0);
      transition: 300ms all;
    }
  }
}
</style>
