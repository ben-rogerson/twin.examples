import React from 'react'
import tw from 'twin.macro'
import { Button, Logo, Layout } from '../components'

const App = () => (
  <Layout>
    <div tw="flex flex-col justify-center h-full space-y-5">
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </div>
    <Logo />
  </Layout>
)

export default App
