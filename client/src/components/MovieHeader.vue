<template lang="html">
  <div class="header">
      <img :src="require('../assets/popcorn.jpg')" alt="">
      <h1>Movies List</h1>

    <p>A movie and CSS Grid Experiment</p>
  </div>
</template>

<script>
export default {
  name: 'movie-header'
}
</script>

<style lang="css" scoped>

/* $background: #222129;
$card: #2B2A34;
$spotify-green: rgb(30, 215, 96);
$spotify-black: rgb(25, 20, 20); */

/* .header {
  max-height: 100px;
  width: 100vw;
  padding: 30px;
  text-align: center;
  background: #1F7A8C;
  color: white;
  font-size: 30px;
  background-size: contain;
  background-repeat: no-repeat;
  border-bottom: solid black 1px
} */

.header {
  display: flex;
  /* justify-content: space-between; */
  align-items: center;
  background-color: rgb(25, 20, 20);
  font-size: 24px;

}

img {
  max-height: 100%;
  max-width: 100%;
  clip-path: circle(50%)
}

p {
  margin-left: auto;
  color: rgba(white, 0.65);
  margin-right: 1em;
  font-size: 18px;

}




</style>
