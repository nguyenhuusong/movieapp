import { Link } from "react-router-dom";
import classes from "./MovieItem.module.css";
import { useDispatch, useSelector } from "react-redux";
import { DetailAction } from "../store/detail";
import { DetailMovieAction } from "../store/detailMovie";

function MovieItem({ movie, poster, genre }) {
  const dispatch = useDispatch();
  const detailMovie = useSelector((state) => state.detailMovie.movie);

  function onClickHandler() {
    switch (genre) {
      case "trending":
        dispatch(DetailAction.DetailTrending());
        break;
      case "netFlixOriginals":
        dispatch(DetailAction.DetailNetflixOriginals());
        break;
      case "topRated":
        dispatch(DetailAction.DetailTopRated());
        break;
      case "action":
        dispatch(DetailAction.DetailAction());
        break;
      case "comedy":
        dispatch(DetailAction.DetailComdy());
        break;
      case "horror":
        dispatch(DetailAction.DetailHorror());
        break;
      case "romance":
        dispatch(DetailAction.DetailRomance());
        break;
      case "documentaries":
        dispatch(DetailAction.DetailDocumentaries());
        break;
    }
    if (detailMovie?.id === movie.id) {
      console.log("aa");
      dispatch(DetailAction.DetailOff());
      dispatch(DetailMovieAction.replaceMovie(null));
    } else {
      dispatch(DetailMovieAction.replaceMovie(movie));
    }
  }

  return (
    <Link
      onClick={onClickHandler}
      href="#"
      className={`${classes.listItem} ${!poster && classes.backdrop}`}
      style={{
        backgroundImage: poster
          ? `url(https://image.tmdb.org/t/p/original${movie.poster_path})`
          : `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`,
      }}
    ></Link>
  );
}
export default MovieItem;
