import React, { Component } from 'react'
// import axios from '../../helpers/axios/quizes'
// import Test from '../../components/Test/Test'
// import tests from '../../data/questions'
import { Link } from 'react-router-dom'
import './questions-test.sass'
import { connect } from 'react-redux'
import { fetchQuizes, deleteQuiz } from '../../store/actions/quiz'

class QuestionsTest extends Component {
  componentDidMount() {    
    this.props.fetchQuizes()
  }

  onDeleteClick(id) {
    this.props.deleteQuiz(id, this.props.testsList)
  //   axios
  //     .delete(`/quizes/${id}.json`)
  //     .then(() => {
  //       const updatedList = this.state.testsList.filter(test => test.id !== id)
  //       this.setState({
  //         testsList: updatedList,
  //       })
  //     })
  //     .catch(error => {
  //       console.error(error)
  //     })
  }

  render() {
    return (
      <section className="section">
        <h1 className="title title--h1 section__title">Select your test</h1>
        <ul className="tests-list">
          {!this.props.isLoading && this.props.testsList.length > 0
            ? this.props.testsList.map((test, i) => {
                return (
                  <li key={i} className="tests-list__item">
                    <Link to={`/questions-test/${test.id}`} className="tests-list__link">
                      {test.title}
                    </Link>
                    <button
                      onClick={this.onDeleteClick.bind(this, test.id)}
                      className="tests-list__delete"
                    >
                      x
                    </button>
                  </li>
                )
              })
            : 'loading...'}
        </ul>
      </section>
    )
  }
}

function mapStateToProps(state) {
  return {
    testsList: state.quiz.testsList,
    isLoading: state.quiz.isLoading,
  }
}

function mapDispatchToProps(dispatch) {
  return {
    fetchQuizes: () => dispatch(fetchQuizes()),
    deleteQuiz: (id, list) => dispatch(deleteQuiz(id, list)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(QuestionsTest)
