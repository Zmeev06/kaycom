<template>
  <div class="form-layout">
    <slot name="header" />
    <slot />
    <slot name="footer" />
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.form-layout {
  padding: 40px 70px;
  background: #eef2f4;
  width: fit-content;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}
</style>
