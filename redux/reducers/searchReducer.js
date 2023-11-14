import { CLEAR_KEY_SEARCH, SET_KEY_SEARCH } from "../actions/actionTypes";

const initialState = {
    senderValue: "",
    contract: "",
    senderProvinceCode: "",
    senderDistrictCode: "",
    senderCommuneCode: "",
    contractC: "",
    receiverprovinceCode: "",
    receiverDistrictCode: "",
    receiverCommuneCode: "",
    batchCode: "",
    owner: "",
    createdBy: "",
}
const searchReducer = (state = initialState, action) => {
    switch (action.type) {
        case SET_KEY_SEARCH:
            return action.payload;
        case CLEAR_KEY_SEARCH:
            return initialState;
        default:
            return state
    }
}
export default searchReducer;