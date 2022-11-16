<template>
  <section id="header" class="d-flex justify-content-between">
    <h1>Netflix logo</h1>
    <SearchBarComponent />
  </section>
</template>

<script>
import SearchBarComponent from "./SearchBarComponent.vue";

export default { components: { SearchBarComponent } };
</script>

<style lang="scss" scoped>
@use "../assets/styles/partials/variables" as *;

#header {
  width: 100%;
  position: fixed;

  h1 {
    color: $netflixred;
  }
  select {
    width: 100%;
  }

  a {
    color: black;
    font-size: 22px;
  }
}
</style>
