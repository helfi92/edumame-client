import { URLS } from '../actions/types';

const urls = (state = [], action) => {
  switch (action.type) {
    case URLS:
      return [ ...action.payload];
    default:
      return state;
  }
};

export default urls;
