import { INCREMENT, DECREMENT, REGISTER } from './actionTypes';
// Tăng với giá trị step
export const increaseAction = (step) => {
    return {
        type: INCREMENT,
        step: step
    }
}
export const decreaseAction = (step) => {
    return {
        type: DECREMENT,
        step: step
    }
}

