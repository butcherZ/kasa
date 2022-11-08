import { Link } from "react-router-dom";

export const Nav = () => {
  return (
    <div className="navbar">
      <nav>
        <Link to="/">
          {" "}
          <img
            src={process.env.PUBLIC_URL + "kasa_logo.png"}
            id="logo"
            alt="logo"
          />
        </Link>
        <ul id="navlist">
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/about">About</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};
