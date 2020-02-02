import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  DELETE_QUIZ,
  FETCH_QUESTIONS_START,
  FETCH_QUESTIONS_SUCCESS,
} from '../actions/actoinTypes'

const initialState = {
  testsList: [],
  isLoading: false,
  error: null,
  questions: [],
}

export default function quizReducer(state = initialState, action) {
  switch (action.type) {
    case FETCH_QUIZES_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_QUIZES_SUCCESS:
      return {
        ...state,
        isLoading: false,
        testsList: action.testsList,
      }
    case FETCH_QUIZES_ERROR:
      return {
        ...state,
        isLoading: false,
        error: action.error,
      }
    case DELETE_QUIZ:
      return {
        ...state,
        testsList: action.testsList,
      }
    case FETCH_QUESTIONS_START:
      return {
        ...state,
        isLoading: true,
      }
    case FETCH_QUESTIONS_SUCCESS:
      return {
        ...state,
        isLoading: false,
        questions: action.questions,
      }
    default:
      return state
  }
}
