import axios from '../../helpers/axios/quizes'
import {
  FETCH_QUIZES_START,
  FETCH_QUIZES_SUCCESS,
  FETCH_QUIZES_ERROR,
  DELETE_QUIZ,
} from './actoinTypes'

export function fetchQuizes() {
  return async dispatch => {
    dispatch(fetchQuizesStart())
    try {
      const responce = await axios.get('/quizes.json')

      const quizes = []
      Object.keys(responce.data).forEach((name, i) => {
        const currentTest = Object.values(responce.data)[i]
        quizes.push({
          id: name,
          title: currentTest.title,
          questions: currentTest.questions,
        })
      })

      dispatch(fetchQuizesSuccess(quizes))
    } catch (error) {
      dispatch(fetchQuizesError())
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

export function fetchQuizesError() {
  return {
    type: FETCH_QUIZES_ERROR,
  }
}

export function deleteQuiz(id, list) {
  return async dispatch => {    
    try {
      const responce = await axios.delete(`/quizes/${id}.json`)

      const updatedList = list.filter(test => test.id !== id)
      

      dispatch({
        type: DELETE_QUIZ,
        testsList: updatedList
      })
    } catch (error) {
      console.error(error);
    }    
  }
}
