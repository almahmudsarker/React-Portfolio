import { Link, useRouteError } from "react-router-dom";
import "./ErrorPage.css";

export default function ErrorPage() {
  const error = useRouteError();
  console.error(error);

  return (
    <div id="error-page">
      <h5 className="animate-link err-code">404</h5>
      <h1 className="animate-link">Oops!</h1>
      <p>Sorry, an unexpected error has occurred.</p>
      <p className="err-text">
        <i>{error.statusText || error.message}</i>
      </p>
      <img
        className="err-img"
        src="https://i.ibb.co/518HZGk/john-travolta-lost.gif"
      />
      <br />
      <Link to="/">
        <button className="err-btn">Go Back</button>
      </Link>
    </div>
  );
}