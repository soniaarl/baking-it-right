<template>
  <div :class="colour">
    <h2>{{ title }}</h2>
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

h2 {
  color: white;
  font-size: 54px;
  text-shadow: 3px 4px 4px #0000004f;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  -webkit-text-stroke: 0;
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
