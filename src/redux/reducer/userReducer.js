import {LOADING_USER,SET_USER,SUBMIT,RETRYTEST} from '../type';
import {QUESTIONS} from '../../Home/Quiz/Question';



const initialState = {
    loading: false,
    credentials: {},
    questions: [
        ...QUESTIONS,
    ],
    score : 0,
    answer : []
}
export default function(state = initialState,action){
    switch (action.type){
        case LOADING_USER: 
            return {
                ...state
            };
        case SET_USER:
            return {
                ...state,
                loading: false,
                credentials: action.payload
            };
        case SUBMIT: 
            if(action.payload.myAnswer === state.questions[action.payload.currentQuestion].answer){ 
                let temp = [...state.answer, action.payload.myAnswer];
                return {
                        ...state,
                        loading: true,
                        score: state.score + 1,
                        answer : temp
                    }
            }else{
                let temp = [...state.answer, action.payload.myAnswer];
                return{
                    ...state,
                    answer : temp                 
                }
            }
        case RETRYTEST: 
            return {
                ...state,
                score: 0,
                answer: []
            }
        default: 
            return state;
    }
}