<template>
  <div>
    <h2 class="text-stroke">COOKIES</h2>
    <!-- <h2>COOKIES</h2> -->

    <ul>
      <li v-for="cookie in cookies" :key="cookie.name">
        <CookieCard
          :image="cookie.image"
          :alt="cookie.alt"
          :name="cookie.name"
          :description="cookie.description"
        />
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import CookieCard from '@/components/parts/CookieCard.vue'

const cookies = [
  {
    image: './public/cookies-images/chocolate-chunk.png',
    alt: 'Chocolate chunk cookie',
    name: 'Chocolate Chunk',
    description: 'dark chocolate mixed into our brown butter dough, topped with flaky salt',
  },
  {
    image: './public/cookies-images/gochujang.png',
    alt: 'Gochujang',
    name: 'gochujang',
    description: 'our base cookie recipe topped with a gochujang dulce de leche for a mild kick',
  },
  {
    image: './public/cookies-images/egg-yolk.png',
    alt: 'Salted egg yolk cookie',
    name: 'salted egg yolk',
    description: 'mixed into the dough and sprinkled on top for a rich, umami cookie',
  },
  {
    image: './public/cookies-images/pineapple.png',
    alt: 'Pineapple bun cookie',
    name: 'pineapple bun',
    description: 'our base cookie recipe with a buttery, flaky cookie topping',
  },
  {
    image: './public/cookies-images/hojicha.png',
    alt: 'Hojicha cookie',
    name: 'hojicha',
    description: 'a deep hojicha cookie topped with caramelized white chocolate',
  },
  {
    image: './public/cookies-images/pb-miso.png',
    alt: 'Peanut butter miso cookie',
    name: 'peanut butter miso',
    description: 'a twist on a classic makes this cookie a perfect balance of salty and sweet',
  },
]
</script>

<style scoped>
h2 {
  color: white;
  text-shadow: 3px 4px 4px #00000035;
  margin: 50px auto;
  text-align: center;
}
ul {
  list-style: none;
  padding: 0 15px;
}

li {
  margin-bottom: 33px;
}
</style>
