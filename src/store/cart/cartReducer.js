import { TOGGLE_CART } from "../actionEnum";

const initialState = {
  showCart: false
};

const cartReducer = (state = initialState, action) => {
  switch(action.type) {
    case TOGGLE_CART:
      return {
        ...state,
        showCart: !state.showCart
      }
    default: 
      return state;
  }
};

export default cartReducer;