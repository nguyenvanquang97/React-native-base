import { GET_NOTI_ERROR, GET_NOTI_SUCCESS, fetchError, fetchSuccess } from '../actions/ActionData';
import { FETCH_DATA, MODEDATA, REGISTER } from '../actions/actionTypes';

//takeEvery khi thực hiện một hành động nào đó nó sẻ gọi một hàm trước khi dispatch vào reducers
import { put, takeEvery } from 'redux-saga/effects';
import { getListSon } from '../api/getData/getListSon';
import fetchClient from '../api/getData/fetchClient';

function* getData(action) {
    try {
        const response = yield getListSon(0, 11);
        console.log(response);
        if (response.status === 200) {
            yield put({ type: GET_NOTI_SUCCESS, response: response });
        }

    } catch (error) {
        yield put({ type: GET_NOTI_ERROR, error: 'Server không phản hồi' });
    }

}
export function* watchData() {
    yield takeEvery(MODEDATA, getData);
}
function* fetchDataSaga() {
    try {
        const response = yield fetchClient(`/api/app/get/pb?page=2&size=2`, {
            method: "GET"
        });
        if (response.data.status === 200) {
            yield put(fetchSuccess(response.data));
        }

    } catch (error) {
        yield put(fetchError(error));
    }
}
// Saga watcher
export function* watchGetData() {
    yield takeEvery(FETCH_DATA, fetchDataSaga);
}
