import { combineReducers } from 'redux';
import value_1 from './reducer_1';
import value_2 from './reducer_2'; 

const reducers = combineReducers({
    value_1,
    value_2
});

export default reducers;