import { GET_EXAMS, CLEAR_EXAMS } from '../actions/types';

const exams = (state = [], action) => {
  switch (action.type) {
    case CLEAR_EXAMS:
      return [];
    case GET_EXAMS:
      return [ ...action.payload ];
    default:
      return state;
  }
};

export default exams;
