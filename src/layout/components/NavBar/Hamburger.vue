<template>
  <div class="hamburger" :class="{ 'is-active': sidebar }" @click="toggleClick">
    <svg-icon icon-class="indent" />
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  sidebar: { type: Boolean },
})
const emit = defineEmits<{
  click: []
}>()
const toggleClick = () => emit('click')
</script>

<style scoped lang="scss">
.hamburger {
  width: 50px;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  &:hover {
    background-color: var(--el-menu-hover-bg-color);
  }
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
