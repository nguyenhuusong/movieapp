import { Fragment, useRef, useEffect, useState } from "react";
import classes from "./SearchResult.module.css";
import { useSelector, useDispatch } from "react-redux";
import { searchAction } from "../../store/search";
import SearchRow from "./SearchRow";

function SearchResult() {
  const dispatch = useDispatch();
  const searchRef = useRef();
  const searchResults = useSelector((state) => state.search.searResult);
  const searchRender = useSelector((state) => state.search.searchRender);
  const [colNum, setColNum] = useState();
  const [tempWidth, setTempWidth] = useState();
  const [width, setWidth] = useState();

  useEffect(() => {
    console.log(searchRef.current.offsetWidth - 15 - 64);

    setWidth(searchRef.current.offsetWidth - 15 - 64);
  }, []);

  useEffect(() => {
    if (searchResults) {
      window.addEventListener("resize", function () {
        const a = searchRef.current.offsetWidth - 64;
        const b = a / 160;
        const c = Math.floor((b % 1) * 10);
        setTempWidth(c);
      });
    }
  }, [searchResults]);

  useEffect(() => {
    if (tempWidth) {
      setWidth(searchRef.current.offsetWidth - 64);
    }
  }, [tempWidth]);

  useEffect(() => {
    if (width) {
      const numCol = Math.floor(width / 160);
      function cal(numCol) {
        for (let i = numCol; i > 0; i--) {
          if (width - i * 160 >= 16 * (i - 1)) {
            return i;
          }
        }
      }
      setColNum(cal(numCol));
    }
  }, [width]);

  useEffect(() => {
    if (searchResults && colNum) {
      dispatch(searchAction.replaceSearchRender(colNum));
    }
  }, [colNum, searchResults]);

  return (
    <div ref={searchRef} className={classes.searchResult}>
      <h2>Search Result</h2>
      {searchRender &&
        Object.keys(searchRender).map((el) => (
          <SearchRow key={el} id={el} row={searchRender[el]}></SearchRow>
        ))}
    </div>

    // <div ref={searchRef} className={classes.searchResult}>
    //   <h2>Search Result</h2>
    //   {searchResults && (
    //     <div className={classes.container}>
    //       {searchResults.map((el) => (
    //         <div
    //           key={el.id}
    //           className={classes.item}
    //           style={{
    //             backgroundImage: el.poster_path
    //               ? `url(https://image.tmdb.org/t/p/original${el.poster_path})`
    //               : `url(https://image.tmdb.org/t/p/original${el.backdrop_path})`,
    //           }}
    //         ></div>
    //       ))}
    //     </div>
    //   )}
    // </div>
  );
}
export default SearchResult;
