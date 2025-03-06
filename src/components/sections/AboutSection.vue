<template>
  <div class="container">
    <SectionTitle class="SectionTitle" title="about" colour="yellow" />
    <div class="wrap">
      <p>
        Ever since I was a kid, baking has played a huge role in my life. It was my first hobby, a
        way of satisfying my sweet tooth, and a stress reliever all in one. It was so ingrained in
        my life that it eventually became one of my love languages. One of the best feelings is
        seeing someone's face light up when they're eating something you've baked.
      </p>
      <p>
        Baking It Right is a way for me to share that joy with others in the form of a cookie.
        Whether you're feeling adventurous or just craving something sweet, I've got you covered.
        These cookies are crispy, chewy, salty, and not too sweet. They're everything you'd want in
        a cookie, without being over the top.
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../parts/SectionTitle.vue'
</script>

<style scoped>
p {
  margin-bottom: 15px;
}

.wrap {
  max-width: 700px;
  margin: auto;
}

@media (min-width: 1000px) {
  .container {
    display: flex;
  }

  .SectionTitle {
    width: 50%;
    height: 585px;
    margin: 0;
  }

  .wrap {
    width: 50%;
    max-width: 500px;
  }
}

@media (min-width: 2000px) {
  .wrap {
    justify-content: left;
    padding-left: 150px;
  }
}
</style>
