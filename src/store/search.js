import { createSlice } from "@reduxjs/toolkit";

const searchSlice = createSlice({
  name: "search",
  initialState: {
    searResult: null,
    searchRender: null,
    searchActive: null,
  },
  reducers: {
    replaceSearchResult(state, action) {
      state.searResult = action.payload;
    },
    replaceSearchRender(state, action) {
      let render = {};
      let active = {};
      const colNum = action.payload;
      const range = Math.floor(state.searResult.length / colNum);
      for (let i = 0; i < range; i++) {
        const start = i * colNum;
        const end = (i + 1) * colNum;
        render[`id` + i] = state.searResult.slice(start, end);
        active["id" + i] = false;
      }
      const start = range * colNum;
      const end = state.searResult.length;
      render[`id` + range] = state.searResult.slice(start, end);
      active["id" + range] = false;

      state.searchRender = render;
      state.searchActive = active;
    },
    searchActive(state, action) {
      console.log("aa");

      Object.keys(state.searchActive).forEach(
        (el) => (state.searchActive[el] = false)
      );
      state.searchActive[action.payload] = true;
    },
    searchActiveOff(state) {
      Object.keys(state.searchActive).forEach(
        (el) => (state.searchActive[el] = false)
      );
    },
  },
});
export const searchAction = searchSlice.actions;
export default searchSlice;
