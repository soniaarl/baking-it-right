<template>
  <div>
    <SectionTitle title="order" colour="pink" />
    <div class="content wrap">
      <p>
        To place an order, please fill out the order form and I will get back to you as soon as I
        can!
      </p>
      <OrderButton class="OrderButton" />
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../parts/SectionTitle.vue'
import OrderButton from '../parts/OrderButton.vue'
</script>

<style scoped>
.content {
  text-align: center;
}

p {
  margin-bottom: 25px;
}

.OrderButton {
  margin: auto;
}
</style>
