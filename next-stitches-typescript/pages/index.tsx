import React from 'react'
import tw from 'twin.macro'
import { Logo, Button } from '../components'
import { styled, css } from '../stitches.config'

const Container = styled('div', {
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: tw`bg-gradient-to-b from-electric to-ribbon`,
    },
  },
})

const ButtonBox = css(tw`flex flex-col justify-center h-full gap-y-5`)

const IndexPage = () => (
  <Container hasBackground>
    <div className={ButtonBox()}>
      <Button variant="primary">Submit</Button>
      <Button variant="secondary">Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </Container>
)

export default IndexPage
