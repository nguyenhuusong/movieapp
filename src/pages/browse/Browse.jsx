import React, { Fragment, useEffect, useState } from "react";
import classes from "./Browse.module.css";
import Error from "../../component/Error";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../component/Banner";
import OriginalsMV from "../../component/movieGenre/OriginalsMv";
import Trending from "../../component/movieGenre/Trending";
import TopRated from "../../component/movieGenre/TopRated";
import Action from "../../component/movieGenre/Action";
import Comdy from "../../component/movieGenre/Comdy";
import Horor from "../../component/movieGenre/Horor";
import Romance from "../../component/movieGenre/Romance";
import Documentaries from "../../component/movieGenre/Documentaries";
import Detail from "../../component/Detail";

function Browse() {
  const dispatch = useDispatch();
  const isError = useSelector((state) => state.error.isError);

  return (
    <Fragment>
      {isError && <Error />}
      {!isError && (
        <>
          <Banner />
          <OriginalsMV />
          <h2 className={classes.title}>Xu hướng</h2>
          <Trending />
          <h2 className={classes.title}>Xếp hạng cao</h2>
          <TopRated />
          <h2 className={classes.title}>Hành động</h2>
          <Action />
          <h2 className={classes.title}>Hài</h2>
          <Comdy />
          <h2 className={classes.title}>Kinh dị</h2>
          <Horor />
          <h2 className={classes.title}>Lãng mạn</h2>
          <Romance />
          <h2 className={classes.title}>Tài liệu</h2>
          <Documentaries />
        </>
      )}
    </Fragment>
  );
}

export default Browse;
