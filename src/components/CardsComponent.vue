<template>
  <div class="media text-center">
    <img
      :src="
        item.poster_path
          ? imgPath + item.poster_path
          : 'https://via.placeholder.com/342x500'
      "
      alt="item.title || item.name"
    />
    <h4>{{ item.original_title || item.original_name }}</h4>
    <div>{{ item.title || item.name }}</div>
    <div>
      <span
        class="fa-star"
        :class="n <= star ? 'fa-solid' : 'fa-regular'"
        v-for="n in 5"
      ></span>
    </div>
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
  computed: {
    star() {
      return Math.ceil(this.item.vote_average / 2);
    },
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
