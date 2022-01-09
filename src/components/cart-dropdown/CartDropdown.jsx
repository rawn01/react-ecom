import React from 'react';
import { connect } from 'react-redux';
import { withRouter } from 'react-router-dom';
import { toggleCart } from '../../store/cart/cartAction';
import CartItem from '../cart-item/CartItem';
import CustomButton from '../custom-button/CustomButton';
import "./CartDropdown.scss";

const CartDropdown = (props) => {
  return (
    <div className='cart-dropdown'>
      <div className='cart-items'>
        {props.items && 
          props.items.length ? 
            props.items.map((item) => <CartItem key={item.id} {...item} />) :
            <span className="empty-message">Your cart is empty</span>
        }
      </div>
      <CustomButton onClick={() => {
          props.toggleCart();
          props.history.push("/checkout");
        }}
      >
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
    toggleCart: () => dispatch(toggleCart())
  };
}

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(CartDropdown));
