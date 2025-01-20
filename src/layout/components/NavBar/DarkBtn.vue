<template>
  <div class="dark-btn" @click="taggleDark">
    <svg-icon :icon-class="isDark ? 'moon' : 'sunny'" />
  </div>
</template>

<script lang="ts" setup>
import { useSettingsStore } from '@/store'
const settingsStore = useSettingsStore()
const isDark = useDark()

const taggleDark = () => {
  settingsStore.setDark()
}
</script>

<style scoped>
.dark-btn {
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 0 8px;
  height: 100%;
}
</style>
