<template>
  <Icons :icons="icons" type="element" />
</template>
<script lang="ts" setup>
import Icons from './components/Icons.vue'
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
const icons = ref<string[]>(Object.keys(ElementPlusIconsVue))
</script>
