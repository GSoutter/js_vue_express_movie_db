<template>
  <section>
    <movie-header />
    <movie-detail />
    <films-grid />
  </section>
</template>

<script>
import FilmsGrid from '@/components/FilmsGrid';
import MovieHeader from '@/components/MovieHeader';
import MovieDetail from '@/components/MovieDetail';

export default {
  name: 'app',
  components: {
    'films-grid': FilmsGrid,
    'movie-header': MovieHeader,
    'movie-detail': MovieDetail,
  }
}
</script>

<style>

body {
  font-family: 'Source Serif Pro', serif;

  background-color: #E1E5F2;
  background-position: center;
  width: 100%;
  margin: 0 auto;
  color: #1F7A8C;
}

h1, h2, h3 {
  color: #022B3A;
  font-family: 'Skranji', cursive;
}
</style>
