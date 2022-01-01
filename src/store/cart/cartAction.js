import { ADD_TO_CART, TOGGLE_CART } from "../actionEnum";

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