import { put, takeEvery } from "redux-saga/effects";
import { loginSuccess, loginfailed } from "../actions/accountAction";
import { LOGIN } from "../actions/actionTypes";
import accountApi from "../api/accountApi";

function* login(action) {
    const { username, password } = action.payload;
    console.log("start",username,password)
    try {
        const response = yield accountApi.login(username,password)
        console.log("success",response)
        if(response.code===200){
            yield put(loginSuccess(response.data));
        }
    } catch (error) {
        console.log(1, error);
        yield put(loginfailed(error));
    }
}

export function* watchLogin() {
    yield takeEvery(LOGIN, login);
}
