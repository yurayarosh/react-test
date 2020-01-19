import React, { Component } from 'react'
import axios from '../../helpers/axios/quizes'
// import Test from '../../components/Test/Test'
// import tests from '../../data/questions'
import { Link } from 'react-router-dom'
import './questions-test.sass'

export default class QuestionsTest extends Component {
  state = {
    testsList: [],
    isLoaded: false,
  }

  componentDidMount() {
    axios
      .get('/quizes.json')
      .then(responce => {
        if (!responce.data) return

        const quizes = []
        Object.keys(responce.data).forEach((name, i) => {
          const currentTest = Object.values(responce.data)[i]
          quizes.push({
            id: name,
            title: currentTest.title,
            questions: currentTest.questions,
          })
        })

        this.setState({
          testsList: quizes,
          isLoaded: true,
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  onDeleteClick(id) {
    axios
      .delete(`/quizes/${id}.json`)
      .then(() => {
        const updatedList = this.state.testsList.filter(test => test.id !== id)
        this.setState({
          testsList: updatedList,
        })
      })
      .catch(error => {
        console.error(error)
      })
  }

  render() {
    return (
      <section className="section">
        <h1 className="title title--h1 section__title">Select your test</h1>
        <ul className="tests-list">
          {this.state.isLoaded
            ? this.state.testsList.map((test, i) => {
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
