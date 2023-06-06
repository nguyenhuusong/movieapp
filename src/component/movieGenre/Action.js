import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function Action() {
  const movie = useSelector((state) => state.movie.action.movie);
  const isPoster = useSelector((state) => state.movie.action.poster);

  const isSuccessLoad = useSelector((state) => state.movie.action.Loaded);
  return (
    <Fragment>
      {isSuccessLoad && (
        <MovieList movie={movie} poster={isPoster} genre={"action"} />
      )}
    </Fragment>
  );
}
export default Action;
