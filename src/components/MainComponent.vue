<template>
  <section class="container-fluid p-5">
    <h2>{{ title }}</h2>

    <div class="row">
      <div
        class="col-12 col-sm-6 col-md-3 col-lg-3 mb-5 mt-3"
        v-for="(item, index) in items"
        :key="item.id"
      >
        <CardsComponent :item="item" />
      </div>
    </div>
  </section>
</template>

<script>
import CardsComponent from "./CardsComponent.vue";

export default {
  name: "MainComponent",
  props: {
    items: Array,
    title: String,
  },
  components: {
    CardsComponent,
  },
  data() {
    return {};
  },
};
</script>

<style lang="scss" scoped>
section {
  overflow: hidden;
  .row {
    overflow-x: scroll;
    flex-wrap: nowrap;
    scroll-behavior: smooth;
  }
}
h2 {
  text-transform: capitalize;
}
</style>
