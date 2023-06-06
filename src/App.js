import React, { useEffect } from "react";
import { createBrowserRouter, RouterProvider } from "react-router-dom";
import Browse from "./pages/browse/Browse";
import Search from "./pages/search/Search";
import Root from "./pages/Root";
import { useDispatch } from "react-redux";
import { fetchOriMV } from "./store/originalsMv";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      { index: true, element: <Browse /> },
      { path: "/search", element: <Search /> },
    ],
  },
]);
let initial = true;

function App() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchOriMV());
  }, [dispatch]);
  return <RouterProvider router={router} />;
}

export default App;
