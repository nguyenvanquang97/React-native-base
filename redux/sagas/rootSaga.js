import { all } from 'redux-saga/effects';
import { watchFilterData, watchGetOrder, watchGetOrderStatus } from './orderSaga';
import { watchLogin } from './accountSaga';


export default function* rootSaga() {
    yield all([
        watchGetOrder(),
        watchLogin(),
        watchGetOrderStatus(),
        watchFilterData()
    ]);
}
