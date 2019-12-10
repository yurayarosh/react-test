import React from 'react'
import Test from '../../components/Test/Test'

export default props => {
  const { state, updateState } = props

  return (
    <Test
      questions={state.testQuestions.list}
      currentQuestion={state.testQuestions.current}
      update={updateState}
      state={state}
    />
  )
}