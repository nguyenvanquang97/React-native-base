import { combineReducers } from 'redux';
import reducersUser from './reducersUser';
import reducersData from './reducersData';
import reducer from './reducersData2';

const allReducers = combineReducers({
    // counterReducers,
    // reducersUser,
    reducersData,
    reducer


});
export default allReducers;
