import { combineReducers } from 'redux';
import searchReducer from './search';
import problemSets from './problemSets';
import userReducer from './user';
import currentProblemSetReducer from './set';

const rootReducer = combineReducers({
  problemSets: problemSets,
  searchTerm: searchReducer,
  user: userReducer,
  set: currentProblemSetReducer,
});

export default rootReducer;
