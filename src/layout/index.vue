<template>
    <main class="layout-box">
        <nav class="layout-nav"></nav>
        <center class="layout-center">
            <header class="layout-header"></header>
            <div class="center-box"></div>
        </center>
    </main>
</template>
<style lang="scss" scoped>
.layout-box {
    height: 100%;
    position: relative;
    .layout-nav {
        height: 100%;
        width: 200px;
        background: #000;
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
