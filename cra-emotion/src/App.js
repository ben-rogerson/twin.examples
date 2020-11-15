/** @jsx jsx */
import { jsx } from '@emotion/react'
// The pragma above is so this example works in CodeSandbox.
// Swap it with the new pragma when you're not using CodeSandbox:
// /** @jsxImportSource @emotion/react */

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
