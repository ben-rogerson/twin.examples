import React from 'react'
import { createRoot } from 'react-dom/client'
import GlobalStyles from './styles/GlobalStyles'
import Examples from './Examples'

const container = document.getElementById('root')
const root = createRoot(container!)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <Examples />
  </React.StrictMode>,
)
