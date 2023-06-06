import { createSlice, configureStore } from "@reduxjs/toolkit";
import { requests } from "./API";
import { errorAction } from "./error";

const originalsMV = createSlice({
  name: "originalsMV",
  initialState: {
    movie: [],
    isSuccessLoad: false,
  },
  reducers: {
    repalceMV(state, action) {
      state.movie = action.payload.results;
    },
    successLoad(state, action) {
      state.isSuccessLoad = true;
    },
  },
});
export const oriMVAction = originalsMV.actions;
export default originalsMV;

export const fetchOriMV = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(oriMVAction.repalceMV(data));
      dispatch(oriMVAction.successLoad());
      dispatch(errorAction.errorMessage(false));
    } catch (err) {
      dispatch(errorAction.errorMessage(true));
    }
  };
};
