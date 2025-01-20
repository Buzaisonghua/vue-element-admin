<template>
  <div class="drop-title" @click="click">
    <svg-icon :icon-class="isFullscreen ? 'exit-fullscreen' : 'fullscreen'" />
  </div>
</template>

<script lang="ts" setup>
import screenfull from 'screenfull'
import { useI18n } from 'vue-i18n'

const { t } = useI18n()
const isFullscreen = ref(false)

const click = () => {
  if (!screenfull.isEnabled) {
    ElMessage({
      message: t('message.screenfullEnabled'),
      type: 'warning'
    })
    return
  }
  screenfull.toggle()
  change()
}
const change = () => {
  isFullscreen.value = screenfull.isFullscreen
}

onBeforeMount(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change)
  }
})

onUnmounted(() => {
  if (screenfull.isEnabled) {
    screenfull.on('change', change)
  }
})
</script>

<style scoped>
.drop-title {
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
