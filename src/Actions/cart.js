import { ADD_TO_CART, SHOW_IN_DETAILS_VIEW } from "./actionTypes";

export const addToCart = item => ({
    type: ADD_TO_CART,
    item,
});

export const showInDetailsView = detailedItem => ({
    type: SHOW_IN_DETAILS_VIEW,
    detailedItem,
});
