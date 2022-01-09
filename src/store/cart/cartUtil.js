import { createSelector } from "reselect";

export const selectCart = (state) => state.cart;

export const selectCartItems = createSelector(
  [selectCart],
  (cart) => cart.cartItems
);

export const selectItemsCount = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, item) => {
    return accumulatedQuantity + item.quantity 
  }, 0),
);

export const selectCartTotal = createSelector(
  [selectCartItems],
  (cartItems) => cartItems.reduce((accumulatedQuantity, item) => {
    return accumulatedQuantity + (item.quantity * item.price)
  }, 0),
)

export const addItemToCart = (cartItems, cartItemToAdd) => {
  const cartItemExist = cartItems.find(
    (item) => item.id === cartItemToAdd.id
  ); 

  if(cartItemExist) {
    return cartItems.map(
      (item) => item.id === cartItemToAdd.id 
        ? { ...item, quantity: item.quantity + 1 }
        : item
    )
  }

  return [ ...cartItems, { ...cartItemToAdd, quantity: 1 } ];
};

export const removeItemFromCart = (cartItems, cartItemToRemove) => {
  const updatedCartItems = cartItems.filter((item) => item.id !== cartItemToRemove.id);

  return updatedCartItems;
}