<template>
  <div :class="colour">
    <h1>{{ title }}</h1>
  </div>
</template>

<script setup lang="ts">
defineProps({
  title: {
    type: String,
    default: 'Title',
  },
  colour: {
    type: String,
    default: 'Colour',
  },
})
</script>

<style scoped>
div {
  height: 224px;
  position: relative;
  margin-bottom: 50px;
}

h1 {
  color: white;
  font-size: 54px;
  text-transform: uppercase;
  text-shadow: 3px 4px 4px #00000035;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.blue {
  background-color: #aadcff;
}

.pink {
  background-color: #ffd3ee;
}

.yellow {
  background-color: #feef81;
}
</style>
