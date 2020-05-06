import {
  LOADING_USER,
  SET_USER,
  SUBMIT,
  RETRYTEST,
  SUBMIT_RESULT,
} from '../type';

export const loginUser = (userData) => (dispatch) => {
  dispatch({type: LOADING_USER});
  dispatch({
    type: SET_USER,
    payload: userData,
  });
};

export const submitQuestion = (myAnswer, currentQuestion) => (dispatch) => {
  const data = {myAnswer, currentQuestion};
  dispatch({
    type: SUBMIT,
    payload: data,
  });
};

export const retryTest = () => (dispatch) => {
  dispatch({
    type: RETRYTEST,
  });
};

export const submitResult = (score, idLesson) => (dispatch) => {
  const data = {score, idLesson};
  dispatch({
    type: SUBMIT_RESULT,
    payload: data,
  });
};
