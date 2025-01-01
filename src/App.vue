<template>
  <el-config-provider :locale="locale" :size="size">
    <router-view />
  </el-config-provider>
</template>

<script setup lang="ts">
import { useAppStore } from '@/store'

const appStore = useAppStore()
const locale = computed(() => appStore.getLanguageEl)
const size = computed(() => appStore.getSize)
</script>
