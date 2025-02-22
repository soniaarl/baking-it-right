<template>
  <div class="container">
    <SectionTitle class="SectionTitle" title="order" colour="pink" />
    <div class="content wrap">
      <p>Order details:</p>
      <ul>
        <li>No custom flavours</li>
        <li>Minimum order of 6 cookies</li>
        <li>One week notice preferred</li>
      </ul>

      <p>
        To place an order, please fill out the order form and I will get back to you as soon as I
        can!
      </p>

      <OrderButton class="OrderButton" />

      <p>
        Still have questions? Check out the <a href="#faq" class="link">FAQ section</a> for more
        details.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../parts/SectionTitle.vue'
import OrderButton from '../parts/OrderButton.vue'
</script>

<style scoped>
.content {
  /* text-align: center; */
}

p {
  margin-bottom: 20px;
}

ul {
  margin-bottom: 20px;
  padding-left: 25px;
  list-style: inherit;
}

li {
  line-height: 1.5em;
}

.OrderButton:deep(a) {
  margin-bottom: 20px;
}

@media (min-width: 1000px) {
  .container {
    display: flex;
    flex-direction: row-reverse;
  }

  .SectionTitle {
    width: 50%;
    height: 585px;
    margin: 0;
  }

  .content {
    width: 50%;
    margin: auto;
    padding: 0 30px;
    max-width: 500px;
  }
}

@media (min-width: 2000px) {
  .content {
    margin: auto 120px auto 0;
    padding: 0 !important;
  }

  /* .SectionTitle:deep(h2) {
    right: 60%;
    left: inherit;
    transform: translate(50%, -50%);
  } */
}
</style>
