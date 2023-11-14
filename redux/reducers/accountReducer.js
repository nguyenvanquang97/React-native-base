import { saveToken } from "../../utils/AsyncStorage";
import {LOGIN, LOGIN_FAILED, LOGIN_SUCCESS } from "../actions/actionTypes";
const initialState = {
    token: "",
    loading: false,
    error: ""
}
const accountReducer = (state = initialState, action) => {
    switch (action.type) {
        case LOGIN:
            return { loading:true}
        case LOGIN_SUCCESS:
            saveToken(action.payload)
            return { ...state, token: action.payload ,loading:false}

        case LOGIN_FAILED:
            return { ...state, error: action.payload ,loading:false}
        default:
            return state;
    }
}

export default accountReducer;