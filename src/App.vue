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
    <section class="ReadySection"><ReadySection /></section>
    <footer class="wrap">
      <div class="socials">
        <img class="instagram" src="/icon-images/instagram.png" alt="Instagram Logo" />
        <a
          data-aos="fade-in"
          class="instagram-link"
          href="https://www.instagram.com/bakingitright.yvr/"
          >@bakingitirght.yvr</a
        >
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

@media (min-width: 1500px) {
  .faq {
    margin-bottom: 0px;
  }
  .ReadySection {
    margin-top: 0;
  }
}

section.faq {
  margin-top: 0;
}

.instagram {
  width: 48px;
  height: 48px;
}
a.instagram-link {
  transition: ease 0.2s;
}
a.instagram-link:hover {
  text-shadow: 0px 4px 4px #00000035;
}

.socials {
  display: flex;
}

.socials a {
  margin: auto 15px auto 15px;
}

footer {
  padding-top: 20px;
  margin: 0 auto 80px auto;
  max-width: 1000px;
}

@media (min-width: 600px) {
  footer {
    padding-left: 50px;
  }
}

@media (min-width: 1000px) {
  .prices,
  .order,
  .about {
    margin: 0;
  }
}

@media (min-width: 1500px) {
  footer {
    max-width: 1500px;
    padding-left: 20px;
  }
}
</style>
