<template>
    <main class="layout-box">
        <nav class="layout-nav">
            <div @click="goTo('/dashboard')">dashboard</div>
        </nav>
        <section class="layout-center">
            <header class="layout-header"></header>
            <div class="center-box"></div>
        </section>
    </main>
</template>
<script setup lang="ts">
import { onBeforeMount } from 'vue';
import useRoutesStore from '@/store/modules/routes';
import useUserStore from '@/store/modules/user'
import { useRouter } from 'vue-router';

const router = useRouter()

onBeforeMount(() => {
    initRoute()
})
const goTo = (path: string) => {
    router.push(path)
}
/**
 * 根据登录人初始化路由信息
 */
const initRoute = () => {
    const useRoutes = useRoutesStore()
    useRoutes.setRoutes(useUserStore().getUserId)
}
</script>
<style lang="scss" scoped>
.layout-box {
    height: 100%;
    position: relative;
    .layout-nav {
        height: 100%;
        width: 200px;
        // background: #000;
    }
    .layout-center {
        position: absolute;
        left: 200px; top: 0; bottom: 0; right: 0;
        background: #f2f3f5;
        .layout-header {
            height: 84px;
            background: #fff;
        }
        .center-box {
            height: calc(100% - 84px);
        }
    }
}
</style>
