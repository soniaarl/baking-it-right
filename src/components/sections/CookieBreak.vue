<template>
  <div class="cookie-break">
    <h2 class="break">Cookie Break..</h2>
    <h2 class="title">I have some questions</h2>
    <img class="cookie cookie-01" src="/icon-images/cookie-image.png" alt="Chocolate chip cookie" />
    <img class="cookie cookie-02" src="/icon-images/cookie-image.png" alt="Chocolate chip cookie" />
    <img class="cookie cookie-03" src="/icon-images/cookie-image.png" alt="Chocolate chip cookie" />
    <img class="cookie cookie-04" src="/icon-images/cookie-image.png" alt="Chocolate chip cookie" />
  </div>
</template>

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
  max-width: 1000px;
}

@media (min-width: 550px) {
  .cookie-break .break {
    left: 50%;
    transform: translateX(-50%);
  }
}

@media (min-width: 700px) {
  .title {
    text-align: left;
    padding-left: 50px;
    margin: auto;
  }
}

@media (min-width: 1500px) {
  .title {
    max-width: 1500px;
    padding-left: 20px;
  }
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

@media (min-width: 1000px) {
  .cookie-02,
  .cookie-03,
  .cookie-04 {
    display: none;
  }

  .cookie-01 {
    max-width: 115px;
    left: 15%;
    top: -10%;
    z-index: 2;
  }

  .cookie-break {
    background-image: url('/cookie-break-desktop.png');
    height: 500px;
    background-repeat: no-repeat;
    background-size: contain;
    background-position: center;
    overflow: visible;
  }
}
</style>
