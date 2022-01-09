import React from 'react';
import { connect } from 'react-redux';
import { addToCart } from '../../store/cart/cartAction';

import "./CheckoutItem.scss";

const CheckoutItem = ({ item }) => {
  return (
    <div className="checkout-item">
      <div className="image-container">
        <img alt="Item" src={item.imageUrl} />
      </div>
      <span className="name">{item.name}</span>
      <span className="quantity">{item.quantity}</span>
      <span className="price">{item.price}</span>
      <div className="remove-button">&#10005;</div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    
  };
}

function mapDispatchToProps(dispatch) {
  return {
    addToCart: (item) => addToCart(item)
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutItem);
