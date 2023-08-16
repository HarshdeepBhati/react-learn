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
    <div className="flex justify-between bg-pink-100 shadow-md m-2">
      <div className="logo-container">
        <img className="w-20" src={LOGO_URL}></img>
      </div>
      <div className="nav-items">
        <ul className="flex items-center p-4 m-4">
          <li className="px-4">
            <Link style={linkStyle} to="/">
              Home
            </Link>
          </li>
          <li className="px-4">
            <Link style={linkStyle} to="/about">
              About Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={linkStyle} to="/contact">
              Contact Us
            </Link>
          </li>
          <li className="px-4">
            <Link style={linkStyle} to="/grocery">
              Grocery
            </Link>
          </li>
          <li className="px-4">Cart</li>
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
