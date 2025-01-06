<template>
  <el-dropdown trigger="click" class="international">
    <div class="drop-title">
      <div class="avator-box">
        <el-image style="width: 100%; height: 100%" :src="avatar" fit="fill" />
      </div>
      <span class="sort-down-icon">
        <svg-icon icon-class="sort-down" />
      </span>
    </div>
    <template #dropdown>
      <el-dropdown-menu>
        <router-link to="/">
          <el-dropdown-item>
            {{ t('route.dashboard') }}
          </el-dropdown-item>
        </router-link>
        <a target="_blank" href="https://github.com/Buzaisonghua/vue-element-admin">
          <el-dropdown-item>
            {{ t('navbar.github') }}
          </el-dropdown-item>
        </a>
        <el-dropdown-item divided @click.native="logoutClick">
          <span style="display: block">{{ t('navbar.logOut') }}</span>
        </el-dropdown-item>
      </el-dropdown-menu>
    </template>
  </el-dropdown>
</template>

<script lang="ts" setup>
import { useI18n } from 'vue-i18n'
import { useUserStore } from '@/store'
const userStore = useUserStore()
const router = useRouter()
const route = useRoute()

const avatar = userStore.getAvatar
const { t } = useI18n()
const logoutClick = () => {
  userStore.setLogout()
  router.push(`/login?redirect=${route.fullPath}`)
}
</script>
<style lang="scss" scoped>
.drop-title {
  height: 100%;
  padding: 0 12px;
  display: flex;
  justify-content: center;
  align-items: center;
  .avator-box {
    width: 24px;
    height: 24px;
    border-radius: 50%;
    overflow: hidden;
  }
  .sort-down-icon {
    font-size: 12px;
    padding-left: 6px;
  }
}
</style>
