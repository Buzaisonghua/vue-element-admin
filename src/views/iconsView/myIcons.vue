<template>
  <Icons :icons="icons" type="my" />
</template>
<script lang="ts" setup>
import Icons from './components/Icons.vue'

// eslint-disable-next-line no-useless-escape
const re = /\/([^\/]+)\.svg$/
const icons = Object.keys(import.meta.glob('@/icons/svg/*')).map((val) => {
  const names = re.exec(val) as string[]
  return names[1]
})
</script>
