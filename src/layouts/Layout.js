import React, { useState } from 'react'
import Header from '../components/Header/Header'
import Footer from '../components/Footer/Footer'
import { Transition } from 'react-transition-group'

export default props => {
  const [inProp] = useState(false)

  function handleEnter() {
    console.log('enter');    
  }

  const handleEntering = () => {
    console.log('entering');
  }

  return (
    <div className="out">
      <Header />

      <Transition in={inProp} timeout={500} onEnter={handleEnter} onEntering={handleEntering}>
        {state =>
          <main className={`main fade fade-${state}`}>
            {props.children}
          </main>
        }
      </Transition>

      <Footer />
    </div>
  )
}
