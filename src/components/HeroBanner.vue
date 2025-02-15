<template>
  <div>
    <h1 class="hero-text">Baking It Right</h1>
    <img src="./icons/cookie.png" alt="" />
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
