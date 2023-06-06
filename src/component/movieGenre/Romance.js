import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function Romance() {
  const movie = useSelector((state) => state.movie.romance.movie);
  const isPoster = useSelector((state) => state.movie.romance.poster);

  const isSuccessLoad = useSelector((state) => state.movie.romance.Loaded);
  return (
    <Fragment>
      {isSuccessLoad && (
        <MovieList movie={movie} poster={isPoster} genre={"romance"} />
      )}
    </Fragment>
  );
}
export default Romance;
