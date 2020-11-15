import React from 'react'
import { GlobalStyles } from 'twin.macro'

const Layout = ({ children }) => (
  <>
    <GlobalStyles />
    {children}
  </>
)

export default Layout
