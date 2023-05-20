import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  detail: [],
};

const detailSlice = createSlice({
  name: "detail",
  initialState,
  reducers: {
    getDetail: (state, action) => {
      state.detail = action.payload;
    },
  },
});

export const { getDetail } = detailSlice.actions;

export default detailSlice.reducer;
