<template>
  <div class="wrap">
    <h2 class="shadow">Ready to order?</h2>
    <p>
      If you would like to place an order, please fill out the order form and I will get back to you
      as soon as I can! If you have more questions, feel free to reach out to me on instagram.
    </p>
    <OrderButton />
  </div>
</template>

<script setup lang="ts">
import OrderButton from '../parts/OrderButton.vue'
</script>

<style scoped>
h2 {
  color: white;
  margin-bottom: 10px;
}
p {
  margin: 5px 0 25px 0;
  max-width: 700px;
}

.wrap {
  max-width: 1000px;
  margin: auto;
}

@media (min-width: 600px) {
  .wrap {
    padding: 0 50px;
  }
}

@media (min-width: 1500px) {
  .wrap {
    padding: 20px;
    max-width: 1500px;
  }
}
</style>
