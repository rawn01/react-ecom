import { ADD_TO_CART, CLEAR_ITEM_FROM_CART, TOGGLE_CART } from "../actionEnum";
import { addItemToCart, removeItemFromCart } from "./cartUtil";

const initialState = {
  showCart: false,
  cartItems: []
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    
    case ADD_TO_CART: 
      return {
        ...state,
        cartItems: addItemToCart(state.cartItems, action.payload)
      }

    case CLEAR_ITEM_FROM_CART: 
      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    default: 
      return state;
  }
};

export default cartReducer;