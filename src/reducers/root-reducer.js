import { combineReducers } from 'redux';
import { houses } from './houseReducer';
import { expanded } from './expandedReducer';


const rootReducer = combineReducers({
  houses, 
  expanded
});


export default rootReducer;
