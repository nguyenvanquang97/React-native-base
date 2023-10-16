import { MODEDATA } from "../actions/actionTypes";

//state không thay đổi, chỉ trả về giá trị cuối cùng
const reducersData = (data = "", action) => {
    switch (action.type) {
        case MODEDATA:

            return action.data
        default:
            return data;
    }
}

export default reducersData;