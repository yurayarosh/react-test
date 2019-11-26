import React from 'react'
import './Question.sass'

export default props => {
  const { questions, current, update, state } = props
  let allowAnswer = true

  function handleClick(answerId, e) {
    if (!allowAnswer) return
    if (current > questions.length) return
    allowAnswer = false
    const questionsList = [...state.testQuestions.list]
    questionsList[current].answer = answerId

    const cls = []
    answerId === state.testQuestions.list[current].rightAnswer
      ? cls.push('is-correct')
      : cls.push('is-incorrect')

    const next = current + 1
    const timeout = window.setTimeout(() => {
      if (current === questions.length - 1) {
        update({
          testQuestions: {
            current: state.testQuestions.current,
            isFinished: true,
            list: state.testQuestions.list
          }
        })
      } else {
        update({
          testQuestions: {
            current: next,
            isFinished: state.testQuestions.isFinished,
            list: questionsList
          }
        })
      }

      allowAnswer = true
      window.clearTimeout(timeout)
    }, 500)

    e.target.classList.add(cls.join(' '))
  }

  return (
    <div className="question">
      {
        !state.testQuestions.isFinished ?
          <>
            <div className="question__title">
              <h3 className="title title--h3">{questions[current].title}?</h3>
            </div>

            <div className="question__questions">
              {
                questions[current].questions.map((question, i) =>
                  <div
                    key={i}
                    className="question__question"
                    onClick={handleClick.bind(this, question.id)}
                  >{`${i + 1}. ${question.title}`}</div>
                )
              }
            </div>
          </>
          :
          <div className="question__done">
            <div className="question__title">
              <h2 className="title title--h2">Congratulations all done</h2>
            </div>
            {
              questions.map((question, i) => {
                const correct = question.answer === question.rightAnswer
                const cls = []
                correct ? cls.push('is-correct') : cls.push('is-incorrect')
                return (
                  <div key={i} className={`question__result ${cls.join(' ')}`}>
                    {i + 1}. &nbsp;
                    {question.title}: {correct ? 'correct' : 'incorrect'}
                  </div>
                )
              })
            }
          </div>
      }
    </div>
  )
}