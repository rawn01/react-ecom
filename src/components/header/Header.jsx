import React from "react";
import { Link } from "react-router-dom";
import "./Header.scss";
import logo from "../../images/crown.svg";

const Header = () => {
  return (
    <div className="header">
      <Link to="/" className="logo-container">
        <img src={logo} alt="logo" />
      </Link>

      <div className="options">
        <Link to="/shop" className="option">
          Shop
        </Link>
        <Link to="/contact" className="option">
          Contact
        </Link>
        <Link to="signin" className="option">
          Sign in
        </Link>
      </div>
    </div>
  );
}

export default Header;
