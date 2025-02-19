<template>
  <div class="container">
    <div class="faq wrap" v-for="question in questions" :key="question.question">
      <QuestionCard :question="question.question" :answer="question.answer" />
    </div>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '../parts/QuestionCard.vue'

const questions = [
  {
    question: 'What do the cookies taste like?',
    answer: 'Delicious',
  },
  {
    question: 'Can I mix and match?',
    answer: 'Yes, you can pick up to 2 flavours for half a dozen and up to 4 flavours for a dozen.',
  },

  {
    question: 'how quickly can i get my cookies?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    question: 'do you take custom orders?',
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
  {
    question: 'what if i have allergies?',
    answer:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit',
  },
]
</script>

<style scoped>
.container {
  max-width: 1000px;
  margin: auto;
}

@media (min-width: 600px) {
  .wrap {
    padding: 0 50px;
  }
}

@media (min-width: 1500px) {
  .wrap {
    padding: 20px;
  }
  .container {
    max-width: 1500px;
  }
}
</style>
