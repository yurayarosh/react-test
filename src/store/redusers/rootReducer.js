import { combineReducers } from 'redux'
import quizReducer from './quiz'
import authReducer from './authReducer'

export default combineReducers({
  quiz: quizReducer,
  auth: authReducer,
})
