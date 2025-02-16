<template>
  <div class="CookieCard">
    <img :src="image" :alt="alt" />
    <div class="copy">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  image: {
    type: String,
    default: 'Title',
  },
  alt: {
    type: String,
    default: 'Alt',
  },
  name: {
    type: String,
    default: 'Name',
  },
  description: {
    type: String,
    default: 'Description',
  },
})
</script>

<style scoped>
.CookieCard {
  display: flex;
}

img {
  max-width: 140px;
  margin-right: 18px;
  width: 40%;
  height: fit-content;
}

.copy {
  margin: auto;
}
</style>
