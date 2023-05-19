// import moviesAPI from "../../movie.api";
import axios from "axios";
import { getMovies } from "../reducers/movieReducers";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const fetchMovies = () => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/popular?page=1&api_key=${apiKey}`
    );
    dispatch(getMovies(response.data.results));
  } catch (err) {
    console.log(err);
  }
};
