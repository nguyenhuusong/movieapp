import classes from "./MovieList.module.css";
import MovieItem from "./MovieItem";
import { useSelector } from "react-redux";
import Detail from "./Detail";

function MovieList({ movie, poster, genre }) {
  const detailState = useSelector((state) => state.detail);
  let detail;
  switch (genre) {
    case "trending":
      detail = detailState.trending;
      break;
    case "netFlixOriginals":
      detail = detailState.netFlixOriginals;
      break;
    case "topRated":
      detail = detailState.topRated;
      break;
    case "action":
      detail = detailState.action;
      break;
    case "comedy":
      detail = detailState.comedy;
      break;
    case "horror":
      detail = detailState.horror;
      break;
    case "romance":
      detail = detailState.romance;
      break;
    case "documentaries":
      detail = detailState.documentaries;
      break;
  }

  return (
    <div className={classes.container}>
      <div className={classes.list}>
        {movie.map((el) => (
          <MovieItem key={el.id} movie={el} poster={poster} genre={genre} />
        ))}
      </div>
      {detail && <Detail />}
    </div>
  );
}
export default MovieList;
