import * as actionTypes from "./actionTypes";

export const addOneItemToCart = item => ({
  type: actionTypes.ADD_ONE_ITEM_TO_CART,
  payload: { item: item, quantity: 1 }
});

export const clearCart = () => ({
  type: actionTypes.CLEAR_CART
});

export const removeFromCart = item => ({
  type: actionTypes.REMOVE_FROM_CART,
  payload: item
});

export const changeQuantity = (item, quantity) => ({
  type: actionTypes.CHANGE_QUANTITY,
  payload: { item: item, quantity }
});
