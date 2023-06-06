import classes from './Error.module.css'

function Error({message}) {
  return (
    <div className={classes.container}>
      <h1>Error occurred</h1>
      <p>Some thing went wrong</p>
    </div>
  );
}
export default Error;
