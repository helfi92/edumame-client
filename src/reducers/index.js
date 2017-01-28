import { combineReducers } from 'redux';
import searchReducer from './search';
import problemSets from './problemSets';

const rootReducer = combineReducers({
  problemSets: problemSets,
  searchTerm: searchReducer,
});

export default rootReducer;
