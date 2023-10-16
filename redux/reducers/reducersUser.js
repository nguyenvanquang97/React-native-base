import { REGISTER } from '../actions/actionTypes';

//state không thay đổi, chỉ trả về giá trị cuối cùng
const reducersUser = (data = '', action) => {
    switch (action.type) {
        case REGISTER:
            return action.data;
        default:
            return data;
    }
}

export default reducersUser;
