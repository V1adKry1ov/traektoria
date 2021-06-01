<template>
  <div id="app">
    <div class="navbar">
      <div class="logo">
        <img src="./assets/logo.png" alt="Logo" class="pic" />
      </div>
      <router-link to="/">
        <h2 class="navbar__title">Home</h2>
      </router-link>
    </div>
    <div class="wrapper">
      <router-view />
    </div>
  </div>
</template>

<style>
html {
}
body {
  background: #f2f2f2;
}
.wrapper {
  max-width: 1400px;
  margin: 0 auto;
}
.navbar {
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 10px 30px;
  background: white;
  box-shadow: 0 30px 30px rgb(0, 0, 0, 0.1);
  margin-bottom: 50px;
}
.navbar__title {
  color: #333333;
  font-size: 30px;
  font-weight: 600;
  cursor: pointer;
  color: #4343aa;
}
.logo {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.pic {
  width: 80px;
}
</style>
