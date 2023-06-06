import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function originalsMV() {
  const oriMV = useSelector((state) => state.oriMV.movie);
  console.log(oriMV);

  const isSuccessLoad = useSelector((state) => state.oriMV.isSuccessLoad);
  return <Fragment>{isSuccessLoad && <MovieList oriMV={oriMV} />}</Fragment>;
}
export default originalsMV;
