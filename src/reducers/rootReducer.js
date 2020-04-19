import { initialState } from "./initialState";
import {
    ADD_TO_CART, SHOW_IN_DETAILS_VIEW,
} from "../Actions/actionTypes";

export default (state = initialState, action) => {
    switch (action.type) {
        case ADD_TO_CART:
            const { item } = action;
            const { cart } = state;
            return { ...state, cart: [...cart, item] };
        case SHOW_IN_DETAILS_VIEW:
            const { detailedItem } = action;
            const { detailsView } = state;
            return { ...state, detailedItem };
        default:
            return state;
    }
};
