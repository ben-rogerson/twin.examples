import React from 'react'
import { GlobalStyles } from 'twin.macro'

const App = ({ Component, pageProps }) => (
  <>
    <GlobalStyles />
    <Component {...pageProps} />
  </>
)

export default App
