<template>
  <div class="CookieCard">
    <img
      @click="playSound"
      :class="{ animate: isAnimating }"
      :src="image"
      :alt="alt"
      @animationend="onAnimationEnd"
    />
    <div class="copy">
      <h3>{{ name }}</h3>
      <p>{{ description }}</p>
    </div>
  </div>
</template>

<script setup lang="ts">
import soundFile from '@/assets/bite-noise.mp3'
import { ref } from 'vue'

const playSound = () => {
  const audio = new Audio(soundFile)
  audio.play()
  isAnimating.value = true
}

const isAnimating = ref(false)

function onAnimationEnd() {
  isAnimating.value = false
}

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
  cursor: pointer;
}

.animate {
  animation: shake 0.5s ease;
}

.copy {
  margin: auto 0;
}

@media (min-width: 950px) {
  .CookieCard {
    display: block;
    text-align: center;
    max-width: 265px;
  }
}

@keyframes shake {
  0% {
    transform: translate(1px, 1px) rotate(0deg);
  }
  10% {
    transform: translate(-1px, -2px) rotate(-1deg);
  }
  20% {
    transform: translate(-3px, 0px) rotate(1deg);
  }
  30% {
    transform: translate(3px, 2px) rotate(0deg);
  }
  40% {
    transform: translate(1px, -1px) rotate(1deg);
  }
  50% {
    transform: translate(-1px, 2px) rotate(-1deg);
    opacity: 1;
  }
  60% {
    transform: translate(-3px, 1px) rotate(0deg);
  }
  70% {
    transform: translate(3px, 1px) rotate(-1deg);
  }
  80% {
    transform: translate(-1px, -1px) rotate(1deg);
  }
  90% {
    transform: translate(1px, 2px) rotate(0deg);
  }
  100% {
    transform: translate(1px, -2px) rotate(-1deg);
    opacity: 0;
  }
}
</style>
