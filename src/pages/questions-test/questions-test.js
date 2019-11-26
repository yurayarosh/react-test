import React from 'react'
import Layout from '../../layouts/Layout'
import Test from '../../components/Test/Test'

export default props => {
  const { state, updateState } = props

  return(
    <Layout>
      <Test
        questions={state.testQuestions.list}
        currentQuestion={state.testQuestions.current}
        update={updateState}
        state={state}
      />
    </Layout>
  )
}