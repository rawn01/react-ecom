import React from 'react';
import { connect } from 'react-redux';
import CheckoutItem from '../../components/checkout-item/CheckoutItem';
import { selectCartTotal } from '../../store/cart/cartUtil';

import "./CheckoutPage.scss";

const CheckoutPage = (props) => {
  return (
    <div className="checkout-page">
      <div className="checkout-header">
        <div className="header=block">
          <span>Product</span>
        </div>

        <div className="header=block">
          <span>Description</span>
        </div>

        <div className="header=block">
          <span>Quantity</span>
        </div>

        <div className="header=block">
          <span>Price</span>
        </div>
        
        <div className="header=block">
          <span>Remove</span>
        </div>
      </div>
      {
        props.items.map((item) => {
          return (
            <CheckoutItem key={item.id} item={item} />
          );
        })
      }
      <div className="total">{props.totalPrice}</div>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    // @ts-ignore
    totalPrice: selectCartTotal(state),
    items: state.cart.cartItems,
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
