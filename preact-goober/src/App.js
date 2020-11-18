import { createElement } from 'preact/compat'
import tw, { styled, GlobalStyles } from 'twin.macro'
import { Button, Logo } from './components'

// Setup should be called just once in your app entry file
import { setup } from 'goober'
setup(createElement)

const Container = styled.div([
  tw`flex flex-col items-center justify-center h-screen`,
  tw`bg-gradient-to-b from-electric to-ribbon`
])

const ButtonList = styled.div(tw`flex flex-col justify-center h-full space-y-5`)

const App = () => (
  <Container>
    <GlobalStyles />
    <ButtonList>
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </ButtonList>
    <Logo />
  </Container>
)

export default App
