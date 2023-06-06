import classes from "./MovieList.module.css";
import MovieItem from "./MovieItem";

function MovieList({ movie, poster, genre }) {
  return (
    <div className={classes.list}>
      {movie.map((el) => (
        <MovieItem key={el.id} movie={el} poster={poster} genre={genre} />
      ))}
    </div>
  );
}
export default MovieList;
