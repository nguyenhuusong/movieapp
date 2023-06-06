import { useSelector } from "react-redux";
import { Fragment } from "react";
import MovieList from "../MovieList";

function Trending() {
  const movie = useSelector((state) => state.movie.trending.movie);
  const isLoaded = useSelector((state) => state.movie.trending.Loaded);
  const isPoster = useSelector((state) => state.movie.trending.poster);

  return (
    <Fragment>
      {isLoaded && (
        <div>
          <MovieList movie={movie} poster={isPoster} genre={"trending"} />
        </div>
      )}
    </Fragment>
  );
}
export default Trending;
