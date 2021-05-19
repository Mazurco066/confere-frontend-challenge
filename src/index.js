// Dependencies
import React from 'react'
import ReactDOM from 'react-dom'
import { App } from 'pages'
import reportWebVitals from './reportWebVitals'

// React DOM Rendering
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)

// Performance measure, if you want to activate it put a console.log inside
reportWebVitals()
