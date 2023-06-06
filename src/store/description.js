import { createSlice } from "@reduxjs/toolkit";

const detailSlice = createSlice({
  name: "Detail",
  initialState: {
    trending: false,
    netFlixOriginals: false,
    topRated: false,
    action: false,
    comedy: false,
    horror: false,
    romance: false,
    documentaries: false,
  },
  reducers: {
    DetailTrending(state) {
      state.trending = true;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = false;
      state.comedy = false;
      state.horror = false;
      state.romance = false;
      state.documentaries = true;
    },
    DetailNetflixOriginals(state) {
      state.trending = false;
      state.netFlixOriginals = true;
      state.topRated = false;
      state.action = false;
      state.comedy = false;
      state.horror = false;
      state.romance = false;
      state.documentaries = false;
    },
    DetailTopRated(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = true;
      state.action = false;
      state.comedy = false;
      state.horror = false;
      state.romance = false;
      state.documentaries = false;
    },
    DetailAction(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = true;
      state.comedy = false;
      state.horror = false;
      state.romance = false;
      state.documentaries = false;
    },
    DetailComdy(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = false;
      state.comedy = true;
      state.horror = false;
      state.romance = false;
      state.documentaries = false;
    },
    DetailHorror(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = false;
      state.comedy = false;
      state.horror = true;
      state.romance = false;
      state.documentaries = false;
    },
    DetailRomance(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = false;
      state.comedy = false;
      state.horror = false;
      state.romance = true;
      state.documentaries = false;
    },
    DetailDocumentaries(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = false;
      state.comedy = false;
      state.horror = false;
      state.romance = false;
      state.documentaries = true;
    },
    DetailOff(state) {
      state.trending = false;
      state.netFlixOriginals = false;
      state.topRated = false;
      state.action = false;
      state.comedy = false;
      state.horror = false;
      state.romance = false;
      state.documentaries = false;
    },
  },
});
export default detailSlice;
export const DetailAction = detailSlice.actions;
