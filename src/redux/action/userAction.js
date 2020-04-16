import {LOADING_USER,SET_USER,SUBMIT,RETRYTEST} from '../type';

export const loginUser = (userData) => (dispatch) => {
    dispatch({type: LOADING_USER});
    dispatch({
        type: SET_USER,
        payload: userData,
    })
}

export const submitQuestion = (myAnswer,currentQuestion) => dispatch => {
    const data = {myAnswer,currentQuestion}
    dispatch({
        type: SUBMIT,
        payload: data
    })
}

export const retryTest = () => dispatch => {
    dispatch({
        type: RETRYTEST
    })
}