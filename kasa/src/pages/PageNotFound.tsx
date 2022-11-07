import { Link } from "react-router-dom";

export const PageNotFound = () => {
  return (
    <>
      <div className="pageNotFound_wrapper">
        <h1>404</h1>
        <p>Oops! It looks like this page doesn't exist.</p>
        <Link to="/">Go back to homepage</Link>
      </div>
    </>
  );
};
