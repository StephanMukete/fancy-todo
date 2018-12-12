<template>
  <div class="about">
      <img src="../assets/img/about.png" alt="">
    <h1>About this app..</h1>
    <p> This app is actually my first app in <strong>vue</strong>. I developed a strong interest to learn vue
     after realising how powerful it is and also how similar it is to <strong>react</strong> which i already know </p>
    <p>Basically what this app does is enable me to keep a record of my <strong>skills</strong>. It's actually a very 
    basic app but i still think it's a good starting point to develop my skills in vue </p>
    <p>I was able to implement concepts like <i>Interpolation</i>,<i>routing</i>,<i>Linting</i>... just to name a few.</p>
    <p>While I enjoy using plain  <strong>Css</strong> media queries to make simple sites like this <i>responsive</i>,
    <!-- I decided to go with <strong>bootstrap</strong> on this one just to try implementing it on vue</p> -->
    <!-- <p>Learning vue has actually been quite exciting for me. I am currently working on a much bigger project that is going to cover a lot more concepts in vue</p> -->
    <p></p>
    <p></p>
    
  </div>
</template>

<script>
export default {
  name: 'About',
  data() {
    return {
      their_name: this.$route.params.name
    }
  }
}
</script>
<style>
@import url('https://fonts.googleapis.com/css?family=Montserrat:400,700');


.about {
    background: white;
    float: left;
    height:  100%;
    padding: 10px
}
img{
    height: 200px;
    width: 200px;
    padding: 20px;
    float: left;
}

</style>