<template>
  <div class="container">
    <SectionTitle class="SectionTitle" title="about" colour="yellow" />
    <div class="wrap">
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut
        labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco
        laboris
      </p>
    </div>
  </div>
</template>

<script setup lang="ts">
import SectionTitle from '../parts/SectionTitle.vue'
</script>

<style scoped>
p {
  text-align: center;
}

@media (min-width: 1000px) {
  .container {
    display: flex;
  }

  .SectionTitle {
    width: 50%;
    height: 585px;
    margin: 0;
  }

  .wrap {
    width: 50%;
    margin: auto;
  }
}

@media (min-width: 2000px) {
  .wrap {
    justify-content: left;
    padding-left: 150px;
  }

  .SectionTitle:deep(h2) {
    left: 60%;
  }
}
</style>
