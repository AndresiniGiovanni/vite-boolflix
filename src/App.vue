<template>
  <section>
    <header>
      <HeaderComponent />
    </header>
    <main>
      <MainComponent :items="store.movieList" />
    </main>
  </section>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import CardsComponent from "./components/CardsComponent.vue";
import axios from "axios";
import { store } from "./store";

export default {
  components: { HeaderComponent, MainComponent, CardsComponent },
  data() {
    return {
      store
    };
  },
  watch: {
    "store.params.query"(newVal, oldVal) {
      if (newVal !== oldVal) {
        this.getMovie();
      }
    },
  },
  methods: {
    getMovie() {
      const apiurl = store.apiURL + store.endPoint;
      const params = store.params;
      axios.get(apiurl, { params }).then((res) => {
        store.movieList = res.data.results;
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>
