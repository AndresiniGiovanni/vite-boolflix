<template>
  <div class="media text-center">
    <h4>{{ item.original_title }}</h4>
    <div>{{ item.title }}</div>
    <div>{{ item.vote_average }}</div>
    <div>{{ item.original_language }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      availableFlag:[
        'de', 'en', 'es', 'fr', 'it'
      ]
    };
  },
};
</script>

<style lang="scss" scoped>
h4 {
  text-transform: capitalize;
}
img {
  width: 100%;
  box-shadow: 0 0 6px 3px rgba($color: #000000, $alpha: 0.15);
}
</style>
