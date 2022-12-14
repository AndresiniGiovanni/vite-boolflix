import { reactive } from "vue";

export const store = reactive({
  apiURL: "https://api.themoviedb.org/3/",
  endPoint: {
    movie: "search/movie",
    tv: "search/tv",
  },
  params: {
    api_key: "75c7248105c8709a75b2e86c5491b559",
    query: "",
    language: "it-IT",
  },
  movieList: [],
  tvList: [],
  
});
