import React from 'react'
import { render } from 'react-dom'
import { GlobalStyles } from 'twin.macro'

import App from './App'
render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('root'),
)
