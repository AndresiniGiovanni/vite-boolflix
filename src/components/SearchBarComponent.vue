<template>
  <div class="d-flex align-items-center">
    <div class="input-group input-group-md">
      <form action="" class="d-flex mt-3" @submit.prevent="search">
        <input
          type="text"
          class="form-control"
          placeholder="Titoli, Persone, Generi"
          v-model.trim="text"
          @keyup.enter="searchMovie"
        />
        <button class="btn btn-danger ms-1">Cerca</button>
      </form>
    </div>

    <span class="ms-4 me-4 mt-3">
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
      text: "",
    };
  },
  methods: {
    search() {
      console.log(this.text);
      store.params.query = this.text;
    },
  },
};
</script>

<style lang="scss" scoped>
a {
  color: white;
  font-size: 22px;
}
</style>
