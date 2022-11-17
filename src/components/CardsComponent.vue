<template>
  <div class="media text-center">
    <img :src="imgPath + item.poster_path" alt="item.title" />
    <h4>{{ item.original_title }}</h4>
    <div>{{ item.title }}</div>
    <div>{{ item.vote_average }}</div>
    <div class="flag" v-if="availableFlag.includes(item.original_language)">
      <img
        :src="'/images/' + item.original_language + '.png'"
        :alt="item.original_language"
      />
    </div>
    <div v-else>{{ item.original_language }}</div>
  </div>
</template>

<script>
export default {
  props: {
    item: Object,
  },
  data() {
    return {
      availableFlag: ["de", "en", "es", "fr", "it"],
      imgPath: "https://image.tmdb.org/t/p/w342",
    };
  },
};
</script>

<style lang="scss" scoped>
h4 {
  text-transform: capitalize;
}
.flag {
  img {
    width: 50px;
  }
}
img {
  width: 60%;
  box-shadow: 0 0 6px 3px rgba($color: #000000, $alpha: 0.15);
}
</style>
