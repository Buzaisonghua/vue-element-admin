<template>
  <div ref="rightPanel" :class="{ 'show-right-panel': show }" class="rightPanel-container">
    <div class="rightPanel">
      <div class="handle-button" @click="handleBtnClick">
        <template v-if="$slots.icon">
          <slot name="icon" />
        </template>
        <svg-icon v-else :icon-class="show ? 'times' : 'cog-fill'" />
      </div>
      <slot />
    </div>
    <div class="rightPanel-background" @click="handleBtnClick" />
  </div>
</template>
<script lang="ts" setup>
let show = ref(false)
const handleBtnClick = () => {
  show.value = !show.value
}
</script>
<style lang="scss" scoped>
.rightPanel {
  width: 100%;
  max-width: 260px;
  height: 100vh;
  position: fixed;
  top: 0;
  right: 0;
  bottom: 0;
  box-shadow: 0px 0px 15px 0px rgba(0, 0, 0, 0.05);
  transition: all 0.25s cubic-bezier(0.7, 0.3, 0.1, 1);
  transform: translate(100%);
  background-color: $drawerBg;
  z-index: 40000;
  color: $textColor;
  .handle-button {
    width: 48px;
    height: 48px;
    position: absolute;
    left: -48px;
    top: 250px;
    text-align: center;
    font-size: 24px;
    border-radius: 6px 0 0 6px !important;
    z-index: 0;
    pointer-events: auto;
    cursor: pointer;
    color: #fff;
    line-height: 48px;
    background-color: var(--el-color-primary);
    i {
      font-size: 24px;
      line-height: 48px;
    }
  }
}
.rightPanel-background {
  position: fixed;
  top: 0;
  left: 0;
  background: $drawerBgOverlay;
  z-index: -1;
}
.show-right-panel {
  .rightPanel-background {
    z-index: 2000;
    right: 0;
    bottom: 0;
  }
  .rightPanel {
    transform: translate(0);
  }
}
</style>
