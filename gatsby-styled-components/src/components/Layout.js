import React from 'react'
import GlobalStyles from './GlobalStyles'
import tw from 'twin.macro'

const Layout = ({ children }) => (
  <div
    css={[
      tw`flex flex-col items-center justify-center h-screen
      bg-gradient-to-b from-electric to-ribbon`,
    ]}
  >
    <GlobalStyles />
    {children}
  </div>
)

export default Layout
