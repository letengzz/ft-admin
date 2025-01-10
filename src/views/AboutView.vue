<script setup>
import { useCounterStore } from '@/stores/counter'

const counter = useCounterStore()
</script>

<template>
  <div class="about">
    <h1 class="num">
      This is an about page {{ counter.count }}
    </h1>
    <button @click="counter.increment">
      加一
    </button>
  </div>
</template>

<style scoped lang="scss">
@media (min-width: 1024px) {
  .about {
    display: flex;
    align-items: center;
    min-height: 100vh;
  }
}

.num {
  @include wh(500, 500);

  color: $red;
}
</style>
