<template>
  <el-dropdown trigger="click" class="international" @command="handleSetSize">
    <div class="drop-title">
      <svg-icon class-name="international-icon" icon-class="size" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(key, value) in LanguageEnum"
          :key="value"
          :disabled="size === value"
          :command="value"
        >
          {{ key }}
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
defineProps({
  size: {
    type: String
  }
})
const emit = defineEmits(['change'])
enum LanguageEnum {
  large = 'large',
  default = 'default',
  small = 'small'
}

const handleSetSize = (size: string) => {
  emit('change', size)
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
