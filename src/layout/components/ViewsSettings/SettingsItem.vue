<template>
  <div class="drawer-item">
    <span style="padding-right: 12px">{{ title }}</span>
    <slot />
  </div>
</template>
<script lang="ts" setup>
defineProps({
  title: {
    type: String,
    default: () => ''
  }
})
</script>
<style lang="scss" scoped>
.drawer-item {
  display: flex;
  align-items: center;
  justify-content: space-between;
}
</style>
