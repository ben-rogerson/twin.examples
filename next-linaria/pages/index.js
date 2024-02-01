import React from 'react'
import { Button, Logo } from '../components'
import { styled } from 'linaria/react'

import tw, { styled as styled2, css } from 'twin.macro'

const Input = styled2.input(({ hasHover }) => [
  `color: purple;`,
  tw`border rounded`,
  hasHover && tw`hover:border-black`
])

const Box = styled.div`
  margin-top: 40px;
  margin-left: 40px;
  height: 200px;
  width: 200px;
  background-color: tomato;
  animation: spin 20s linear infinite;
  @keyframes spin {
    from {
      transform: rotate(0deg);
    }
    to {
      transform: rotate(360deg);
    }
  }
`

// Write your styles in `styled` tag
const Title = styled.h1`
  font-family: serif;
`

const Container = styled.div`
  font-size: 12px;
  padding: 1px;
  color: ${(props) => props.color};
  border: 1px solid red;

  &:hover {
    border-color: blue;
  }

  ${Title} {
    margin-bottom: 24px;
  }
`

function App() {
  return (
    <>
      <Box>Zero runtime CSS in JS</Box>
      <br />
      <br />
      <br />
      <Container color="green">
        <Title>Hello world</Title>
      </Container>
      <br />
      <Input />
      <Input hasHover />
      <div
        css={[
          tw`flex flex-col items-center justify-center h-screen`,
          tw`bg-gradient-to-b from-electric to-ribbon`
        ]}
      >
        <div tw="flex flex-col justify-center h-full space-y-5 ">
          <Button isPrimary>Submit</Button>
          <Button isSecondary>Cancel</Button>
          <Button isSmall>Close</Button>
        </div>
        <Logo />
      </div>
    </>
  )
}

export default App
