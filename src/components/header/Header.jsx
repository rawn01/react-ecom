import React from "react";
import { Link } from "react-router-dom";
import logo from "../../images/crown.svg";
import { auth } from "../../firebase/firebase";
import "./Header.scss";

const Header = (props) => {
  const signOut = () => {
    auth.signOut();
  };

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
        {props.user ? (
          <div className="option" onClick={signOut}>
            Sign out
          </div>
        ) : (
          <Link to="signin" className="option">
            Sign in
          </Link>
        )}
      </div>
    </div>
  );
};

export default Header;
