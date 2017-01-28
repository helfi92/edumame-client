import { SEARCH_TERM } from '../actions/types';

const searchReducer = (state = '', action) => {
  console.log('action: ', action);
  switch (action.type) {
    case SEARCH_TERM:
      return action.payload;
    default:
      return state;
  }
};

export default searchReducer;
