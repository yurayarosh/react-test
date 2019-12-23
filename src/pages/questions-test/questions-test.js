import React from 'react'
// import Test from '../../components/Test/Test'
import tests from '../../data/questions'
import { Link } from 'react-router-dom'
import './questions-test.sass'

export default () => {
  return (
    <section className="section">
      <h1 className="title title--h1 section__title">Select your test</h1>
      <ul className="tests-list">
        {tests.map((test, i) => {
          return (
            <li key={i} className="tests-list__item">
              <Link to={`/questions-test/${test.id}`} className="tests-list__link">
                {test.title}
              </Link>
            </li>
          )
        })}
      </ul>
    </section>
  )
}
