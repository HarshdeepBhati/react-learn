import { useState } from "react";
import { LOGO_URL } from "../utils/constants";
import { Link } from "react-router-dom";
const Header = () => {
  const [btnName, setbtnName] = useState("Login");
  const linkStyle = {
    textDecoration: "none",
    color: "black",
  };

  return (
    <div className="header">
      <div className="logo-container">
        <img className="logo" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul>
          <li>
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/about">
              About Us
            </Link>
          </li>
          <li>
            <Link style={linkStyle} to="/contact">
              Contact Us
            </Link>
          </li>
          <li>Cart</li>
          <button
            className="login-btn"
            onClick={() => {
              btnName === "Login" ? setbtnName("Logout") : setbtnName("Login");
            }}
          >
            {btnName}
          </button>
        </ul>
      </div>
    </div>
  );
};

export default Header;
