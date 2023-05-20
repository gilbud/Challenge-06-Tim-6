import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";
import { getDetail } from "../reducers/detailReducer";

const apiKey = process.env.REACT_APP_APIKEY;
const baseUrl = process.env.REACT_APP_BASEURL;

export const detailMovies = (id) => async (dispatch) => {
  try {
    const response = await axios.get(
      `${baseUrl}/movie/${id}?api_key=${apiKey}&language=en-US`
    );
    console.log(response);
    dispatch(getDetail(response.data));
  } catch (err) {
    console.log(err);
  }
};
