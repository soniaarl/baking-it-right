<template>
  <div class="parallax">
    <h1 class="hero-text">Baking It Right</h1>
  </div>
</template>

<style scoped>
div {
  background-color: #ffd3ee;
  width: 100%;
  height: 660px;
  position: relative;
  margin-top: -70px;
}

.parallax {
  /* The image used */
  background-image: url('../mobile-background.png');

  /* Set a specific height */
  min-height: 600px;

  /* Create the parallax scrolling effect */
  background-attachment: fixed;
  background-repeat: no-repeat;
  background-size: 100vw;
}

.hero-text {
  text-transform: uppercase;
  font-size: 64px;
  color: white;
  text-shadow: 3px 4px 4px #00000025;
  text-align: center;
  position: absolute;
  left: 50%;
  top: 40%;
  transform: translateX(-50%);
  width: 100%;
}

@media (min-width: 800px) {
  .hero-text {
    font-size: 96px;
  }
}
</style>
