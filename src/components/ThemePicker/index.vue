<template>
  <el-color-picker
    v-model="theme"
    :predefine="colors"
    class="theme-picker"
    popper-class="theme-picker-dropdown"
  />
</template>
<script lang="ts" setup>
const props = defineProps({
  color: String
})
const theme = ref(props.color)
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
  '#f5222d'
]
watch(
  theme,
  (newValue) => {
    emit('updateColor', newValue)
  },
  {
    immediate: true
  }
)
</script>

<style>
.theme-message,
.theme-picker-dropdown {
  z-index: 99999 !important;
}

.theme-picker .el-color-picker__trigger {
  padding: 2px;
  width: 26px !important;
  height: 26px !important;
}

.theme-picker-dropdown .el-color-dropdown__link-btn {
  display: none;
}
</style>
