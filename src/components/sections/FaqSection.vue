<template>
  <div>
    <div class="cookie-break">
      <h2 class="break">Cookie Break..</h2>
      <h2 class="title">I have some questions</h2>
      <img
        class="cookie cookie-01"
        src="../../../icon-images/cookie-image.png"
        alt="Chocolate chip cookie"
      />
      <img
        class="cookie cookie-02"
        src="../../../icon-images/cookie-image.png"
        alt="Chocolate chip cookie"
      />
      <img
        class="cookie cookie-03"
        src="../../../icon-images/cookie-image.png"
        alt="Chocolate chip cookie"
      />
      <img
        class="cookie cookie-04"
        src="../../../icon-images/cookie-image.png"
        alt="Chocolate chip cookie"
      />
    </div>
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

<style scoped>
.cookie-break {
  position: relative;
  height: 445px;
  overflow-x: hidden;
  overflow-y: auto;
}

.cookie {
  width: 120px;
  position: absolute;
}

.break,
.title {
  position: absolute;
  text-shadow: 0px 4px 4px #00000035;
}

.title {
  color: white;
  bottom: 5%;
  left: 50%;
  width: 100%;
  text-align: center;
  transform: translateX(-50%);
  z-index: 2;
}

.break {
  top: 30%;
  left: 15%;
  z-index: 2;
}

.cookie-01 {
  top: 0;
  left: 50%;
}

.cookie-02 {
  top: 25%;
  left: -10%;
}

.cookie-03 {
  top: 50%;
  right: -7%;
}

.cookie-04 {
  bottom: 10%;
  left: 5%;
}
.faq {
  margin-top: 30px;
}
</style>
