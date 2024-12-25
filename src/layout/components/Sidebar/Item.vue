<template>
  <el-icon v-if="!!props.icon"><svg-icon :icon-class="props.icon" /></el-icon>
  <span>{{ props.title }}</span>
</template>
<script lang="ts" setup>
const props = defineProps({
  icon: {
    type: String,
    default: () => '',
  },
  title: {
    type: String,
    default: () => '默认名称',
  },
})
</script>
