import { GET_EXAMS } from '../actions/types';

const exams = (state = [], action) => {
  switch (action.type) {
    case GET_EXAMS:
      return [ ...action.payload ];
    default:
      return state;
  }
};

export default exams;
