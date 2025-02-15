<template>
  <nav class="PageNav">
    <ul>
      <li><a href="#cookies">Cookies</a></li>
      <li>About</li>
      <li>FAQ</li>
      <li>Order</li>
    </ul>
  </nav>
</template>

<style scoped>
.PageNav {
  position: sticky;
  top: 0;
  z-index: 99;
}
a {
  text-decoration: none;
}
ul {
  display: flex;
  list-style: none;
  justify-content: right;
  background: linear-gradient(
    #ffd3ee 0%,
    #ffd3eede 66%,
    #ffd3eea4 90%,
    #ffd3eea6 90%,
    #ffd3ee28 100%
  );
  padding: 15px 50px 20px 0px;
}

a,
li {
  padding-left: 28px;
  font-size: 24px;
  font-weight: 700;
  color: white;
  text-shadow: 2px 2px 3px #00000030;
  transition: ease-in 200ms;
  cursor: pointer;
}

li:hover {
  transform: scale(1.04);
}
</style>
