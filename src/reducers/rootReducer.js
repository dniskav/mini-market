import initialState from "./initialState";
import {
    ADD_TO_CART,
    SHOW_IN_DETAILS_VIEW,
    REMOVE_FROM_CART,
    SHOW_CART,
    CLEAR_CART,
    START_GET_PRODUCTS,
    SUCCESS_GET_PRODUCTS,
    ERROR_GET_PRODUCTS,
} from "../Actions/actionTypes";

export default (state = initialState, action) => {
    const { cart } = state;
    switch (action.type) {
        case ADD_TO_CART:
            const { item } = action;
            return { ...state, cart: [...cart, item] };
        case REMOVE_FROM_CART:
            const { itemToRemove } = action;
            return { ...state, cart: removeItem(itemToRemove, cart) };
        case SHOW_IN_DETAILS_VIEW:
            const { detailedItem } = action;
            return { ...state,  detailedItem, showCart: false, route: 'Product Detail' };
        case SHOW_CART:
            return { ...state,  showCart: true, route: 'Cart' };
        case CLEAR_CART:
            return { ...state,  cart: []};
        case START_GET_PRODUCTS:
            return { ...state,  fetchingProducts: true };
        case SUCCESS_GET_PRODUCTS:
            const { products } = action;
            return { ...state,  products, fetchingProducts: false };
        case ERROR_GET_PRODUCTS:
            const { error } = action;
            return { ...state,  error, fetchingProducts: false };
        default:
            return state;
    }
};

const removeItem = (item, array) => {
    const itemPosition = array.findIndex(e => e.id === item.id);
    if(itemPosition >= 0) {
        array.splice(itemPosition, 1);
    }
    return array;
};
