<template>
  <div class="container">
    <!-- <div class="faq wrap" v-for="question in questions" :key="question.question">
      <QuestionCard :question="question.question" :answer="question.answer" />
    </div> -->

    <SanityFetcher query="*[_type == 'faq']">
      <template v-slot="{ data, loading, error }">
        <div v-if="loading">Loading...</div>
        <div v-else-if="error">Error: {{ error.message }}</div>
        <div v-else>
          <div class="faq wrap">
            <div v-for="faq in data" :key="faq._id">
              <QuestionCard :question="faq.question" :answer="faq.answer[0].children[0].text" />
            </div>
          </div>
        </div>
      </template>
    </SanityFetcher>
  </div>
</template>

<script setup lang="ts">
import QuestionCard from '../parts/QuestionCard.vue'

// const questions = [
//   {
//     question: 'What do the cookies taste like?',
//     answer:
//       'These cookies are crisp on the edges, chewy on the inside, and full of flavour. All our cookies made with brown butter and topped with flaky salt to give it depth and balance',
//   },
//   {
//     question: 'Can I pick multiple flavours?',
//     answer: 'Yes, you can pick up to 2 flavours for half a dozen and up to 4 flavours for a dozen.',
//   },

//   {
//     question: 'do you deliver?',
//     answer:
//       'At the moment, I am mainly taking pickup orders with the exception of some deliveries (at an extra charge) in Burnaby and Richmond. However, delivery is not guaranteed and will have to be discussed/coordinated during the ordering process.',
//   },

//   {
//     question: 'what if i have allergies?',
//     answer:
//       'Unfortunately, I cannot accommodate dietary restrictions nor guarantee that my cookies are allergen free. Here are the base ingredients: flour, brown sugar, white sugar, butter, eggs, milk, salt, baking powder, and baking soda.',
//   },
// ]
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
