import { createSlice } from "@reduxjs/toolkit";

const errorSlice = createSlice({
  name: "error",
  initialState: {
    isError: false,
  },
  reducers: {
    errorMessage(state, action) {
      state.isError = action.payload;
    },
  },
});
export const errorAction = errorSlice.actions;
export default errorSlice;
