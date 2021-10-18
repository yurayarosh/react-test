import React from 'react'
import { render, hydrate } from 'react-dom'
import App from './App'
import './assets/styles/app.scss'

// render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>,
//   document.getElementById('root')
// )

const rootElement = document.getElementById('root')

if (rootElement.hasChildNodes()) {
  hydrate(<App />, rootElement)
} else {
  render(<App />, rootElement)
}
