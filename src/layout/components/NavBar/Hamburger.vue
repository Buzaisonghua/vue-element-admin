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
  toggleClick: []
}>()
const toggleClick = () => emit('toggleClick')
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
    background-color: rgba(0, 0, 0, 0.025);
  }
}
.hamburger.is-active {
  transform: rotate(180deg);
}
</style>
