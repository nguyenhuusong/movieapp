import { Fragment } from "react";
import MovieList from "../MovieList";
import { useSelector } from "react-redux";

function Horor() {
  const movie = useSelector((state) => state.movie.horror.movie);
  const isPoster = useSelector((state) => state.movie.horror.poster);

  const isSuccessLoad = useSelector((state) => state.movie.horror.Loaded);
  return (
    <Fragment>
      {isSuccessLoad && (
        <MovieList movie={movie} poster={isPoster} genre={"horror"} />
      )}
    </Fragment>
  );
}
export default Horor;
