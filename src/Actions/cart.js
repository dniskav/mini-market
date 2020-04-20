import { ADD_TO_CART, REMOVE_FROM_CART, SHOW_IN_DETAILS_VIEW, SHOW_CART, CLEAR_CART } from "./actionTypes";

export const addToCart = item => ({
    type: ADD_TO_CART,
    item,
});

export const removeFromCart = itemToRemove => ({
    type: REMOVE_FROM_CART,
    itemToRemove,
});

export const clearCart = itemToRemove => ({
    type: CLEAR_CART,
    itemToRemove,
});

export const showInDetailsView = detailedItem => ({
    type: SHOW_IN_DETAILS_VIEW,
    detailedItem,
});

export const proceedCheckout = () => ({
    type: SHOW_CART,
});
