<template>
  <section>
    <HeaderComponent />
    <MainComponent />
    <CardsComponent />
  </section>
</template>

<script>
import HeaderComponent from "./components/HeaderComponent.vue";
import MainComponent from "./components/MainComponent.vue";
import CardsComponent from "./components/CardsComponent.vue";

export default {
  components: { HeaderComponent, MainComponent, CardsComponent },
};
</script>

<style lang="scss" scoped></style>
