import React, { useState } from 'react'
import './Question.sass'
import { IS_CORRECT, IS_INCORRECT } from '../../../helpers/constants'
import Btn from '../../Form/Btn/Btn'
import { Link } from 'react-router-dom'

let allowAnswer = true

export default props => {
  const { questions } = props
  const [isFinished, setFinished] = useState(false)
  const [current, setCurrent] = useState(0)
  const [questionsList, setQuestionsList] = useState([...questions])
  const [isAnswering, setAnswering] = useState(false)

  function handleAnswerClick(answer) {
    if (!allowAnswer) return
    if (current > questions.length) return
    allowAnswer = false
    // const questionsList = [...questions]
    questionsList[current].currentAnswer = answer.id
    setAnswering(!isAnswering) // true
    answer.isHandling = true

    setQuestionsList(questionsList)

    const next = current + 1
    const timeout = window.setTimeout(() => {
      setAnswering(!isAnswering) // false
      answer.isHandling = false

      if (current === questions.length - 1) {
        setFinished(true)
      } else {
        setCurrent(next)
      }

      allowAnswer = true
      window.clearTimeout(timeout)
    }, 500)
  }
  function handleBtnClick() {
    setFinished(false)
    setCurrent(0)
    setQuestionsList(questionsList)
  }

  return (
    <div className="question">
      {!isFinished ? (
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
