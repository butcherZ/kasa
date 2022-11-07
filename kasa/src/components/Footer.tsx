import { Link } from "react-router-dom";

export const Footer = () => {
  return (
    <div className="footer">
      <Link to="/">
        {" "}
        <img src={process.env.PUBLIC_URL + "kasa_logo_white.png"} id="logo" />
      </Link>
      <p>© 2020 Kasa. All rights reserved</p>
    </div>
  );
};
