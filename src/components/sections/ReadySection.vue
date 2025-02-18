<template>
  <div class="wrap">
    <h2 class="shadow">Ready to order?</h2>
    <p>Please fill out the order form and I will get back to you as soon as I can!</p>
    <OrderButton />
  </div>
</template>

<script setup lang="ts">
import OrderButton from '../parts/OrderButton.vue'
</script>

<style scoped>
h2 {
  color: white;
}
p {
  margin: 5px 0 20px 0;
}

.wrap {
  max-width: 1500px;
  margin: auto;
}
</style>
