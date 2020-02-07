import React from 'react'
import './Question.sass'
import { IS_CORRECT, IS_INCORRECT } from '../../../helpers/constants'
import Btn from '../../Form/Btn/Btn'
import { Link } from 'react-router-dom'

export default props => {
  const { questions, current, handleAnswerClick, handleBtnClick, isFinished } = props

  return (
    <div className="question">
      {!isFinished && questions.length > 0 ? (
        <>
          <div className="question__title">
            <h3 className="title title--h3">{questions[current].title}?</h3>
          </div>

          <div className="question__answers">
            {questions[current].answers.map((answer, i) => {
              const isCorrect = answer.id === questions[current].rightAnswer
              const className = ['question__answer']

              if (answer.isHandling && isCorrect) {
                className.push(`question__answer--${IS_CORRECT}`)
              } else if (answer.isHandling && !isCorrect) {
                className.push(`question__answer--${IS_INCORRECT}`)
              }

              return (
                <div
                  key={i}
                  className={className.join(' ')}
                  onClick={handleAnswerClick.bind(this, answer)}
                >{`${i + 1}. ${answer.title}`}</div>
              )
            })}
          </div>

          <div className="question__bottom">
            <div className="question__btn">{`${current + 1} from ${questions.length}`}</div>
            <Link to={`/questions-test`} className="question__btn btn">
              Back to tests list
            </Link>
          </div>
        </>
      ) : (
        <>
          <div className="question__done">
            <div className="question__title">
              <h2 className="title title--h2">Congratulations! All done</h2>
            </div>
            {questions.map((question, i) => {
              const isCorrect = question.currentAnswer === question.rightAnswer
              const className = []
              isCorrect
                ? className.push(`question__result--${IS_CORRECT}`)
                : className.push(`question__result--${IS_INCORRECT}`)
              const [rightAnswer] = question.answers.filter(
                answer => answer.id === question.rightAnswer
              )

              return (
                <div key={i} className={`question__result ${className.join(' ')}`}>
                  {i + 1}. &nbsp;
                  {question.title}: {isCorrect ? IS_CORRECT : IS_INCORRECT} ({rightAnswer.title})
                </div>
              )
            })}
          </div>
          <div className="question__bottom">
            <Btn mod="question__btn" onClickHandler={handleBtnClick}>
              try again
            </Btn>
            <Link to={`/questions-test`} className="question__btn btn">
              Back to tests list
            </Link>
          </div>
        </>
      )}
    </div>
  )
}
