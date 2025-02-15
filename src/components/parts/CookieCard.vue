<template>
  <div class="CookieCard">
    <img :src="props.image" :alt="props.alt" />
    <h3>{{ props.name }}</h3>
    <p>{{ props.description }}</p>
  </div>
</template>

<script setup lang="ts">
import { defineProps } from 'vue'

interface CookieProps {
  image: string
  alt: string
  name: string
  description: string
}

const props = defineProps<CookieProps>()
</script>
