import React, { Component } from 'react'
import './Test.sass'
import Question from './Question/Question'
import axios from 'axios'
// import tests from '../../data/questions'

export default class Test extends Component {
  state = {
    questions: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios.get('https://react-test-c7da4.firebaseio.com/quizes.json').then(responce => {
      const test = responce.data[this.props.match.params.id]
      if (!test) return

      const questions = test.questions

      this.setState({
        questions,
        isLoaded: true,
      })
    })
  }

  render() {
    return (
      <div className="test">
        <div className="test__title">
          <h2 className="title title--h2">Answer to the questions</h2>
        </div>

        <div className="test__question">
          {this.state.questions.length > 0 ? (
            <Question questions={this.state.questions} />
          ) : (
            'loading...'
          )}
        </div>
      </div>
    )
  }
}
