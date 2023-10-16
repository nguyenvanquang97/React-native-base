import { FETCH_DATA, FETCH_ERROR, FETCH_SUCCESS, MODEDATA } from "../actions/actionTypes";
const initialState = {
    data: [],
    loading: false,
    error: null,
};
//state không thay đổi, chỉ trả về giá trị cuối cùng
const reducer = (state = initialState, action) => {
    switch (action.type) {
        case FETCH_DATA:
            return { ...state, loading: 'Da' + true, error: null };
        case FETCH_SUCCESS:
            return { ...state, loading: 'SU' + false, data: action.data };
        case FETCH_ERROR:
            return { ...state, loading: false, error: action.error };
        default:
            return state;
    }
};

export default reducer;