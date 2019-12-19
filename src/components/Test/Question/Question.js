import React from 'react'
import './Question.sass'
import { IS_CORRECT, IS_INCORRECT } from '../../../helpers/constants'

let allowAnswer = true

export default props => {
  const { questions, current, update, state } = props

  function handleClick(answer) {
    if (!allowAnswer) return
    if (current > questions.length) return
    allowAnswer = false
    const questionsList = [...state.testQuestions.list]
    questionsList[current].currentAnswer = answer.id
    answer.isHandling = true

    update({
      testQuestions: {
        ...state.testQuestions,
      },
    })

    const next = current + 1
    const timeout = window.setTimeout(() => {
      answer.isHandling = false
      if (current === questions.length - 1) {
        update({
          testQuestions: {
            ...state.testQuestions,
            isFinished: true,
          },
        })
      } else {
        update({
          testQuestions: {
            ...state.testQuestions,
            current: next,
            list: questionsList,
          },
        })
      }

      allowAnswer = true
      window.clearTimeout(timeout)
    }, 500)
  }

  return (
    <div className="question">
      {!state.testQuestions.isFinished ? (
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
                  onClick={handleClick.bind(this, answer)}
                >{`${i + 1}. ${answer.title}`}</div>
              )
            })}
          </div>
        </>
      ) : (
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
                {question.title}: {isCorrect ? 'correct' : 'incorrect'} ({rightAnswer.title})
              </div>
            )
          })}
        </div>
      )}
    </div>
  )
}
