import { combineReducers } from 'redux';
import orderReducer from './orderReducer';
import accountReducer from './accountReducer';
import searchReducer from './searchReducer';
const allReducers = combineReducers({
    orderReducer,
    accountReducer,
    searchReducer,
});
export default allReducers;
