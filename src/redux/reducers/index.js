import { combineReducers } from "@reduxjs/toolkit";
import movieReducers from "./movieReducers";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";
import detailReducer from "./detailReducer";

export default combineReducers({
  movies: movieReducers,
  auth: authReducer,
  search: searchReducer,
  detail: detailReducer,
});
