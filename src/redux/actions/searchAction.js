import axios from "axios";
import { toast } from "react-toastify";
import { setSearch } from "../reducers/searchReducer";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const searchMovies = (query) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseUrl}/search/movie?api_key=${apiKey}&query=${query}&include_adult=false`
    );
    dispatch(setSearch(response.data.results));
  } catch (error) {
    if (axios.isAxiosError(error)) {
      toast.error(error.response.data.message);
      return;
    }
    toast.error(error.message);
  }
};
