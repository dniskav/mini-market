import { put, call, takeLatest } from 'redux-saga/effects';
import { START_GET_PRODUCTS } from '../Actions/actionTypes';
import { apiCall, apiCallMocked } from './api/index';
import { successGetProducts, errorGetProducts } from '../Actions/cart';

//a list to simulate the api call
import productList from '../helpers/productsList';


function* getProducts({ payload }) {
    try {
        //const results = yield call(apiCall, 'get', 'https://minimarket.com/api/products');
        const results = yield call(apiCallMocked, 'get', 'https://minimarket.com/api/products', productList); 
        yield put(successGetProducts(results));
    } catch (error) {
        yield put(errorGetProducts(error));
        console.warn({ error });
    }
}

// Watcher
export default function* products() {
    yield takeLatest(START_GET_PRODUCTS, getProducts);
}
