import { useEffect, useState } from "react";
import classes from "./Form.module.css";
import { Form, json, useActionData } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { searchAction } from "../../store/search";

function SearchForm() {
  const dispatch = useDispatch();
  const data = useActionData();

  const [isError, setIsError] = useState(false);
  useEffect(() => {
    if (!data) {
      return;
    }
    if (data.results.length === 0) {
      setIsError(true);
    } else {
      dispatch(searchAction.replaceSearchResult(data.results));
      setIsError(false);
    }
  }, [data]);

  return (
    <div className={classes.container}>
      <Form method="post">
        <label>
          <input type="text" name="query" required></input>
          <i className="fa-solid fa-magnifying-glass fa-xl"></i>
        </label>
        <div className={`${classes.action} ${!isError && classes.floatRight}`}>
          {isError && (
            <div className={classes.alert}>
              no resultls, please enter another name
            </div>
          )}
          <div className={classes.btn}>
            <button className={classes.resetBtn} type="button">
              RESET
            </button>
            <button className={classes.searchBtn}>SEARCH</button>
          </div>
        </div>
      </Form>
    </div>
  );
}
export default SearchForm;

export async function action({ request }) {
  const data = await request.formData();

  const query = data.get("query");
  const response = await fetch(
    `https://api.themoviedb.org/3/search/movie?include_adult=false&language=en-US&page=1&api_key=04319bae7ae40f1d7098f3b5a19be0d2&query=${query}`
  );
  if (!response.ok) {
    throw json({ message: "Could not fetch movie" }, { status: 500 });
  }
  return response;
}
