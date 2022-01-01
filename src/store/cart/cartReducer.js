import { ADD_TO_CART, TOGGLE_CART } from "../actionEnum";
import { addItemToCart } from "./cartUtil";

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
    default: 
      return state;
  }
};

export default cartReducer;