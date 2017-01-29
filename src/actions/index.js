import {
    SEARCH_TERM,
    PROBLEM_SETS,
    SET_USER,
    SET_USER_FAILURE,
    REGISTER_FAILURE,
    CURRENT_PROBLEM_SET,
    RETRIEVING_PROBLEM_SET,
    GET_EXAMS
} from "./types";
import app from "../app";

const userService = app.service('users');
const examService = app.service('exams');
const problemsetService = app.service('problemsets');
const commentService = app.service('comments');

// app.authenticate().then(() => {
//     examService.create({url: "http://web.pdx.edu/~erdman/CALCULUS/CALCULUS_pdf.pdf", categories: ["Calculus", "Math"]})
//         .then(exam => {
//             const examId = exam._id;
//             for (let i = 0; i < 5; i++) {
//                 problemsetService.create({
//                     pageNumber: i,
//                     exam: examId,
//                     tags: ["Test Tag"]
//                 }).then(problemset => console.log(problemset))
//                     .catch(err => console.error(err));
//             }
//         }).catch(err => console.error(err));
// });

export const setLoading = (isLoading) => {
    return {
        type: RETRIEVING_PROBLEM_SET,
        payload: isLoading,
    }
};

// Term to save before switching to a different view
export const setSearchTerm = (term) => {
    return {
        type: SEARCH_TERM,
        payload: term,
    };
};

// export const createExam = () => {
//   return (dispatch) => {
//     examService.create({url: "https://ocw.mit.edu/courses/electrical-engineering-and-computer-science/6-046j-introduction-to-algorithms-sma-5503-fall-2005/exams/prac_final_sol.pdf", categories: []})
//       .then(res => {
//         console.log('EXAM: ', res);
//       })
//       .catch(err => console.error(err));
//   };
// };

export const getExams = (problemSets) => {
  return (dispatch) => {
    const examsPromise = problemSets.map(problemSet => {
      return examService.get(problemSet.exam);
    });

    Promise.all(examsPromise)
      .then(exams => dispatch({ type: GET_EXAMS, payload: exams, }))
      .catch(err => console.log('err: ', err));
  };
};

export const getProblemSets = () => {
  return (dispatch) => {
    problemsetService.find({$limit: 10, $skip: 0})
      .then(problemSets => {
      dispatch(getExams(problemSets.data));
      dispatch({type: PROBLEM_SETS, payload: problemSets.data})
    }).catch(err => console.error(err));
  };
};

export const currentProblemSet = (set) => {
    return {
        type: CURRENT_PROBLEM_SET,
        payload: set,
    }
};

export const login = (email, password) => {
  return (dispatch) => {
        const loginSuccess = (user) => {
          return {
            type: SET_USER, payload: user,
          }
        };

        const loginFailure = (err) => {
          return {
            type: SET_USER_FAILURE,
            payload: err,
          }
        };

        if (email && password) {
            app.authenticate({type: 'local', email, password,})
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
        userService.create({email, password, firstName: "Kenta", lastName: "Iwasaki",})
            .then(user => login(email, password))
            .catch(err => dispatch({type: REGISTER_FAILURE, payload: err,}));
    };
};

export const logout = () => {
    return (dispatch) => {
        app.logout()
            .then(response => dispatch({type: SET_USER, payload: null,}))
            .catch(err => dispatch({type: 'LOGOUT', payload: err}));
    };
};

export const postComment = (user) => {
    return (dispatch) => {
        commentService.create({
            text: "Comment text",
            commenter: "User's ID",
            problemset: "Problemset ID"
        }).then(comment => {
        })
            .catch(err => {
            });
    };
};

export const comments = (user, set) => {
    return (dispatch) => {
        commentService.find({problemset: set._id}).then(comments => {
        }).catch(err => {
        });
    };
};

export const rateProblemSet = (user, set) => {
    return (dispatch) => {
        set.upvotes.push(user._id);
        problemsetService.update(set._id, {upvotes: set.upvotes})
            .then(problemset => {
            }).catch(err => {
        });
    };
};

export const rateComment = (user, set, comment) => {
    return (dispatch) => {
        comment.upvotes.push(user._id);
        commentService.update(comment._id, {upvotes: comment.upvotes})
            .then(comment => {
            }).catch(err => {
        });
    };
};
