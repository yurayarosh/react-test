import React from 'react'
import './Test.sass'
import Question from './Question/Question'
import tests from '../../data/questions'
import Btn from '../Btn/Btn'

export default props => {

  const [test] = tests.filter(tst => tst.id === props.match.params.id)

  return (
    <div className="test">
      <div className="test__title">
        <h2 className="title title--h2">Answer to the questions</h2>
      </div>

      <div className="test__question">
        <Question questions={test.questions} />
      </div>
    </div>
  )
}
