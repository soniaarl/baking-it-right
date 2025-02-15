<script setup lang="ts">
import PageNav from './components/PageNav.vue'
import HeroBanner from './components/HeroBanner.vue'
import CookiesSection from './components/sections/CookiesSection.vue'
</script>

<template>
  <div>
    <PageNav />
    <HeroBanner />

    <div class="box"></div>
    <section class="cookies" id="cookies">
      <CookiesSection />
    </section>
  </div>
</template>

<style scoped>
.box {
  /* height: 3000px; */
}
</style>
