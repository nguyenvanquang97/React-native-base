import { CLEAR_KEY_SEARCH, SET_KEY_SEARCH } from "./actionTypes"

export const setKeySearch = (data) => {
    return {
        type: SET_KEY_SEARCH,
        payload:data
    }
}
export const clearKeySearch = () => {
    return {
        type: CLEAR_KEY_SEARCH,
    }
}