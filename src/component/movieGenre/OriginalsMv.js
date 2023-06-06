import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function originalsMV() {
  const movie = useSelector((state) => state.movie.netFlixOriginals.movie);
  const isPoster = useSelector((state) => state.movie.netFlixOriginals.poster);

  const isSuccessLoad = useSelector(
    (state) => state.movie.netFlixOriginals.Loaded
  );
  return (
    <Fragment>
      {isSuccessLoad && (
        <MovieList movie={movie} poster={isPoster} genre={"netFlixOriginals"} />
      )}
    </Fragment>
  );
}
export default originalsMV;
