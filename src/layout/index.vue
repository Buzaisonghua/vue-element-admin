<template>
    <main class="layout-box">
        <div class="layout-sidebar">
            <Sidebar />
        </div>
        <section class="layout-center">
            <header class="layout-header">
                <NavBar />
            </header>
            <div class="center-box">
                <RouterView />
            </div>
        </section>
    </main>
</template>
<script setup lang="ts">
import Sidebar from './components/Sidebar.vue';
import NavBar from './components/NavBar/index.vue'
</script>
<style lang="scss" scoped>
.layout-box {
    height: 100%;
    display: flex;
    .layout-sidebar {
        height: 100%;
    }
    .layout-center {
        flex: 1;
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
