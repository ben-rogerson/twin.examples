import React from 'react'
import GlobalStyles from './GlobalStyles'

const Layout = ({ children, ...rest }) => (
  <div {...rest}>
    <GlobalStyles />
    {children}
  </div>
)

export default Layout
