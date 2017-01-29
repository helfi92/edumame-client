import { CURRENT_PROBLEM_SET } from '../actions/types';

const currentProblemSetReducer = (state = '', action) => {
  console.log('action: ', action);
  switch (action.type) {
    case CURRENT_PROBLEM_SET:
      return action.payload;
    default:
      return state;
  }
};

export default currentProblemSetReducer;
