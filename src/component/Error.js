import { Fragment } from "react";
import classes from "./Error.module.css";
import MainNavigation from "./MainNavigation";

function Error({ message }) {
  return (
    <Fragment>
      <MainNavigation />
      <div className={classes.container}>
        <h1>Error occurred</h1>
        <p>Some thing went wrong</p>
      </div>
    </Fragment>
  );
}
export default Error;
