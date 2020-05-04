<template lang="html">
<div class="film-card">
  <img :src="require(`../assets/movies_img/${film.img}`)">

  <h2>{{film.title}} </h2>


  <div class="card-data">
    <p><span class="film-key">Genre: </span>{{film.genres.join(", ")}}  </p>
    <p><span class="film-key">Rating: </span>{{film.rating}}  </p>
    <p><span class="film-key">Release Date: </span>{{film.release_date | moment('DD MMM YYYY')}}  </p>
    <p><span class="film-key">Running time: </span>{{film.runtime}}   </p>
  </div>
  <div class="card-buttons">
    <button id="delete-button" type="button" class="action-btn" v-on:click="deleteFilm">Delete</button>
    <button id="select-button"  type="button" class="action-btn" v-on:click="selectFilm">Show Details</button>
  </div>
</div>
</template>

<script>
import MovieService from '@/services/MovieService.js'
import {eventBus} from '@/main.js';


export default {
  name: 'film-card',
  props: ['film'],
  methods: {
    deleteFilm: function(){
        MovieService.deleteMovie(this.film._id)
        .then(() => {eventBus.$emit('movie-deleted', this.film._id)})
      },

    selectFilm: function(){
      //TODO: Code film Selected Method
      eventBus.$emit('movie-selected', this.film)
    }
  }
}
</script>

<style lang="css" scoped>
 /* .film-card {
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

 .film-card {
   display: grid;
   /* border-style: solid; */
   border-radius: 4px;
   box-shadow: 5px 5px 10px rgba(0,0,0,0.5);
   grid-template-rows: auto 2.5em auto 1.5em;
   background-color: #2B2A34;
   position: relative;
   top: 0;
   transition: top ease 0.5s;
   /* padding-bottom: 1.5em */
 }
 .card-buttons {
   display: flex;
 }

#select-button {
  color: rgb(0, 153, 51);
  margin-left: auto;
  border-radius: 4px;
  background-color: rgb(25, 20, 20);
  border-color:  #2B2A34;

}

#delete-button {
  color:rgb(204, 0, 0);
  border-radius: 4px;
  background-color: rgb(25, 20, 20);
  border-color:  #2B2A34;
}

.film-key{
  color: GhostWhite;
}
p {
  color:#888;
}

.film-card:hover {
  -webkit-transform: translateY(-1.5%);
}


</style>
