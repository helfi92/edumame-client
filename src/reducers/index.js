import { combineReducers } from 'redux';
import searchReducer from './search';
import problemSets from './problemSets';
import userReducer from './user';
import currentProblemSetReducer from './set';
import loaderReducer from './loader';
import examsReducer from './exams';
import commentsReducer from './comments';
import urlsReducer from './urls';

const rootReducer = combineReducers({
  problemSets: problemSets,
  searchTerm: searchReducer,
  user: userReducer,
  set: currentProblemSetReducer,
  loader: loaderReducer,
  exams: examsReducer,
  comments: commentsReducer,
  urls: urlsReducer,
});

export default rootReducer;
