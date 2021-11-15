import React from 'react'
import ReactDOM from 'react-dom'
import GlobalStyles from './styles/GlobalStyles'
import Examples from './Examples'

ReactDOM.render(
  <React.StrictMode>
    <GlobalStyles />
    <Examples />
  </React.StrictMode>,
  document.getElementById('root'),
)
