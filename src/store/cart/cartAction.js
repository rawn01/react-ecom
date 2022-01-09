import { ADD_TO_CART, TOGGLE_CART, REMOVE_FROM_CART } from "../actionEnum";

export const toggleCart = () => {
  return {
    type: TOGGLE_CART
  };
};

export const addToCart = (payload) => {
  return {
    type: ADD_TO_CART,
    payload
  };
}

export const removeFromCart = (payload) => {
  return {
    type: REMOVE_FROM_CART,
    payload
  };
}