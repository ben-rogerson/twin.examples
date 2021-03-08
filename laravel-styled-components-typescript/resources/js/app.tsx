import React from 'react'
import { render } from 'react-dom'
import tw from 'twin.macro'
import GlobalStyles from './styles/GlobalStyles'
import { Button, Logo } from './components'

const styles = {
  // Move long class sets out of jsx to keep it scannable
  container: ({ hasBackground }: { hasBackground: boolean }) => [
    tw`flex flex-col items-center justify-center h-screen`,
    hasBackground && tw`bg-gradient-to-b from-electric to-ribbon`,
  ],
}

const App = () => (
  <div css={styles.container({ hasBackground: true })}>
    <div tw="flex flex-col justify-center h-full gap-y-5">
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </div>
)

render(
  <>
    <GlobalStyles />
    <App />
  </>,
  document.getElementById('app'),
)
