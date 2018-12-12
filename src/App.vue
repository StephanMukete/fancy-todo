<template>
  <div id="app">
    <nav>
      <router-link to="/">Home</router-link>
      <router-link to="/about">About</router-link>
    </nav>

    <router-view />
  </div>
</template>

<script>
import Skills from './components/Skills.vue'
export default {
  name: 'skills',
  components: {
    Skills
  }
}
</script>

<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');
body {
  background-image: url('./assets/img/bg4.jpg');
  font-family: 'Montserrat', sans-serif;
  display: grid;
  grid-template-rows: auto;
  justify-items: center;
  padding-top: 20px;
}
body, html {
  margin: 0;
  height: 100%;
  width: 100%;
}
#app {
    width: 80%;
    height: 80%;
    margin: 50px;
    margin-top: 0px;
    
}
nav {
  padding: 20px 20px 20px 0;
}
nav a {
  padding: 10px;
  text-decoration: none;
  background: #fff;
  border-radius: 3px;
  color: SandyBrown;
  font-weight: bold;
  margin-right: 10px;
}
</style>