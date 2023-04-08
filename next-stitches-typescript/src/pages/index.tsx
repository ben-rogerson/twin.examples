import tw, { styled } from 'twin.macro'
import { Logo, Button } from '../components'

const Container = styled.div({
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
})

const ButtonBox = tw.div`flex flex-col justify-center h-full gap-y-5`

const IndexPage = () => (
  <Container hasBackground>
    <ButtonBox>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </ButtonBox>
    <Logo />
  </Container>
)

export default IndexPage
