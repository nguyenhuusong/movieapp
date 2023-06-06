import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function Comdy() {
  const movie = useSelector((state) => state.movie.comedy.movie);

  const isPoster = useSelector((state) => state.movie.comedy.poster);

  const isSuccessLoad = useSelector((state) => state.movie.comedy.Loaded);
  return (
    <Fragment>
      {isSuccessLoad && (
        <MovieList movie={movie} poster={isPoster} genre={"comedy"} />
      )}
    </Fragment>
  );
}
export default Comdy;
