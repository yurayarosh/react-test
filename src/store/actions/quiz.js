import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  DELETE_QUIZ,
  FETCH_QUESTIONS_START,
  FETCH_QUESTIONS_SUCCESS
} from './actoinTypes'
import { BASE_QUIZ_URL } from '../../helpers/fetch/quizes'

export function fetchQuizes() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const response = await fetch( `${BASE_QUIZ_URL}/quizes.json`)
      const data = await response.json()

      const quizes = []
      Object.keys(data).forEach((name, i) => {
        const currentTest = Object.values(data)[i]
        quizes.push({
          id: name,
          title: currentTest.title,
          questions: currentTest.questions,
        })
      })

      dispatch(fetchQuizesSuccess(quizes))
    } catch (error) {
      dispatch(fetchQuizesError(error))
    }
  }
}

export function fetchQuizesStart() {
  return {
    type: FETCH_QUIZES_START,
  }
}

export function fetchQuizesSuccess(testsList) {
  return {
    testsList,
    type: FETCH_QUIZES_SUCCESS,
  }
}

export function fetchQuizesError(error) {
  return {
    error,
    type: FETCH_QUIZES_ERROR,
  }
}

export function deleteQuiz(id, list) {
  return async dispatch => {
    try {
      await fetch(`${BASE_QUIZ_URL}/quizes/${id}.json`, {
        method: 'DELETE'
      })

      const updatedList = list.filter(test => test.id !== id)
      dispatch({
        type: DELETE_QUIZ,
        testsList: updatedList,
      })
    } catch (error) {
      console.error(error)
    }
  }
}

export function fetchQuestions(id) {
  return async dispatch => {
    dispatch(fetchQuestionsStart())
    try {
      const response = await fetch(`${BASE_QUIZ_URL}/quizes.json`)
      const data = await response.json()

      const test = data[id]
      if (!test) return

      const questions = test.questions
      
      dispatch(fetchQuestionsSuccess(questions))
    } catch (error) {
      console.error(error);
    }
  }
}

export function fetchQuestionsStart() {
  return {
    type: FETCH_QUESTIONS_START
  }
}

export function fetchQuestionsSuccess(questions) {
  return {
    questions,
    type: FETCH_QUESTIONS_SUCCESS
  }
}
