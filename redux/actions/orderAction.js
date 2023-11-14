import { FILTER_DATA, FILTER_DATA_FAILED, FILTER_DATA_SUCCESS, GET_ALL_STATUS_ORDER, GET_ALL_STATUS_ORDER_FAILED, GET_ALL_STATUS_ORDER_SUCCESS, GET_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS } from "./actionTypes"

export const getOrderData = (itemCode,listStatus,keySearch,page) => {
    return {
        type: GET_ORDER,
        payload:{itemCode,listStatus,keySearch,page}
    }
}
export const getOrderSuccess = (data) => {
    return {
        type: GET_ORDER_SUCCESS,
        payload: data
    }
}
export const getOrderError = (data) => {
    return {
        type: GET_ORDER_ERROR,
        payload: data
    }
}
export const filterData = (itemCode,listStatus,keySearch) => {
    return {
        type: FILTER_DATA,
        payload:{itemCode,listStatus,keySearch}
    }
}
export const filterDataSuccess = (data) => {
    return {
        type: FILTER_DATA_SUCCESS,
        payload: data
    }
}
export const filterDataError = (data) => {
    return {
        type: FILTER_DATA_FAILED,
        payload: data
    }
}
export const getAllStatusOrder = (data) => {
    return {
        type: GET_ALL_STATUS_ORDER,
        payload: data
    }
}
export const getAllStatusOrderSuccess = (data) => {
    return {
        type: GET_ALL_STATUS_ORDER_SUCCESS,
        payload: data
    }
}
export const getAllStatusOrderFailed = (data) => {
    return {
        type: GET_ALL_STATUS_ORDER_FAILED,
        payload: data
    }
}