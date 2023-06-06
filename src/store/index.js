import { configureStore } from "@reduxjs/toolkit";
import originalsMvSlice from "./originalsMv";
import errorSlice from "./error";

const store = configureStore({
  reducer: { oriMV: originalsMvSlice.reducer, error: errorSlice.reducer },
});
export default store;
