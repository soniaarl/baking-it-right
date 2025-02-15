<script setup lang="ts">
import PageNav from './components/PageNav.vue'
import HeroBanner from './components/HeroBanner.vue'
</script>

<template>
  <div>
    <PageNav />
    <HeroBanner />

    <div class="box"></div>
    <h2 class="cookies" id="cookies">Cookies</h2>
  </div>
</template>

<style scoped>
.box {
  height: 3000px;
}
</style>
