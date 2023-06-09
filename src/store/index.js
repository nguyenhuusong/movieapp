import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies";
import errorSlice from "./error";
import detailSlice from "./detail";
import detailMovieSlice from "./detailMovie";
import searchSlice from "./search";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    error: errorSlice.reducer,
    detail: detailSlice.reducer,
    detailMovie: detailMovieSlice.reducer,
    search: searchSlice.reducer,
  },
});
export default store;
