import React, { Fragment, useEffect, useState } from "react";
import classes from "./Browse.module.css";
import Error from "../../component/Error";
import { useDispatch, useSelector } from "react-redux";
import Banner from "../../component/Banner";
import OriginalsMV from "../../component/movieGenre/OriginalsMv";

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
          <Trending />
        </>
      )}
    </Fragment>
  );
}

export default Browse;
