import { Fragment, useState } from "react";
import classes from "./Banner.module.css";
import { useSelector } from "react-redux";

function Banner() {
  const oriMV = useSelector((state) => state.oriMV.movie);
  const isSuccessLoad = useSelector((state) => state.oriMV.isSuccessLoad);
  const randomNum = Math.floor(Math.random() * oriMV.length);
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
