<template>
  <div class="drawer-container">
    <div>
      <h3 class="drawer-title">{{ t('settings.title') }}</h3>
      <el-divider style="margin-top: 60px" content-position="center">{{
        t('settings.darkThene')
      }}</el-divider>
      <SettingsItem :title="t('settings.dark')">
        <el-switch
          v-model="isDark"
          style="

--el-switch-on-color: #f2f2f2; --el-switch-off-color: #2c2c2c"
          @change="changeDark"
        >
          <template #inactive-action><svg-icon icon-class="sunny" /></template>
          <template #active-action
            ><svg-icon class="on-svg" icon-class="moon"
          /></template>
        </el-switch>
      </SettingsItem>
      <SettingsItem :title="t('settings.theme')">
        <theme-picker :color="themeColor" @update-color="updateColor" />
      </SettingsItem>
      <el-divider content-position="center">{{
        t('settings.interface')
      }}</el-divider>
      <SettingsItem :title="t('settings.tagsView')">
        <el-switch v-model="tagsView" @change="changeTagsView" />
      </SettingsItem>
    </div>
  </div>
</template>

<script lang="ts" setup>
import SettingsItem from './SettingsItem.vue'
import ThemePicker from '@/components/ThemePicker/index.vue'
import useSettingsStore from '@/store/modules/settings'
const settingsStore = useSettingsStore()
const { t } = useI18n()
const isDark = useDark()
const themeColor = computed(() => settingsStore.getThemeColor)
const tagsView = ref(settingsStore.getTagsView)

onBeforeMount(() => {
  updateColor(themeColor.value)
})
// 改变主题色
const updateColor = (color: string) => {
  settingsStore.setThemeColor(color)
}
// 改变主题
const changeDark = () => {
  settingsStore.setDark()
}
// 改变布局
const changeTagsView = () => {
  settingsStore.setTagsView(tagsView.value)
}
</script>

<style lang="scss" scoped>
.on-svg {
  background-color: #141414;
  color: #cfd3dc;
  border-radius: 50%;
}
.drawer-container {
  padding: 24px;
  font-size: 14px;
  line-height: 1.5;
  word-wrap: break-word;

  .drawer-title {
    margin-bottom: 12px;
    // color: rgba(0, 0, 0, 0.85);
    font-size: 14px;
    line-height: 22px;
  }

  .drawer-item {
    // color: rgba(0, 0, 0, 0.65);
    font-size: 14px;
    padding: 12px 0;
  }

  .drawer-switch {
    float: right;
  }
}
</style>
