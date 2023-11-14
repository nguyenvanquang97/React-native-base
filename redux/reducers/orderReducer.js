import { FILTER_DATA, FILTER_DATA_FAILED, FILTER_DATA_SUCCESS, GET_ALL_STATUS_ORDER, GET_ALL_STATUS_ORDER_FAILED, GET_ALL_STATUS_ORDER_SUCCESS, GET_ORDER, GET_ORDER_ERROR, GET_ORDER_SUCCESS, } from "../actions/actionTypes";
const initialState = {
    orders: [],
    loading: false,
    error: "",
    orderStatus: [],
    filterData: []
}
const orderReducer = (state = initialState, action) => {
    switch (action.type) {
        case GET_ORDER:
            return { ...state, loading: true }

        case GET_ORDER_SUCCESS:
            return { ...state, orders: [...state.orders, ...action.payload], loading: false }

        case GET_ORDER_ERROR:
            return { ...state, error: action.payload, loading: false }
        case FILTER_DATA:
            return { ...state, loading: true }

        case FILTER_DATA_SUCCESS:
            return { ...state, filterData: action.payload, loading: false }

        case FILTER_DATA_FAILED:
            return { ...state, error: action.payload, loading: false }
        case GET_ALL_STATUS_ORDER:
            return state
        case GET_ALL_STATUS_ORDER_SUCCESS:
            return { ...state, orderStatus: action.payload }
        case GET_ALL_STATUS_ORDER_FAILED:
            return { ...state, error: action.payload }
        default:
            return state;
    }
}

export default orderReducer;