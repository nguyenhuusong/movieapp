import { useSelector } from "react-redux";
import classes from "./Detail.module.css";
import { Fragment, useEffect, useState } from "react";

function Detail() {
  const [valiSiteState, setValidSiteState] = useState(false);
  const [trailerState, setTrailerState] = useState(false);
  const [teaserState, setTeaserState] = useState(false);
  const movie = useSelector((state) => state.detailMovie.movie);
  console.log(movie);

  useEffect(() => {
    if (movie) {
      async function fetTrailer() {
        const response = await fetch(
          `https://api.themoviedb.org/3/movie/${movie.id}/videos?api_key=04319bae7ae40f1d7098f3b5a19be0d2`
        );
        if (!response.ok) throw new Error();
        const data = await response.json();

        if (data.results.length !== 0) {
          const valiSite = data.results.filter((el) => el.site === "YouTube");
          console.log(valiSite);

          setValidSiteState(true);
          console.log("aa");

          const trailerVd = valiSite.find((el) => el.type === "Trailer");
          setTrailerState(trailerVd);
          if (!trailerVd) {
            const teaserVd = valiSite.find((el) => el.type === "Teaser");
            setTeaserState(teaserVd);
          }
        } else {
          setValidSiteState(null);
          setTrailerState(null);
          setTeaserState(null);
        }
      }
      fetTrailer().catch((err) => {
        setValidSiteState(null);
        setTrailerState(null);
        setTeaserState(null);
      });
    }
  }, [movie]);

  console.log(valiSiteState);

  return (
    <Fragment>
      {movie && (
        <div className={classes.container}>
          <div className={classes.description}>
            <h1 className={classes.title}>{`${
              movie.name ? movie.name : movie.original_title
            }`}</h1>
            <div className={classes.detail}>
              <p>Release Date: {movie.first_air_date}</p>
              <p>Vote: {movie.vote_average}/10</p>
            </div>
            <div>{movie.overview}</div>
          </div>
          {(!valiSiteState || (!trailerState && !teaserState)) && (
            <div
              className={classes.poster}
              style={{
                backgroundImage: movie.backdrop_path
                  ? `url(https://image.tmdb.org/t/p/original${movie.backdrop_path})`
                  : `url(https://image.tmdb.org/t/p/original${movie.poster_path})`,
              }}
            ></div>
          )}
          {valiSiteState && (trailerState || teaserState) && (
            <iframe
              className={classes.trailer}
              src={`https://www.youtube.com/embed/${
                trailerState ? trailerState.key : teaserState.key
              }`}
              title="YouTube video player"
              frameBorder="0"
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowFullScreen
            ></iframe>
          )}
        </div>
      )}
    </Fragment>
  );
}
export default Detail;
