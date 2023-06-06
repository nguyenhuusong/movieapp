import { createSlice } from "@reduxjs/toolkit";
const API_KEY = "04319bae7ae40f1d7098f3b5a19be0d2";
export const requests = {
  fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
  fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_network=123`,
  fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
  fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
  fetchComedyMovies: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
  fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
  fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
  fetchDocumentaries: `/discover/movie?api_key=${API_KEY}&with_genres=99`,
  fetchSearch: `/search/movie?api_key=${API_KEY}&language=en-US`,
};

const movieSlice = createSlice({
  name: "originalsMV",
  initialState: {
    trending: { movie: [], Loaded: false, poster: false },
    netFlixOriginals: { movie: [], Loaded: false, poster: true },
    topRated: { movie: [], Loaded: false, poster: false },
    action: { movie: [], Loaded: false, poster: false },
    comedy: { movie: [], Loaded: false, poster: false },
    horror: { movie: [], Loaded: false, poster: false },
    romance: { movie: [], Loaded: false, poster: false },
    documentaries: { movie: [], Loaded: false, poster: false },
  },
  reducers: {
    replaceTrending(state, action) {
      state.trending.movie = action.payload.results;
    },
    LoadedTrending(state, action) {
      state.trending.Loaded = action.payload;
    },
    replaceNetFlixOriginals(state, action) {
      state.netFlixOriginals.movie = action.payload.results;
    },
    LoadedNetFlixOriginals(state, action) {
      state.netFlixOriginals.Loaded = action.payload;
    },
    replaceTopRated(state, action) {
      state.topRated.movie = action.payload.results;
    },
    LoadedTopRated(state, action) {
      state.topRated.Loaded = action.payload;
    },
    replaceAction(state, action) {
      state.action.movie = action.payload.results;
    },
    LoadedAction(state, action) {
      state.action.Loaded = action.payload;
    },
    replaceComedy(state, action) {
      state.comedy.movie = action.payload.results;
    },
    LoadedComedy(state, action) {
      state.comedy.Loaded = action.payload;
    },
    replaceHorror(state, action) {
      state.horror.movie = action.payload.results;
    },
    LoadedHorror(state, action) {
      state.horror.Loaded = action.payload;
    },
    replaceRomance(state, action) {
      state.romance.movie = action.payload.results;
    },
    LoadedRomance(state, action) {
      state.romance.Loaded = action.payload;
    },
    replaceDocumentaries(state, action) {
      state.documentaries.movie = action.payload.results;
    },
    LoadedDocumentaries(state, action) {
      state.documentaries.Loaded = action.payload;
    },
  },
});
export const movieAction = movieSlice.actions;
export default movieSlice;

export const fetchTreMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchTrending}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      console.log(data);

      dispatch(movieAction.replaceTrending(data));
      dispatch(movieAction.LoadedTrending(true));
    } catch (err) {
      dispatch(movieAction.LoadedTrending(false));
    }
  };
};
export const fetchNetflixMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchNetflixOriginals}`
      );

      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceNetFlixOriginals(data));
      dispatch(movieAction.LoadedNetFlixOriginals(true));
    } catch (err) {
      dispatch(movieAction.LoadedNetFlixOriginals(false));
    }
  };
};
export const fetchTopRatedMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchTopRated}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceTopRated(data));
      dispatch(movieAction.LoadedTopRated(true));
    } catch (err) {
      dispatch(movieAction.LoadedTopRated(false));
    }
  };
};
export const fetchActionMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchActionMovies}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceAction(data));
      dispatch(movieAction.LoadedAction(true));
    } catch (err) {
      dispatch(movieAction.LoadedAction(false));
    }
  };
};
export const fetchComdyMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchComedyMovies}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceComedy(data));
      dispatch(movieAction.LoadedComedy(true));
    } catch (err) {
      dispatch(movieAction.LoadedComedy(false));
    }
  };
};
export const fetchHorrorMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchHorrorMovies}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceHorror(data));
      dispatch(movieAction.LoadedHorror(true));
    } catch (err) {
      dispatch(movieAction.LoadedHorror(false));
    }
  };
};
export const fetchRomanceMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchRomanceMovies}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceRomance(data));
      dispatch(movieAction.LoadedRomance(true));
    } catch (err) {
      dispatch(movieAction.LoadedRomance(false));
    }
  };
};
export const fetchDocumentariesMovie = () => {
  return async (dispatch) => {
    try {
      const response = await fetch(
        `https://api.themoviedb.org/3/${requests.fetchDocumentaries}`
      );
      if (!response.ok) throw new Error();
      const data = await response.json();
      dispatch(movieAction.replaceDocumentaries(data));
      dispatch(movieAction.LoadedDocumentaries(true));
    } catch (err) {
      dispatch(movieAction.LoadedDocumentaries(false));
    }
  };
};
