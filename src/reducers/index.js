import { combineReducers } from 'redux';
import counterReducer from './reducer';
import searchReducer from './search';

const rootReducer = combineReducers({
  counter: counterReducer,
  searchTerm: searchReducer,
});

export default rootReducer;
