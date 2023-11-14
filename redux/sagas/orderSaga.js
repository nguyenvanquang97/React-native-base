
import { call, takeEvery, put } from 'redux-saga/effects';
import { getAllStatusOrderFailed, getAllStatusOrderSuccess, getOrderError, getOrderSuccess } from '../actions/orderAction';
import orderApi from '../api/orderApi';
import { FILTER_DATA, GET_ALL_STATUS_ORDER, GET_ORDER } from '../actions/actionTypes';

function* getOrDer(action) {
    const {itemCode,listStatus,keySearch,page} = action.payload;
    console.log("start")
    try {
        const response = yield orderApi.getOrder(itemCode,listStatus,keySearch,page)
        console.log("success")
        yield put(getOrderSuccess(response.data));
    } catch (error) {
        console.log(1, error);
        yield put(getOrderError(error));
    }
}

export function* watchGetOrder() {
    yield takeEvery(GET_ORDER, getOrDer);
}
function* filterData(action) {
    const {itemCode,listStatus,keySearch} = action.payload;
    console.log("start")
    try {
        const response = yield orderApi.getOrder(itemCode,listStatus,keySearch)
        console.log("success")
        yield put(getOrderSuccess(response.data));
    } catch (error) {
        console.log(1, error);
        yield put(getOrderError(error));
    }
}

export function* watchFilterData() {
    yield takeEvery(FILTER_DATA, filterData);
}
function* getOrDerStatus() {
    console.log("start")
    try {
        const response = yield orderApi.getOrderStatus()
        const res = response.data.map((item) => {
            return item.name
        }
        )

        yield put(getAllStatusOrderSuccess(response.data));
    } catch (error) {
        console.log(1, error);
        yield put(getAllStatusOrderFailed(error));
    }
}

export function* watchGetOrderStatus() {
yield takeEvery(GET_ALL_STATUS_ORDER, getOrDerStatus);
}
