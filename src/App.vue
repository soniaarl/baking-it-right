<template>
  <div>
    <PageNav />
    <HeroBanner />

    <section class="cookies" id="cookies">
      <CookiesSection />
    </section>

    <section class="prices" id="prices"><PricesSection /></section>
    <section class="order" id="order"><OrderSection /></section>
    <section class="about" id="about"><AboutSection /></section>
    <section class="faq" id="faq"><FaqSection /></section>
  </div>
</template>

<script setup lang="ts">
import PageNav from './components/PageNav.vue'
import HeroBanner from './components/HeroBanner.vue'
import CookiesSection from './components/sections/CookiesSection.vue'
import PricesSection from './components/sections/PricesSection.vue'
import OrderSection from './components/sections/OrderSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import FaqSection from './components/sections/FaqSection.vue'
</script>

<style scoped></style>
