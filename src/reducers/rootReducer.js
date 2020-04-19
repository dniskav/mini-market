import { initialState } from "./initialState";
import {
    ADD_TO_CART,
} from "../Actions/actionTypes";

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { item } = action;
            const { cart } = state;
            return { ...state, cart: [...cart, item] };
        default:
            return state;
    }
};
