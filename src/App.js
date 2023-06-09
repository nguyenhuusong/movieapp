import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import Root from "./pages/Root";
import { useDispatch } from "react-redux";
import { action as searchAction } from "./component/search/Form";
import Error from "./component/Error";

import {
  fetchTreMovie,
  fetchNetflixMovie,
  fetchTopRatedMovie,
  fetchActionMovie,
  fetchComdyMovie,
  fetchHorrorMovie,
  fetchRomanceMovie,
  fetchDocumentariesMovie,
} from "./store/movies";

const router = createBrowserRouter(
  [
    {
      path: "/",
      element: <Root />,
      errorElement: <Error />,
      children: [
        { index: true, element: <Browse /> },
        { path: "/search", element: <Search />, action: searchAction },
      ],
    },
  ],
  { basename: "/movieapp" }
);

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchTreMovie());
    dispatch(fetchNetflixMovie());
    dispatch(fetchTopRatedMovie());
    dispatch(fetchActionMovie());
    dispatch(fetchComdyMovie());
    dispatch(fetchHorrorMovie());
    dispatch(fetchRomanceMovie());
    dispatch(fetchDocumentariesMovie());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
