<template>
  <div
    class="media text-center position-relative card my-card border-0 w-75 bg-transparent"
  >
    <img
      class="poster w-100"
      :src="
        item.poster_path
          ? imgPath + item.poster_path
          : 'https://via.placeholder.com/342x500'
      "
      alt="item.title || item.name"
    />
    <h4 class="position-absolute original-title">
      {{ item.original_title || item.original_name }}
    </h4>
    <div class="position-absolute mytitle">{{ item.title || item.name }}</div>
    <div class="position-absolute mystar">
      <span
        class="fa-star"
        :class="n <= star ? 'fa-solid' : 'fa-regular'"
        v-for="n in 5"
      ></span>
    </div>
    <div
      class="flag position-absolute"
      v-if="availableFlag.includes(item.original_language)"
    >
      <img
        :src="'/images/' + item.original_language + '.png'"
        :alt="item.original_language"
      />
    </div>
    <div class="position-absolute flag" v-else>
      {{ item.original_language }}
    </div>
    <div class="position-absolute overview">{{ item.overview }}</div>
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

.my-card {
  color: white;
  overflow-y: scroll;
  border-radius: 20px;

  .original-title {
    top: 2rem;
    font-size: 23px;
    font-weight: 600;
  }
  .mytitle {
    top: 7rem;
  }
  .flag {
    top: 11.5rem;

    img {
      width: 30px;
    }
  }
  .mystar {
    top: 14rem;
    left: 0rem;
  }
  .original-title,
  .mytitle,
  .flag,
  .overview,
  .mystar {
    display: none;
  }
  .overview {
    font-size: 11px;
    bottom: 5px;
    font-weight: 600;
    text-align: left;
    line-height: 0.7rem;
  }
}

.my-card:hover {
  transition: 0.5s;
  .poster {
    transition: 1s;
    filter: blur(10px);
  }

  .original-title,
  .mytitle,
  .flag,
  .overview,
  .mystar {
    display: block;
  }
}
img {
  width: 60%;
  box-shadow: 0 0 6px 3px rgba($color: #000000, $alpha: 0.15);
}
</style>
