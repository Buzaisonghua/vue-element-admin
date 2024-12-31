<template>
  <el-icon v-if="!!props.icon"><svg-icon :icon-class="props.icon" /></el-icon>
  <span>{{ t(`route.${props.title}`) }}</span>
</template>
<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
const { t } = useI18n()
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
