<template lang="html">
  <div class="film-details" v-if="this.film">
    <img :src="require(`../assets/movies_img/${film.img}`)">
    <div class="film-details-text">
      <h2>{{film.title}} </h2>
      <p><span class="film-key">Genre: </span>{{film.genres.join(", ")}}  </p>
      <p><span class="film-key">Rating: </span>{{film.rating}}  </p>
      <p><span class="film-key">Release Date: </span>{{film.release_date | moment('DD MMM YYYY')}}  </p>
      <p><span class="film-key">Running time: </span>{{film.runtime}}   </p>
      <p><span class="film-key">Director: </span>{{film.crew.director}}   </p>
      <p v-if="this.film.crew.producers.length === 1"><span class="film-key">Producers: </span>{{film.crew.producers[0]}}   </p>
      <p v-if="this.film.crew.producers.length > 1"><span class="film-key">Producers: </span>{{film.crew.producers.join('/')}}   </p>
      <p><span class="film-key">Plot Summary: </span>{{film.plot_summary}}   </p>
    </div>

  </div>
</template>

<script>
import {eventBus} from '@/main.js';


export default {
  name: 'movie-detail',
  data() {
    return {
      film: null,
    }
  },
  mounted() {
    eventBus.$on('movie-selected', (movie) => {
      this.film = movie
    })
  },
  computed: {
    producerCheck: function(){
      return this.film.crew.producers.join('/')
    }
  }
}
</script>

<style lang="css" scoped>
/*
.film-card {
  background-color: #BFDBF7;
  border: 1px solid #BFDBF7;
  border-radius: 5px;
  padding: 20px;
  margin: 10px;
  width: 25vw;
}

.action-btn {
  background-color: #006989;
 border: none;
 color: white;
 padding: 15px 32px;
 text-align: center;
 text-decoration: none;
 display: inline-block;
 font-size: 16px;
 margin: 4px 2px;
 cursor: pointer;
}

.film-key {
  font-weight: bold;
  color: #3E363F
} */

img {
    max-width: 100%;
    border-radius: 4px;
}

 .film-details {
   display: grid;
   grid-auto-rows: minmax(100px, 1fr);
   grid-template-columns: minmax(175px, auto) minmax(175px, auto);
   grid-gap: 1em;

   /* border-style: solid; */
   border-radius: 4px;
   box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
   background-color: #2B2A34;
 }



 .film-key{
   color: GhostWhite;
 }
 p {
   color:#888;
 }

/* .film-details {
  display: flex;
} */

</style>
