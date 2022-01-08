import React from 'react';
import { connect } from 'react-redux';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
import "./CartDropdown.scss";

const CartDropdown = (props) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {props.items && props.items.map((item) => <CartItem key={item.id} {...item} />)}
      </div>
      <CustomButton>
        GO TO CHECKOUT
      </CustomButton>
    </div>
  );
};

function mapStateToProps(state) {
  return {
    items: state.cart.cartItems
  };
}

function mapDispatchToProps(dispatch) {
  return {
    
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(CartDropdown);
