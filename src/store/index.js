import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies";
import errorSlice from "./error";
import detailSlice from "./detail";
import detailMovieSlice from "./detailMovie";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    error: errorSlice.reducer,
    detail: detailSlice.reducer,
    detailMovie: detailMovieSlice.reducer,
  },
});
export default store;
