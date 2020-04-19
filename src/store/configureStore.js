import { createStore, compose, applyMiddleware } from "redux";
import rootReducer from "../reducers/rootReducer";

export default initialState => {
    const middleWares = [];

    const store = createStore(
        rootReducer,
        initialState,
        compose(
            applyMiddleware(...middleWares),
            window.__REDUX_DEVTOOLS_EXTENSION__
                ? window.__REDUX_DEVTOOLS_EXTENSION__()
                : f => f,
        ),
    );

    return store;
};
