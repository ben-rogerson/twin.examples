import React from 'react'
import tw from 'twin.macro'
import { Button, Logo } from './components'

// Move long class sets to variables to keep jsx scannable
const stylesApp = tw`
  flex flex-col items-center justify-center h-screen
  bg-gradient-to-b from-electric to-ribbon
`

const App = () => (
  <div css={stylesApp}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

export default App
