import { LOGIN, LOGINSUCCESS, LOGIN_FAILED, LOGIN_SUCCESS } from "./actionTypes"

export const login = (username, password) => {
    return {
        type: LOGIN,
        payload: { username, password }
    }
}
export const loginSuccess = (data) => {
    return {
        type: LOGIN_SUCCESS,
        payload:data
    }
}
export const loginfailed = (data) => {
    return {
        type: LOGIN_FAILED,
        payload:data
    }
}