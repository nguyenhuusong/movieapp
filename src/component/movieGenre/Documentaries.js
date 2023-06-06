import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function Documentaries() {
  const movie = useSelector((state) => state.movie.documentaries.movie);
  const isPoster = useSelector((state) => state.movie.documentaries.poster);

  const isSuccessLoad = useSelector(
    (state) => state.movie.documentaries.Loaded
  );
  return (
    <Fragment>
      {isSuccessLoad && (
        <MovieList movie={movie} poster={isPoster} genre={"documentaries"} />
      )}
    </Fragment>
  );
}
export default Documentaries;
