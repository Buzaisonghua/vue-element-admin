<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">Page style setting</h3>

      <div class="drawer-item">
        <span style="padding-right: 12px">Theme Color</span>
        <theme-picker :color="themeColor" @updateColor="updateColor" />
      </div>
    </div>
  </div>
</template>

<script lang="ts" setup>
import ThemePicker from '@/components/ThemePicker/index.vue'
import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()

const themeColor = computed(() => settingsStore.getThemeColor)
const updateColor = (color: string) => {
  settingsStore.setThemeColor(color)
}
</script>

<style lang="scss" scoped>
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
