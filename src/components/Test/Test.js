import React from 'react'
import './Test.sass'
import Question from '../Question/Question';
import testQuestions from '../../data/questions'

export default props => {
  const { questions, currentQuestion, update, state } = props
  function handleBtnClick() {
    update({
      testQuestions: {
        current: 0,
        isFinished: false,
        list: testQuestions
      }
    })
  }
  return (
    <div className="test">
      <div className="test__title">
        <h2 className="title title--h2">Answer to questions</h2>
      </div>

      <div className="test__question">
        <Question
          questions={questions}
          current={currentQuestion}
          update={update}
          state={state}
        />

        {
          !state.testQuestions.isFinished ?
            <div className="test__question-bottom">
              {`${currentQuestion + 1} from ${questions.length}`}
            </div>
            : 
            <div className="test__question-bottom">
              <button className="btn" onClick={handleBtnClick}>try again</button>
            </div>
        }

      </div>
    </div>
  )
}