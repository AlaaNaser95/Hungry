import * as actionTypes from "./actionTypes";

const isEqual = require("lodash.isequal");
const initialState = { cart: [], cartCount: 0 };

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.ADD_ONE_ITEM_TO_CART:
      let itemExistsInCart = false;
      let cart = state.cart.map(cartItem => {
        if (isEqual(cartItem.item, action.payload.item)) {
          itemExistsInCart = true;
          return { ...cartItem, quantity: cartItem.quantity + 1 };
        }
        return cartItem;
      });

      if (itemExistsInCart)
        return {
          ...state,
          cart: cart,
          cartCount: state.cartCount + 1
        };
      return {
        ...state,
        cart: cart.concat(action.payload),
        cartCount: state.cartCount + 1
      };

    case actionTypes.REMOVE_FROM_CART:
      let removedQuantity = {};
      return {
        ...state,
        cart: state.cart.filter(cartItem => {
          if (isEqual(cartItem.item, action.payload)) {
            removedQuantity = cartItem.quantity;
            return false;
          }
          return true;
        }),
        cartCount: state.cartCount - removedQuantity
      };
    case actionTypes.CLEAR_CART:
      return {
        ...state,
        cart: [],
        cartCount: 0
      };
    case actionTypes.CHANGE_QUANTITY:
      let previousQuantity = 0;
      let newCart = state.cart.map(cartItem => {
        if (isEqual(cartItem.item, action.payload.item)) {
          previousQuantity = cartItem.quantity;
          return { ...cartItem, quantity: action.payload.quantity };
        }
        return cartItem;
      });
      return {
        ...state,
        cart: newCart,
        cartCount: state.cartCount + action.payload.quantity - previousQuantity
      };
    default:
      return state;
  }
};

export default reducer;
