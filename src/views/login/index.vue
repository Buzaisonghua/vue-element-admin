<template>
  <div class="login">
    <!-- 登录页内容 -->
    <div class="login-content">
      <div class="login-img">
        <el-image :src="loginImage" style="width: 210px" />
      </div>
      <div class="login-form">
        <el-form ref="loginFormRef" :model="loginData" :rules="loginRules">
          <div class="form-title">
            <h2>{{ defaultSettings.title }}</h2>
            <el-dropdown style="position: absolute; right: 0">
              <div class="cursor-pointer">下拉</div>
              <template #dropdown>
                <el-dropdown-menu>
                  <el-dropdown-item>
                    版本号：
                    <el-tag type="success">
                      <!-- {{ defaultSettings.version }} -->
                    </el-tag>
                  </el-dropdown-item>

                  <el-dropdown-item
                    @click="setLoginCredentials('root', '123456')"
                  >
                    超级管理员：root/123456
                  </el-dropdown-item>
                  <el-dropdown-item
                    @click="setLoginCredentials('admin', '123456')"
                  >
                    系统管理员：admin/123456
                  </el-dropdown-item>
                  <el-dropdown-item
                    @click="setLoginCredentials('test', '123456')"
                  >
                    测试小游客：test/123456
                  </el-dropdown-item>
                </el-dropdown-menu>
              </template>
            </el-dropdown>
          </div>

          <!-- 用户名 -->
          <el-form-item prop="username">
            <div class="input-wrapper">
              <el-icon class="mx-2">
                <User />
              </el-icon>
              <el-input
                ref="username"
                v-model="loginData.username"
                placeholder="login.username"
                name="username"
                size="large"
              />
            </div>
          </el-form-item>

          <!-- 密码 -->
          <el-tooltip
            :visible="isCapslock"
            content="login.capsLock"
            placement="right"
          >
            <el-form-item prop="password">
              <div class="input-wrapper">
                <el-icon class="mx-2">
                  <Lock />
                </el-icon>
                <el-input
                  v-model="loginData.password"
                  placeholder="login.password"
                  type="password"
                  name="password"
                  size="large"
                  class="pwd-input"
                  show-password
                  @keyup="checkCapslock"
                  @keyup.enter="handleLoginSubmit"
                />
              </div>
            </el-form-item>
          </el-tooltip>

          <!-- 登录按钮 -->
          <el-button
            :loading="loading"
            type="primary"
            size="large"
            class="w-full"
            @click.prevent="handleLoginSubmit"
            >login
          </el-button>
        </el-form>
      </div>
    </div>

    <!-- 登录页底部 -->
    <div class="login-footer">
      <el-text size="small"> Copyright © 2021 - 2024 test demo. </el-text>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import { login } from '@/api/auth'
import { setToken } from '@/utils/auth'
import defaultSettings from '@/settings'
const router = useRouter()
const route = useRoute()
const loading = ref(false) // 按钮 loading 状态
const isCapslock = ref(false) // 是否大写锁定
const loginImage = ref(
  new URL('../../assets/images/login-image.svg', import.meta.url).href
)

const loginData = ref<Auth.LoginData>({
  username: 'admin',
  password: '123456'
})

const loginRules = computed(() => {
  return {
    username: [
      {
        required: true,
        trigger: 'blur',
        message: 'login.message.username.required'
      }
    ],
    password: [
      {
        required: true,
        trigger: 'blur',
        message: 'login.message.password.required'
      },
      {
        min: 6,
        message: 'login.message.password.min',
        trigger: 'blur'
      }
    ]
  }
})

// 登录
async function handleLoginSubmit() {
  login({
    username: loginData.value.username,
    password: loginData.value.password
  }).then((res) => {
    setToken(res.accessToken)
    router.push(route.query.redirect ? (route.query.redirect as string) : '/')
  })
}

// 检查输入大小写
function checkCapslock(event: KeyboardEvent) {
  // 防止浏览器密码自动填充时报错
  if (event instanceof KeyboardEvent) {
    isCapslock.value = event.getModifierState('CapsLock')
  }
}

// 设置登录凭证
const setLoginCredentials = (username: string, password: string) => {
  loginData.value.username = username
  loginData.value.password = password
}
</script>

<style lang="scss" scoped>
.login {
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
  overflow-y: auto;
  background: url('@/assets/images/login-background-light.jpg') no-repeat center
    right;

  .login-content {
    display: flex;
    width: 960px;
    overflow: hidden;
    background-color: #fff;
    border-radius: 5px;
    box-shadow: var(--el-box-shadow-light);

    @media (width <= 768px) {
      flex-direction: column;
      max-width: 100%;
      height: 100vh;
      padding: 0 30px;
      border-radius: 0;
      box-shadow: none;
    }

    .login-img {
      display: flex;
      flex: 3;
      align-items: center;
      justify-content: center;
      background: linear-gradient(60deg, #165dff, #6aa1ff);

      @media (width <= 768px) {
        display: none;
      }
    }

    .login-form {
      display: flex;
      flex: 2;
      flex-direction: column;
      justify-content: center;
      min-width: 400px;
      padding: 30px;

      @media (width <= 768px) {
        width: 100%;
        padding: 0 20px;
      }

      .form-title {
        position: relative;
        display: flex;
        align-items: center;
        justify-content: center;
        padding: 0 0 20px;
        text-align: center;
      }

      .input-wrapper {
        display: flex;
        align-items: center;
        width: 100%;
        .pwd-input {
          padding-right: 12px;
        }
      }

      .captcha-img {
        height: 48px;
        cursor: pointer;
        border-top-right-radius: 6px;
        border-bottom-right-radius: 6px;
      }

      .third-party-login {
        display: flex;
        justify-content: center;
        width: 100%;
        color: var(--el-text-color-secondary);

        *:not(:first-child) {
          margin-left: 20px;
        }

        .icon {
          cursor: pointer;
        }
      }
    }
  }

  .login-footer {
    position: absolute;
    bottom: 0;
    width: 100%;
    text-align: center;
  }
}

:deep(.el-form-item) {
  background: var(--el-input-bg-color);
  border: 1px solid var(--el-border-color);
  border-radius: 5px;
}

:deep(.el-input) {
  .el-input__wrapper {
    padding: 0;
    background-color: transparent;
    box-shadow: none;

    &.is-focus,
    &:hover {
      box-shadow: none !important;
    }

    input:-webkit-autofill {
      /* 通过延时渲染背景色变相去除背景颜色 */
      transition: background-color 1000s ease-in-out 0s;
    }
  }
}
</style>
