import React from "react";
import cartIcon from "../../images/shopping-bag.svg";
import "./CartIcon.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={() => props.toggleCart()}>
      <img src={cartIcon} className="shopping-icon" alt="cart-icon" />
      <span className="item-count">0</span>
    </div>
  );
};

export default CartIcon;
