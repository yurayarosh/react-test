import React from 'react'
import Test from '../../components/Test/Test'
import tests from '../../data/questions'
import { Link } from 'react-router-dom'
import './questions-test.sass'

export default class QustionsTest extends React.Component {
  render() {
    return (
      <section className="section">
        <h1 className="title title--h1 section__title">Select your test</h1>
        <ul className="tests-list">
          {tests.map((test, i) => {
            // console.log(this.props.match.params)

            return (
              <li key={i} className="tests-list__item">
                <Link to="questions-test/:name" className="tests-list__link">
                  {test.title}
                </Link>
                {/* <a href="#" className="tests-list__link">
                
              </a> */}
              </li>
            )
          })}

          <Test
            questions={this.props.state.testQuestions.list}
            currentQuestion={this.props.state.testQuestions.current}
            update={this.props.updateState}
            state={this.props.state}
          />
        </ul>
      </section>
    )
  }
}

// export default props => {
//   // const { state, updateState } = props

//   return (
//     <section className="section">
//       <h1 className="title title--h1 section__title">Select your test</h1>
//       <ul className="tests-list">
//         {tests.map((test, i) => {
//           return (
//             <li key={i} className="tests-list__item">
//               <Link
//                 to="questions-test/:1"
//                 exact
//                 className="tests-list__link"
//               >
//               {test.title}
//               </Link>
//               {/* <a href="#" className="tests-list__link">

//               </a> */}
//             </li>
//           )
//         })}
//       </ul>
//     </section>
//     // <Test
//     //   questions={state.testQuestions.list}
//     //   currentQuestion={state.testQuestions.current}
//     //   update={updateState}
//     //   state={state}
//     // />
//   )
// }
