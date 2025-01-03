<template>
  <div class="icons-container" @scroll="scrollIcons">
    <div class="grid">
      <div v-for="item in icons" :key="item">
        <el-tooltip
          placement="top"
          ref="tooltipRef"
          tigger="contextmenu"
          :content="svgText(item)"
          :disabled="show"
        >
          <div class="icon-item" @click="clickIconItem(svgText(item))">
            <svg-icon v-if="type === 'my'" :icon-class="item" />
            <el-icon v-else><component :is="item" /></el-icon>
            <span class="text">{{ item }}</span>
          </div>
        </el-tooltip>
      </div>
    </div>
  </div>
</template>
<script lang="ts" setup>
import { copy, throttle } from '@/utils'

const { t } = useI18n()
const props = defineProps({
  icons: {
    type: Array,
  },
  type: {
    type: String,
    default: () => 'my',
  },
})
const tooltipRef = ref<UploadInstance>()
const show = ref<Boolean>(false)

/**
 * 这里是为了解决 element 的bug
 * 在一个元素上触发tooltip，然后滑动滚动条并不会及时消失导致外层被撑开
 */
const scrollIcons = throttle(() => {
  show.value = true
  nextTick(() => (show.value = false))
}, 500)

const svgText = (item: string) =>
  props.type === 'my' ? `<svg-icon :icon-class="${item}" />` : `<el-icon><${item} /></el-icon>`
const clickIconItem = (item: string) => {
  copy(item, t('message.copyIconMsgSuccess'))
}
</script>
<style lang="scss" scoped>
.icons-container {
  box-sizing: border-box;
  height: 100%;
  padding: 10px;
  overflow: hidden auto;

  .grid {
    position: relative;
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(120px, 1fr));
    background: $drawerBg;
    min-height: 100%;
  }

  .icon-item {
    margin: 10px;
    height: 100px;
    text-align: center;
    width: 100px;
    float: left;
    font-size: 30px;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    flex-flow: column;
    border-radius: 4px;
    &:hover {
      background-color: $hoverBg;
    }
  }

  span {
    display: block;
    width: 100%;
    padding: 0 8px;
    font-size: 16px;
    margin-top: 10px;
  }

  .disabled {
    pointer-events: none;
  }
}
</style>
