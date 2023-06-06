import { useState } from "react";
import classes from "./MainNaivgation.module.css";
import { useNavigate } from "react-router-dom";

function MainNavigation() {
  const navigate = useNavigate();
  function onClickHandler() {
    navigate("/search");
  }
  function toHomeHandler() {
    navigate("/");
  }
  const [isBBG, setIsBBG] = useState(false);
  window.addEventListener("scroll", function () {
    if (window.scrollY > 100) {
      setIsBBG(true);
    } else {
      setIsBBG(false);
    }
  });
  return (
    <div className={`${classes.nav} ${isBBG ? classes.bg : ""}`}>
      <div className={classes.title} onClick={toHomeHandler}>
        <h2>Movie app</h2>
      </div>
      <div className={classes.icon} onClick={onClickHandler}>
        <i className="fa-solid fa-magnifying-glass fa-lg"></i>
      </div>
    </div>
  );
}
export default MainNavigation;
