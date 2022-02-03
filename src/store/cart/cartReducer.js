import { ADD_TO_CART, CLEAR_ITEM_FROM_CART, REMOVE_FROM_CART, TOGGLE_CART } from "../actionEnum";
import { addItemToCart, clearItemFromCart, removeItemFromCart } from "./cartUtil";

const initialState = {
  showCart: false,
  cartItems: JSON.parse(localStorage.getItem("cartItems")) || []
};

const cartReducer = (state = initialState, action) => {
  let items = null;
  switch(action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      };
    
    case ADD_TO_CART: 
      items = addItemToCart(state.cartItems, action.payload);
      localStorage.setItem("cartItems", JSON.stringify(items));

      return {
        ...state,
        cartItems: items
      }

    case CLEAR_ITEM_FROM_CART: 
      items = clearItemFromCart(state.cartItems, action.payload);
      localStorage.setItem("cartItems", JSON.stringify(items));

      return {
        ...state,
        cartItems: clearItemFromCart(state.cartItems, action.payload)
      }

    case REMOVE_FROM_CART: 
      items = removeItemFromCart(state.cartItems, action.payload);
      localStorage.setItem("cartItems", JSON.stringify(items));

      return {
        ...state,
        cartItems: removeItemFromCart(state.cartItems, action.payload)
      }

    default: 
      return state;
  }
};

export default cartReducer;