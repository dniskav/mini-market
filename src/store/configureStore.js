import { createStore, compose, applyMiddleware } from "redux";
import { save, load } from "redux-localstorage-simple";
import reduxSaga from 'redux-saga';

import rootReducer from "../reducers/rootReducer";
import initialState from '../reducers/initialState';
import rootSaga from "../sagas";

const createStoreWithMiddleware 
    = applyMiddleware(
        save({ states: ['cart'] })
    )(createStore);

const sagaMiddleware = reduxSaga();

export default () => {
    const middleWares = [sagaMiddleware];

    return {
        ...createStoreWithMiddleware(
            rootReducer,
            load({ states: ['cart'], preloadedState: initialState }),
            compose(
                applyMiddleware(...middleWares),
                window.__REDUX_DEVTOOLS_EXTENSION__
                    ? window.__REDUX_DEVTOOLS_EXTENSION__()
                    : f => f,
            ),
        ),
        runSaga: sagaMiddleware.run(rootSaga),
   };
};
