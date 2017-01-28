import {
  SEARCH_TERM,
} from './types';

export const increaseCounter = () => {
  return {
    type: 'INCREASE_COUNTER',
  };
};

export const decreaseCounter = () => {
  return {
    type: 'DECREASE_COUNTER',
  };
};

// Term to save before switching to a different view
export const setSearchTerm = (term) => {
  return {
    type: SEARCH_TERM,
    payload: term,
  };
};
