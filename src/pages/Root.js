import { Fragment } from "react";
import { Outlet } from "react-router-dom";
import MainNavigation from "../component/MainNavigation";

function Root() {
  return (
    <Fragment>
      <MainNavigation />
      <Outlet></Outlet>
    </Fragment>
  );
}
export default Root;
