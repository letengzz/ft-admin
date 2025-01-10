<script setup lang="ts">
import TheWelcome from '../components/TheWelcome.vue'
</script>

<template>
  <main>
    <div class="h-100 w-100 bg-red-800 text-30 text-blue hover:text-black">
      小猫米
    </div>
    <hr>
    <div class="box2">
      小猫咪
    </div>
    <hr>
    <div h100 w100 bg-blueGray text-fuchsia mt10 py20>
      小猫咪
    </div>
    <hr>
    <div class="wrap" w200 h100 flex-center gap10>
      <div w20 h20 bg-blue />
      <div w20 h20 bg-blue />
      <div w20 h20 bg-blue />
    </div>
    <hr>
    <div i-ep:dish />
    <i w100 h100 block i-ep:switch-button />
    <TheWelcome />
  </main>
</template>

<style scoped lang="scss">
.box2 {
  @apply h-100 w-100 bg-red-800 text-30 text-blue hover:text-black;
}

.wrap {
  border: 1px solid #ddd;
}
</style>
