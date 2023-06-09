import { Fragment, useEffect, useRef } from "react";
import classes from "./SearchRow.module.css";
import SearchItem from "./SearchItem";
import { useSelector } from "react-redux";
import Detail from "../Detail";

function SearchRow({ id, row }) {
  const active = useSelector((state) => state.search.searchActive);
  console.log(active);
  const detail = useSelector((state) => state.detailMovie.movie);

  // console.log(detail);

  return (
    <Fragment>
      <div className={classes.row}>
        {row.map((el) => (
          <SearchItem key={el.id} movie={el} id={id} />
        ))}
      </div>
      {active[id] && <Detail />}
    </Fragment>
  );
}
export default SearchRow;
