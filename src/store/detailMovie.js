import { createSlice } from "@reduxjs/toolkit";

const detailMovieSlice = createSlice({
  name: "detailMovie",
  initialState: {
    movie: null,
  },
  reducers: {
    replaceMovie(state, action) {
      state.movie = action.payload;
    },
  },
});
export default detailMovieSlice;
export const DetailMovieAction = detailMovieSlice.actions;
