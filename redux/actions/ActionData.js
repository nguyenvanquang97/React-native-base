import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS, MODEDATA } from "./actionTypes"
export const GET_NOTI_SUCCESS = 'GET_NOTI_SUCCESS';
export const GET_NOTI_ERROR = 'GET_NOTI_ERROR';
export const getData = (data) => {
    return {
        type: MODEDATA,
        data: data
    }
}
export const fetchData = () => ({ type: FETCH_DATA });
export const fetchSuccess = data => ({ type: FETCH_SUCCESS, data });
export const fetchError = error => ({ type: FETCH_ERROR, error });