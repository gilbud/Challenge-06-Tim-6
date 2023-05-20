import { createSlice } from "@reduxjs/toolkit";

const initialState = {
  token: localStorage.getItem("token") || null,
  isLoggedIn: !!localStorage.getItem("token"),
  user: null,
};

const authSlicer = createSlice({
  name: "auth",
  initialState,
  reducers: {
    setToken: (state, action) => {
      if (action.payload) {
        localStorage.setItem("token", action.payload);
      } else {
        localStorage.removeItem("token");
      }
      state.token = action.payload;
    },
    setIsLoggedIn: (state, action) => {state.isLoggedIn = action.payload;},
    setUSer: (state, action) => {state.user = action.payload;},
  },
});

export const { setToken, setIsLoggedIn, setUSer } = authSlicer.actions;
export default authSlicer.reducer;
