import React from 'react'
import { GlobalStyles } from 'twin.macro'

const Layout = ({ children }) => (
  <div>
    <GlobalStyles />
    {children}
  </div>
)

export default Layout
