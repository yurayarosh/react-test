import React, { Component } from 'react'
import './Test.sass'
import Question from './Question/Question'
import { connect } from 'react-redux'
import { fetchQuestions } from '../../store/actions/quiz'

class Test extends Component {
  componentDidMount() {
    this.props.fetchQuestions(this.props.match.params.id)
  }

  render() {
    return (
      <div className="test">
        <div className="test__title">
          <h2 className="title title--h2">Answer to the questions</h2>
        </div>

        <div className="test__question">
          {!this.props.isLoading && this.props.questions.length > 0 ? (
            <Question questions={this.props.questions} />
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
