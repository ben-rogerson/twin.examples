import React from 'react'
import tw, { theme } from 'twin.macro'
import { Logo, Button } from './../components'
import { styled } from './../stitches.config'

const Container = styled('div', {
  ...tw`flex flex-col items-center justify-center h-screen`,
  variants: {
    hasBackground: {
      true: {
        // TODO: No current support for gradient classes - short term workaround: css + theme import
        backgroundImage: `linear-gradient(to bottom, ${theme`colors.electric`}, ${theme`colors.ribbon`})`,
      },
    },
  },
})

const ButtonBox = styled('div', tw`flex flex-col justify-center h-full gap-y-5`)

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
