import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  searchResults: [],
  error: null,
};

const searchSlice = createSlice({
  name: "search",
  initialState,
  reducers: {
    setSearchResults: (state, action) => {
      state.searchResults = action.payload;
    },
    setError: (state, action) => {
      state.error = action.payload;
    },
  },
});

export const { setSearchResults, setError } = searchSlice.actions;
export default searchSlice.reducer;
