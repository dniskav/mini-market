import { initialState } from "./initialState";
import {
    ADD_TO_CART, SHOW_IN_DETAILS_VIEW, REMOVE_FROM_CART,
} from "../Actions/actionTypes";

export default (state = initialState, action) => {
    const { cart } = state;
    switch (action.type) {
        case ADD_TO_CART:
            const { item } = action;
            return { ...state, cart: [...cart, item] };
        case REMOVE_FROM_CART:
            const { itemToRemove } = action;
            removeItem(itemToRemove, cart);
            return { ...state };
        case SHOW_IN_DETAILS_VIEW:
            const { detailedItem } = action;
            return { ...state,  detailedItem};
        default:
            return state;
    }
};

const removeItem = (item, array) => {
    const itemPosition = array.indexOf(item);
    if(itemPosition >= 0) {
        array.splice(itemPosition, 1);
    }
    return array;
};
