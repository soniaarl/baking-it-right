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
    <CookieBreak />
    <div id="faq"></div>
    <section class="faq"><FaqSection /></section>
    <section><ReadySection /></section>
    <footer class="wrap">
      <div class="socials">
        <img class="instagram" src="../icon-images/instagram.png" alt="Instagram Logo" />
        <a href="https://www.instagram.com/bakingitright.yvr/">@bakingitirght.yvr</a>
      </div>
    </footer>
  </div>
</template>

<script setup lang="ts">
import PageNav from './components/PageNav.vue'
import HeroBanner from './components/HeroBanner.vue'
import CookiesSection from './components/sections/CookiesSection.vue'
import PricesSection from './components/sections/PricesSection.vue'
import OrderSection from './components/sections/OrderSection.vue'
import AboutSection from './components/sections/AboutSection.vue'
import CookieBreak from './components/sections/CookieBreak.vue'
import FaqSection from './components/sections/FaqSection.vue'
import ReadySection from './components/sections/ReadySection.vue'
</script>

<style scoped>
#faq {
  height: 30px;
}

.instagram {
  width: 48px;
  height: 48px;
}

.socials {
  display: flex;
}

.socials a {
  margin: auto 15px auto 15px;
}

footer {
  padding-top: 20px;
  margin-bottom: 80px;
}
</style>
