<template>
  <div>
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
    answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit',
  },
]
</script>
