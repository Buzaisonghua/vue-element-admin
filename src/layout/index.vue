<template>
  <main
    class="layout-box"
    :class="{
      'is-mobile': isMobile,
      'is-desktop': !isMobile,
      'sidebar-open': sidebar,
      'sidebar-close': !sidebar,
      'withoutAnimation': withoutAnimation,
    }"
  >
    <div v-if="device === 'mobile' && sidebar" class="drawer-bg" @click="handleClickOutside" />
    <div class="layout-sidebar">
      <Sidebar />
    </div>
    <section class="layout-center">
      <header class="layout-header">
        <NavBar :isMobile="isMobile" />
        <TagsView />
      </header>
      <div class="center-box">
        <RouterView />
      </div>
    </section>
    <!-- 右侧配置弹窗 -->
    <RightPanel>
      <ViewsSettings />
    </RightPanel>
  </main>
</template>
<script setup lang="ts">
import Sidebar from './components/Sidebar/index.vue'
import NavBar from './components/NavBar/index.vue'
import TagsView from './components/TagsView/index.vue'
import RightPanel from './components/RightPanel/index.vue'
import ViewsSettings from './components/ViewsSettings/index.vue'
import ResizeMixin from './mixin/ResizeHandler'
import useAppStore from '@/store/modules/app'
const appStore = useAppStore()
const device = computed(() => appStore.getDevice)
const sidebar = computed(() => appStore.getSidebarOpened)
const isMobile = computed(() => appStore.getDevice === 'mobile')
const withoutAnimation = computed(() => appStore.withoutAnimation)

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
      background: #fff;
    }
    .center-box {
      // height: calc(100% - 84px);
    }
  }
  .drawer-bg {
    z-index: 1;
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background-color: $drawerBg;
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
    &.sidebar-close .layout-sidebar {
      z-index: 1;
      transform: translateX(-200px);
      transition: 300ms all;
    }
    &.sidebar-open .layout-sidebar {
      z-index: 1;
      transform: translateX(0);
      transition: 300ms all;
    }
  }
  &.withoutAnimation .layout-sidebar {
    transition: none !important;
  }
}
</style>
