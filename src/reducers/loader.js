import { RETRIEVING_PROBLEM_SET } from '../actions/types';

const loader = (state = false, action) => {
  switch (action.type) {
    case RETRIEVING_PROBLEM_SET:
      return action.payload;
    default:
      return state;
  }
};

export default loader;
