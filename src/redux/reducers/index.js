import { combineReducers } from "@reduxjs/toolkit";
import movieReducers from "./movieReducers";
import authReducer from "./authReducer";
import searchReducer from "./searchReducer";

export default combineReducers({
  movies: movieReducers,
  auth: authReducer,
  search: searchReducer,
});
