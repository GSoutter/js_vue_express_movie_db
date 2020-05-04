<template lang="html">
  <div class="film-wrapper">
    <film-grid-item v-for="(film, index) in films" :key="index" :film="film" />
  </div>
</template>

<script>
import FilmGridItem from './FilmGridItem'
import MovieService from '@/services/MovieService.js'
import {eventBus} from '@/main.js';


export default {
  data(){
    return {
      films: []
    };
  },
  mounted(){
    MovieService.getMovies()
    .then(movies => this.films = movies)

    eventBus.$on('movie-deleted', (id => {
      const index = this.films.findIndex(film => film._id == id)
      this.films.splice(index, 1)
      })
    )
  },
  components: {
    'film-grid-item': FilmGridItem
  }
}
</script>

<style lang="css" scoped>
/*
.film-wrapper {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
} */

.film-wrapper {
  display: grid;
  grid-auto-rows: minmax(100px, auto);
  grid-template-columns: repeat(auto-fill, minmax(175px, 1fr));
  /* grid-auto-rows: 70px; */
  grid-gap: 2em;
  margin: 2%;
  /* border-style: solid; */

}

</style>
