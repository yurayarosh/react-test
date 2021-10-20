import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App'
import store from './store'
import { Provider } from 'react-redux'

import './assets/styles/app.scss'

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrate(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
} else {
  render(
    <Provider store={store}>
      <App />
    </Provider>,
    rootElement
  )
}
