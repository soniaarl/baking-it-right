<template>
  <div class="qa">
    <img src="/icon-images/milk.png" alt="Glass of milk" />
    <div class="copy">
      <h3>{{ question }}</h3>
      <p>{{ answer }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
defineProps({
  question: {
    type: String,
    default: 'question',
  },
  answer: {
    type: String,
    default: 'answer',
  },
})
</script>

<style scoped>
img {
  width: 36px;
  height: fit-content;
}

.qa {
  display: flex;
  margin-bottom: 30px;
  max-width: 800px;
}

h3 {
  line-height: 1.1em;
  margin-bottom: 5px;
  text-transform: lowercase;
}

.copy {
  margin-left: 15px;
}
</style>
