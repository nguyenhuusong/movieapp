import { configureStore } from "@reduxjs/toolkit";
import movieSlice from "./movies";
import errorSlice from "./error";
import detailSlice from "./description";

const store = configureStore({
  reducer: {
    movie: movieSlice.reducer,
    error: errorSlice.reducer,
    detail: detailSlice.reducer,
  },
});
export default store;
