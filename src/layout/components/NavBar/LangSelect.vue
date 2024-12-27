<template>
  <el-dropdown trigger="click" class="international" @command="handleSetLanguage">
    <div class="drop-title">
      <svg-icon class-name="international-icon" icon-class="language" />
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <el-dropdown-item
          v-for="(key, value) in LanguageEnum"
          :disabled="language === value"
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
import { useI18n } from 'vue-i18n'
const { locale, t } = useI18n()
enum LanguageEnum {
  ZH = '中文',
  EN = 'English',
}
const appStore = useAppStore()
const language = computed(() => appStore.getLanguage)

const handleSetLanguage = (lang: Global.LanguageType) => {
  locale.value = lang
  appStore.setLanguage(lang)
  ElMessage({
    message: t('message.changeLanguageMsg'),
    type: 'success',
  })
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
