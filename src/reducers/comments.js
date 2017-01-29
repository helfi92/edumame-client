import { GET_COMMENTS, NEW_COMMENT } from '../actions/types';

const comments = (state = [], action) => {
  switch (action.type) {
    case GET_COMMENTS:
      console.log('new commment: ', action.payload);
      return [ ...action.payload.data ];
    case GET_COMMENTS:
      return [ ...action.payload.data ];
    default:
      return state;
  }
};

export default comments;
