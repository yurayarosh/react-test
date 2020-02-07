import React, { Component } from 'react'
import './Test.sass'
import Question from './Question/Question'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../store/actions/quiz'

class Test extends Component {
  state = {
    questions: [...this.props.questions],
    allowAnswer: true,
    current: 0,
    isFinished: false,
  }

  handleAnswerClick(answer) {
    const { allowAnswer, current, questions } = this.state

    this.setState({
      allowAnswer: false,
    })

    if (!allowAnswer) return
    if (current > this.state.questions.length) return

    const questionsList = [...questions]
    questionsList[current].currentAnswer = answer.id
    answer.isHandling = true

    this.setState({
      questions: questionsList,
    })

    const next = current + 1
    setTimeout(() => {
      answer.isHandling = false

      if (current === questions.length - 1) {
        this.setState({
          isFinished: true,
        })
      } else {
        this.setState({
          current: next,
        })
      }

      this.setState({
        allowAnswer: true,
      })
    }, 500)
  }

  handleBtnClick() {
    this.setState({
      isFinished: false,
      current: 0,
      questions: [...this.props.questions],
    })
  }

  async componentDidMount() {
    await this.props.fetchQuestions(this.props.match.params.id)

    this.setState({
      questions: this.props.questions,
    })
  }

  render() {
    return (
      <div className="test">
        <div className="test__title">
          <h2 className="title title--h2">Answer to the questions</h2>
        </div>

        <div className="test__question">
          {!this.props.isLoading && this.props.questions.length > 0 ? (
            <Question
              questions={this.state.questions}
              current={this.state.current}
              isFinished={this.state.isFinished}
              handleAnswerClick={this.handleAnswerClick.bind(this)}
              handleBtnClick={this.handleBtnClick.bind(this)}
            />
          ) : (
            'loading...'
          )}
        </div>
      </div>
    )
  }
}

function mapStateToProps(state) {
  return {
    questions: state.quiz.questions,
    isLoading: state.quiz.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuestions: id => dispatch(fetchQuestions(id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Test)
