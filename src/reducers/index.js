import { combineReducers } from 'redux';
import searchReducer from './search';
import problemSets from './problemSets';
import userReducer from './user';
import currentProblemSetReducer from './set';
import loaderReducer from './loader';
import examsReducer from './exams';
import commentsReducer from './comments';

const rootReducer = combineReducers({
  problemSets: problemSets,
  searchTerm: searchReducer,
  user: userReducer,
  set: currentProblemSetReducer,
  loader: loaderReducer,
  exams: examsReducer,
  comments: commentsReducer,
});

export default rootReducer;
