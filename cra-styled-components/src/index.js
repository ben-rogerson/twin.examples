import React from 'react'
import GlobalStyles from './styles/GlobalStyles'
import App from './App'
import { createRoot } from 'react-dom/client'

const container = document.getElementById('root')
const root = createRoot(container)
root.render(
  <React.StrictMode>
    <GlobalStyles />
    <App />
  </React.StrictMode>,
)
