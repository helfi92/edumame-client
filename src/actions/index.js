import {
  SEARCH_TERM,
  PROBLEM_SETS
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

export const getProblemSets = () => {
  const mockProblemSets = [
    {
      url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/exams/prac_final_sol.pdf',
      categories: ['Education', 'Science'],
    }, {
      url: 'https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-034-artificial-intelligence-fall-2010/exams/MIT6_034F10_final_2010.pdf',
      categories: ['Algorithms', 'Artifical Intelligence'],
    }
  ];

  return (dispatch) => {
   setTimeout(() => {
     dispatch({
       type: PROBLEM_SETS,
       payload: mockProblemSets
     })
   }, 2000);
  };
};
