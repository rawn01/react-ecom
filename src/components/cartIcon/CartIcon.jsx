import React from "react";
import { connect } from "react-redux";
import cartIcon from "../../images/shopping-bag.svg";
import { selectItemsCount } from "../../store/cart/cartUtil";
import "./CartIcon.scss";

const CartIcon = (props) => {
  return (
    <div className="cart-icon" onClick={() => props.toggleCart()}>
      <img src={cartIcon} className="shopping-icon" alt="cart-icon" />
      <span className="item-count">{props.itemCount}</span>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // @ts-ignore
    itemCount: selectItemsCount(state),
    // itemCount: state.cart.cartItems.reduce((accumulatedQuantity, item) => {
    //   console.log("did something");
    //   return accumulatedQuantity + item.quantity 
    // }, 0),
    // itemCountObj: {lol: state.cart.cartItems.reduce((accumulatedQuantity, item) => {
    //   console.log("did something");
    //   return accumulatedQuantity + item.quantity 
    // }, 0)},
  }
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartIcon);
