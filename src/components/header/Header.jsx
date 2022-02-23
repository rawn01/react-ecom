import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";
import logo from "../../images/crown.svg";
import { auth } from "../../firebase/firebase";
import "./Header.scss";
import CartIcon from "../cartIcon/CartIcon";
import CartDropdown from "../cart-dropdown/CartDropdown";
import { toggleCart } from "../../store/cart/cartAction";

class Header extends React.Component {
  signOut = () => {
    auth.signOut();
  };

  render() {
    return (
      <div className="header">
        <Link to="/" className="logo-container">
          <img src={logo} alt="logo" />
        </Link>
  
        <div className="options">
          <Link to="/sub" className="option">
            Sub
          </Link>
          <Link to="/shop" className="option">
            Shop
          </Link>
          <Link to="/contact" className="option">
            Contact
          </Link>
          {this.props.user ? (
            <div className="option" onClick={this.signOut}>
              Sign out
            </div>
          ) : (
            <Link to="signin" className="option">
              Sign in
            </Link>
          )}
          {<CartIcon toggleCart={this.props.toggleCart} />}
        </div>

        {this.props.showCart && <CartDropdown />}
      </div>
    );
  }
};

function mapStateToProps(state) {
  return {
    user: state.user.currentUser,
    showCart: state.cart.showCart
  }
}

function mapDispatchToProps(dispatch) {
  return {
    toggleCart: () => dispatch(toggleCart()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Header);
