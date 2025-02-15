<template>
  <nav class="PageNav">
    <ul>
      <li><a href="#cookies">Cookies</a></li>
      <li><a href="#about">About</a></li>
      <li><a href="#faq">FAQ</a></li>
      <li><a href="order">Order</a></li>
    </ul>
  </nav>
</template>

<style scoped>
.PageNav {
  position: sticky;
  top: 0;
  z-index: 99;
}
ul {
  display: flex;
  list-style: none;
  justify-content: right;
  background-color: #ffd3ee;
  /* background: linear-gradient(
    #ffd3ee 0%,
    #ffd3eede 66%,
    #ffd3eea4 90%,
    #ffd3eea6 90%,
    #ffd3ee28 100%
  ); */
  padding: 15px 25px 20px 0px;
}

a {
  text-decoration: none;
  padding-left: 28px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 3px #00000030;
  transition: ease-in 100ms;
  cursor: pointer;
}

a:hover {
  /* transform: scale(1.02); */
  text-shadow: 2px 4px 3px #00000030;
}
</style>
