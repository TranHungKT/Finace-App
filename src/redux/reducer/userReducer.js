import {
  LOADING_USER,
  SET_USER,
  SUBMIT,
  RETRYTEST,
  SUBMIT_RESULT,
} from '../type';
import {QUESTIONS} from '../../screen/Home/Quiz/Question';

const initialState = {
  loading: false,
  credentials: {},
  questions: [...QUESTIONS],
  score: false,
  answer: [],
  lessonFinished: [0, 0, 0, 0, 0, 0],
};
export default function (state = initialState, action) {
  switch (action.type) {
    case LOADING_USER:
      return {
        ...state,
      };
    case SET_USER:
      return {
        ...state,
        loading: false,
        credentials: action.payload,
      };
    case SUBMIT:
      if (
        action.payload.myAnswer ===
        state.questions[action.payload.currentQuestion].answer
      ) {
        let temp = [...state.answer, action.payload.myAnswer];
        return {
          ...state,
          loading: true,
          score: state.score + 1,
          answer: temp,
        };
      } else {
        let temp = [...state.answer, action.payload.myAnswer];
        return {
          ...state,
          answer: temp,
        };
      }
    case RETRYTEST:
      return {
        ...state,
        score: 0,
        answer: [],
      };
    case SUBMIT_RESULT:
      let tempScore = action.payload.score;
      let temp = [...state.lessonFinished];
      if (tempScore >= 2) {
        temp[action.payload.idLesson] = 1;
      } else {
        temp[action.payload.idLesson] = 0;
      }
      console.log(action.payload.idLesson);
      console.log(temp);
      return {
        ...state,
        score: action.payload.score,
        lessonFinished: temp,
      };
    default:
      return state;
  }
}
