import { useSelector } from "react-redux";
import { Fragment } from "react";
import MovieList from "../MovieList";

function TopRated() {
  const movie = useSelector((state) => state.movie.topRated.movie);
  const isLoaded = useSelector((state) => state.movie.topRated.Loaded);
  const isPoster = useSelector((state) => state.movie.topRated.poster);

  return (
    <Fragment>
      {isLoaded && (
        <div>
          <MovieList movie={movie} poster={isPoster} genre={"topRated"} />
        </div>
      )}
    </Fragment>
  );
}
export default TopRated;
