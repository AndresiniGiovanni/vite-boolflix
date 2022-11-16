<template>
  <div class="d-flex align-items-center">
    <div class="input-group input-group-md">
      <form action="" class="d-flex" @submit.prevent="searchMovies">
        <input
          type="text"
          class="form-control"
          placeholder="Titoli, Persone, Generi"
          v-model.trim="searchMovie.title"
          @keyup.enter="searchMovie"
        />
        <button class="btn btn-primary ms-1">Search</button>
      </form>
    </div>

    <span class="ms-5 me-4">
      <a href=""><i class="fa-regular fa-bell"></i></a>
    </span>
  </div>
</template>

<script>
import { store } from "../store.js";
export default {
  name: "SearchBarComponent",
  data() {
    return {
      store,
      searchMovie: {
        title: "",
        original_title: "",
        original_language: "",
      },
    };
  },
  methods: {
    searchMovies() {
      console.log(this.searchMovie);
      console.log(this.searchMovies);
      const searchMovie = { ...this.searchMovie };
      store.params = { ...searchMovie };
      store.getMovie();
      console.log(store.movieList);
    },
  },
};
</script>

<style lang="scss" scoped></style>
