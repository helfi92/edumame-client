import { PROBLEM_SETS } from '../actions/types';

const problemSets = (state = '', action) => {
  switch (action.type) {
    case PROBLEM_SETS:
      return [...action.payload];
    default:
      return state;
  }
};

export default problemSets;
