<template lang="html">
  <div v-if="this.film">
    <h2>{{film.title}} </h2>
    <p><span class="film-key">Genre: </span>{{film.genres.join(", ")}}  </p>
    <p><span class="film-key">Rating: </span>{{film.rating}}  </p>
    <p><span class="film-key">Release Date: </span>{{film.release_date}}  </p>
    <p><span class="film-key">Running time: </span>{{film.runtime}}   </p>
    <p><span class="film-key">Director: </span>{{film.crew.director}}   </p>
    <p v-if="this.film.crew.producers.length === 1"><span class="film-key">Producers: </span>{{film.crew.producers[0]}}   </p>
    <p v-if="this.film.crew.producers.length > 1"><span class="film-key">Producers: </span>{{film.crew.producers.join('/')}}   </p>
    <p><span class="film-key">Plot Summary: </span>{{film.plot_summary}}   </p>
    <img :src="require(`../assets/movies_img/${film.img}`)">

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
}
</style>
