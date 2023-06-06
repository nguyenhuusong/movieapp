import { Fragment, useEffect, useState } from "react";
import classes from "./Banner.module.css";
import { useSelector } from "react-redux";

function Banner() {
  const oriMV = useSelector((state) => state.movie.netFlixOriginals.movie);

  const [randomNum, setRandomNum] = useState(1);
  useEffect(() => {
    setTimeout(() => {
      let random1 = Math.floor(Math.random() * oriMV.length);
      if (random1 === randomNum) {
        if (random1 >= oriMV.length - 3) {
          random1 -= 3;
        } else {
          random1 += 1;
        }
      }

      setRandomNum(random1);
    }, 5000);
  }, [randomNum]);

  const isSuccessLoad = useSelector(
    (state) => state.movie.netFlixOriginals.Loaded
  );

  return (
    <Fragment>
      {isSuccessLoad && (
        <div
          className={classes.banner}
          style={{
            backgroundImage: oriMV[randomNum].backdrop_path
              ? `url(https://image.tmdb.org/t/p/original${oriMV[randomNum].backdrop_path})`
              : `url(https://image.tmdb.org/t/p/original${
                  oriMV[randomNum + 1].backdrop_path
                })`,
          }}
        >
          <div className={classes.descript}>
            <div>
              <h1>{oriMV[randomNum].name}</h1>
            </div>
            <div>
              <button>Play</button>
              <button>My list</button>
            </div>
            <div className={classes.overview}>{oriMV[randomNum].overview}</div>
          </div>
        </div>
      )}
    </Fragment>
  );
}
export default Banner;
