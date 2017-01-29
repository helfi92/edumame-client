import {
  SEARCH_TERM,
  PROBLEM_SETS,
  SET_USER,
  SET_USER_FAILURE,
  REGISTER_FAILURE,
  CURRENT_PROBLEM_SET,
} from './types';
import app from '../app';

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
       payload: mockProblemSets,
     });
   }, 2000);
  };
};

export const currentProblemSet = (set) => {
  return {
    type: CURRENT_PROBLEM_SET,
    payload: set,
  }
}

export const login = (email, password) => {
  return (dispatch) => {
    const loginSuccess = (user) => ({
      type: SET_USER, payload: user,
    });

    const loginFailure = (err) => ({
      type: SET_USER_FAILURE, payload: err,
    });

    if (email && password) {
      app.authenticate({ type: 'local', email, password, })
        .then(user => dispatch(loginSuccess(user)))
        .catch(err => dispatch(loginFailure(err)));
    } else {
      app.authenticate()
        .then(user => dispatch(loginSuccess(user)))
        .catch(err => dispatch(loginFailure(err)));
    }
  };
};

export const register = (email, password) => {
  return (dispatch) => {
    app.service('users').create({ email, password, firstName: "Kenta", lastName: "Iwasaki", })
      .then(user => login(email, password))
      .catch(err => dispatch({ type: REGISTER_FAILURE, payload: err, }));
  };
};

export const logout = () => {
  return (dispatch) => {
    app.logout()
      .then(response => dispatch({ type: SET_USER, payload: null, }))
      .catch(err => dispatch({ type: 'LOGOUT', payload: err }));
  };
};
