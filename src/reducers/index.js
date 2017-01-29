import { combineReducers } from 'redux';
import searchReducer from './search';
import problemSets from './problemSets';
import userReducer from './user';

const rootReducer = combineReducers({
  problemSets: problemSets,
  searchTerm: searchReducer,
  user: userReducer,
});

export default rootReducer;
