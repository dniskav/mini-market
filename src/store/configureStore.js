import { createStore, compose, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";

import rootReducer from "../reducers/rootReducer";
import initialState from '../reducers/initialState';

const createStoreWithMiddleware 
    = applyMiddleware(
        save({ states: ['cart'] }) // Saving done here
    )(createStore);

export default () => {
    const middleWares = [];
    const store = createStoreWithMiddleware(
        rootReducer,
        load({ states: ['cart'], preloadedState: initialState }),
        compose(
            applyMiddleware(...middleWares),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f,
        ),

    );

    return store;
};
