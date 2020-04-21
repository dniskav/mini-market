import { 
    ADD_TO_CART,
    REMOVE_FROM_CART,
    SHOW_IN_DETAILS_VIEW,
    SHOW_CART,
    CLEAR_CART,
    START_GET_PRODUCTS,
    SUCCESS_GET_PRODUCTS,
    ERROR_GET_PRODUCTS,
} from "./actionTypes";

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

//sagas related
export const startGetProducts = () => ({
    type: START_GET_PRODUCTS,
});
            
export const successGetProducts = products => ({
    type: SUCCESS_GET_PRODUCTS,
    products,
});
            
export const errorGetProducts = error => ({
    type: ERROR_GET_PRODUCTS,
    error,
});
            
