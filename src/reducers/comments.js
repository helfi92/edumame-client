import { GET_COMMENTS } from '../actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      return [ ...action.payload.data ];
    default:
      return state;
  }
};

export default comments;
