import { h } from 'preact' // codesandbox requires this import
import tw, { styled } from 'twin.macro'
import { Button, Logo } from './components'

const Container = tw.div`flex flex-col items-center justify-center h-screen
  bg-gradient-to-b from-electric to-ribbon`

const ButtonList = tw.div`flex flex-col justify-center h-full space-y-5`

const App = () => (
  <Container>
    <ButtonList>
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </ButtonList>
    <Logo />
  </Container>
)

export default App
