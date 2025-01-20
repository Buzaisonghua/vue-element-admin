<template>
  <Icons :icons="icons" type="element" />
</template>
<script lang="ts" setup>
import * as ElementPlusIconsVue from '@element-plus/icons-vue'
import Icons from './components/Icons.vue'
const icons = ref<string[]>(Object.keys(ElementPlusIconsVue))
</script>
