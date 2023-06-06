import classes from "./MovieList.module.css";

function MovieList({ oriMV }) {
  return (
    <div className={classes.list}>
      {oriMV.map((el) => (
        <a
          href="#"
          className={classes.listItem}
          key={el.id}
          style={{
            backgroundImage: `url(https://image.tmdb.org/t/p/original${el.poster_path})`,
          }}
        ></a>
      ))}
    </div>
  );
}
export default MovieList;
