import React from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
// import { Transition } from 'react-transition-group'
// import {
//   BrowserRouter as Router,
//   Switch,
//   Route
// } from 'react-router-dom'
// import Home from '../pages/home/home'
// import About from '../pages/about/about'
// import Blog from '../pages/blog/blog'
// import QuestionsTest from '../pages/questions-test/questions-test'

export default props => {
  // const [inProp] = useState(false)
  // const { state, update } = props

  // function handleEnter() {
  //   console.log('enter');
  // }

  // const handleEntering = () => {
  //   console.log('entering');
  // }

  return (
    <div className="out">
      <Header />

      {/* <Transition in={inProp} timeout={500} onEnter={handleEnter} onEntering={handleEntering}>
        {state =>
          <main className={`main fade fade-${state}`}>
            {props.children}
          </main>
        }
      </Transition> */}

      <main className="main">
        {props.children}
      </main>

      <Footer />
    </div>
  )
}
