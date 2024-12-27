<template>
  <el-dropdown trigger="click" class="international" @command="handleSetSize">
    <div class="drop-title">
      <svg-icon class-name="international-icon" icon-class="size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(key, value) in LanguageEnum"
          :disabled="size === value"
          :command="value"
          :key="value"
        >
          {{ key }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import useAppStore from '@/store/modules/app'
enum LanguageEnum {
  large = 'large',
  default = 'default',
  small = 'small',
}
const appStore = useAppStore()
const size = computed(() => appStore.getSize)

const handleSetSize = (size: string) => {
  appStore.setSize(size)
}
</script>
<style lang="scss" scoped>
.drop-title {
  height: 100%;
  padding: 0 8px;
  display: flex;
  justify-content: center;
  align-items: center;
}
</style>
