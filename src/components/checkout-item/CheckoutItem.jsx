import React from 'react';
import { connect } from 'react-redux';
import { addToCart, removeFromCart } from '../../store/cart/cartAction';

import "./CheckoutItem.scss";

const CheckoutItem = ({ item, removeFromCart }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="Item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">
        <div className="arrow">&#10094;</div>
        <span className="value">{item.quantity}</span>
        <div className="arrow">&#10095;</div>
      </span>
      <span className="price">{item.price}</span>
      <div 
        className="remove-button"
        onClick={() => removeFromCart(item)}
      >
        &#10005;
      </div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => dispatch(addToCart(item)),
    removeFromCart: (item) => dispatch(removeFromCart(item))
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
