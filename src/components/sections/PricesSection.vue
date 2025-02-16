<template>
  <div>
    <SectionTitle title="prices" colour="blue" />
    <div class="half-dozen">
      <h2>1/2 dozen</h2>
      <img src="../../../cookies-images/half-dozen.png" alt="Half a dozen cookies" />
      <h2><span class="luckiest">$</span>21</h2>
    </div>
    <div class="one-dozen">
      <h2>1 dozen</h2>
      <img src="../../../cookies-images/one-dozen.png" alt="One dozen cookies" />
      <h2><span class="luckiest">$</span>36</h2>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../parts/SectionTitle.vue'
</script>

<style scoped>
div {
  text-align: center;
}

h2 {
  position: relative;
  display: block;
  width: fit-content;
  margin: auto;
}
.luckiest {
  position: absolute;
  top: -6px;
  left: -27px;
}

.half-dozen {
  margin-bottom: 50px;
}

.half-dozen img {
  width: 130px;
  margin-top: 10px;
  margin-bottom: 20px;
}

.one-dozen img {
  width: 245px;
  margin-top: 10px;
  margin-bottom: 20px;
}
</style>
