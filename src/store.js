import axios from "axios";
import { reactive } from "vue";

export const store = reactive({
  apiURL:
    "https://api.themoviedb.org/3/search/movie?api_key=e99307154c6dfb0b4750f6603256716d&query=a",
  endPoint: "",
  movieList: [],
  searchMovie: [],
  params: {},

  getMovie() {
    const params = { ...this.params };
    axios.get(this.apiURL + this.endPoint, { params }).then(
        (res) => {
            this.movieList = res.data.results;
        }
    );
  },
});
