<template>
  <nav class="navbar">
    <Hamburger :sidebar="sidebar" />
  </nav>
</template>
<script setup lang="ts">
import { computed } from 'vue'
import Hamburger from './Hamburger.vue'
import { useAppStore } from '@/store/modules/app'

const sidebar = computed(() => useAppStore().getSidebarOpened)
</script>
<style lang="scss" scoped>
.navbar {
  height: 50px;
  overflow: hidden;
  position: relative;
  background: #fff;
  box-shadow: 0 1px 4px rgba(0, 21, 41, 0.08);
  color: red;
}
</style>
