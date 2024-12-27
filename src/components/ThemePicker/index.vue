<template>
  <el-color-picker
    v-model="theme"
    :predefine="colors"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>
<script lang="ts" setup>
import { hexToRgb } from '@/utils/theme'

const props = defineProps({
  color: String,
})
const theme = ref(`rgba(${hexToRgb(props.color || '#000000').join()})`)
const emit = defineEmits(['updateColor'])

// 定义颜色预设
const colors = [
  '#409EFF',
  '#1890ff',
  '#304156',
  '#212121',
  '#11a983',
  '#13c2c2',
  '#6959CD',
  '#f5222d',
]
watch(theme, (newValue) => {
  emit('updateColor', newValue)
})
</script>

<style>
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  height: 26px !important;
  width: 26px !important;
  padding: 2px;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
