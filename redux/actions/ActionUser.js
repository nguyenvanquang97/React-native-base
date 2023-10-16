const { REGISTER } = require("./actionTypes");
export const register = (data) => {
    return {
        type: REGISTER,
        data: data
    }
}