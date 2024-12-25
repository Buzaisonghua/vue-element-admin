<template>
  <nav class="navbar">
    <Hamburger :sidebar="sidebar" @toggleClick="sidebarClick" />
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Hamburger from './Hamburger.vue'
import { useAppStore } from '@/store/modules/app'

const appStore = useAppStore()
const sidebar = computed(() => appStore.getSidebarOpened)

const sidebarClick = () => {
  appStore.setSidebarOpened()
}
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
}
</style>
