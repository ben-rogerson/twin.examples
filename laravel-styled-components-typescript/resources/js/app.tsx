import React from 'react'
import { render } from 'react-dom'
import tw, { css } from 'twin.macro'
import { Theme, Button, Logo } from './components'
import 'tailwindcss/dist/base.min.css'

const App = () => (
  <Theme>
    <div
      css={[
        tw`flex flex-col items-center justify-center`,
        /* Combine regular css and tailwind styles within backticks */
        css`
          background: linear-gradient(#db00ff, #0047ff);
          ${tw`h-screen`}
        `
      ]}
    >
      <div tw="flex flex-col justify-center h-full space-y-5">
        <Button isPrimary>Submit</Button>
        <Button isSecondary>Cancel</Button>
        <Button isSmall>Close</Button>
      </div>
      <Logo />
    </div>
  </Theme>
)

render(<App />, document.getElementById('app'))
