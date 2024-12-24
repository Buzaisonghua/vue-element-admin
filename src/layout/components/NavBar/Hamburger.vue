<template>
  <div class="hamburger-box" @click="toggleClick">
    <svg-icon icon-class="indent" />
    {{ sidebar }}
  </div>
</template>

<script lang="ts" setup>
import { defineProps } from 'vue'
defineProps({
  sidebar: { type: Boolean },
})
const toggleClick = () => {}
</script>

<style scoped lang="scss">
.hamburger-box {
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
