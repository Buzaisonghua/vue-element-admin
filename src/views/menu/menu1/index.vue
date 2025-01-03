<template>
  <div style="padding: 30px; width: 50%">
    <el-alert type="error" :closable="false" title="menu 1">
      <router-view />
    </el-alert>
  </div>
</template>
