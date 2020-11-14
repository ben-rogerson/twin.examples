/** @jsx jsx */
import { jsx } from '@emotion/react'
// eslint-disable-line needed below for react fragments <></>
// <React.Fragment> can be used instead
import React from 'react' // eslint-disable-line
import tw, { GlobalStyles } from 'twin.macro'
import { Button, Logo } from './components'

const App = () => (
  <>
    <GlobalStyles />
    <div
      css={[
        tw`flex flex-col items-center justify-center h-screen`,
        tw`bg-gradient-to-b from-electric to-ribbon`
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary>Submit</Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div>
  </>
)

export default App
