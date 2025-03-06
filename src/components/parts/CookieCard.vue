<template>
  <div class="CookieCard">
    <img
      @click="playSound"
      :class="isAnimating ? 'animate' : 'shake'"
      :src="image"
      :alt="alt"
      @animationend="onAnimationEnd"
    />
    <h3 v-if="coming" class="white coming-soon">coming soon!</h3>
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
  coming: {
    type: Boolean,
    default: false,
  },
})
</script>

<style scoped>
.CookieCard {
  display: flex;
  position: relative;
}

.coming-soon {
  position: absolute;
  top: 30%;
  left: 1%;
}

@media (min-width: 600px) {
  .coming-soon {
    top: 25%;
    left: 2.5vw;
    font-size: 24px;
  }
}

p {
  margin-bottom: 0;
}

img {
  max-width: 140px;
  margin-right: 18px;
  margin-bottom: 5px;
  width: 40%;
  height: fit-content;
  cursor: pointer;
  animation: float 2s infinite;
}

.shake:hover {
  animation: shake 0.7s ease infinite;
}

.shake:focus {
  animation: none;
}

.animate {
  animation: eat 0.5s ease;
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

  img {
    margin-right: 0;
    max-width: 180px;
    width: 100%;
  }

  .coming-soon {
    top: 25%;
    left: 50%;
    font-size: 32px;
    transform: translateX(-50%);
  }
}

@keyframes float {
  0% {
    transform: translateY(4px);
  }
  50% {
    transform: translateY(0px);
  }
  100% {
    transform: translateY(4px);
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
  }
}

@keyframes eat {
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
