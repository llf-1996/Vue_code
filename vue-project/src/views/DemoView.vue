<template>
  <div class="about">
    <h1>This is an demo page</h1>
    <button @click="change">{{ store.count }}</button>
  </div>
</template>

<script setup lang="ts">
import { storeToRefs } from 'pinia'

import { useCounterStore } from '@/stores/counter'
const store = useCounterStore()

// const { count } = storeToRefs(store)
// console.log(store)
function change() {
  store.increment()
}

</script>

<style>
@media (min-width: 1024px) {
  .about {
    min-height: 100vh;
    display: flex;
    align-items: center;
  }
}
</style>
