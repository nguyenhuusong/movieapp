import classes from "./SearchItem.module.css";
import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { searchAction } from "../../store/search";
import { DetailMovieAction } from "../../store/detailMovie";

function SearchItem({ movie, id }) {
  const dispatch = useDispatch();

  const detailMovie = useSelector((state) => state.detailMovie.movie);

  function onClickHandler() {
    dispatch(searchAction.searchActive(id));

    if (detailMovie?.id === movie.id) {
      dispatch(searchAction.searchActiveOff());
      dispatch(DetailMovieAction.replaceMovie(null));
    } else {
      dispatch(DetailMovieAction.replaceMovie(movie));
    }
  }

  return (
    <Link onClick={onClickHandler} className={classes.item}>
      <img
        src={`${
          movie.poster_path
            ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
            : `https://image.tmdb.org/t/p/original${movie.backdrop_path}`
        }`}
      />
    </Link>
  );
}
export default SearchItem;
