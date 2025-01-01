<template>
  <div class="icons-container">
    <div class="grid">
      <div
        class="icon-item"
        v-for="item in files"
        :key="item"
        @click.stop="clickIconItem(item, $event)"
      >
        <svg-icon :icon-class="item" />
        <span>{{ item }}</span>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { copy } from '@/utils'

const re = /\/([^\/]+)\.svg$/
const files = Object.keys(import.meta.glob('@/icons/svg/*')).map((val) => {
  const names = re.exec(val) as string[]
  return names[1]
})
const clickIconItem = (item: string, event: { target?: EventTarget }) => {
  copy(`<svg-icon :icon-class="${item}" />`, event)
}
</script>
<style lang="scss" scoped>
.icons-container {
  padding: 10px;
  overflow-y: scroll;
  height: 100%;
  box-sizing: border-box;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    background: $drawerBg;
    min-height: 100%;
  }

  .icon-item {
    margin: 20px;
    height: 85px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    cursor: pointer;
  }

  span {
    display: block;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
