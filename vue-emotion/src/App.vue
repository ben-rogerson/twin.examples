<template>
  <Wrap>
    <ButtonList>
      <Button isPrimary>Submit</Button>
      <Button isSecondary>Cancel</Button>
      <Button isSmall>Close</Button>
    </ButtonList>
    <Logo/>
  </Wrap>
</template>

<script>
/**
 * This experimental vue demo has limitations
 * 
 * Props
 * ✕ tw prop: tw="..." / tw={...}
 * ✕ css prop: tw="..." / tw={...}
 * 
 * Imports
 * ✓ tw import: tw`...`
 * ✕ tw.div / tw('div')``
 * ✓ styled import: styled('div')`` / styled('div')(...) / styled('div')([...])
 * ✓ theme import: theme`...`
 * ✕ css import: css`...`

 *
 * @egoist/vue-emotion supplies the functionality
 * for the theme import:
 * https://github.com/egoist/vue-emotion
 */

import tw, { styled } from 'twin.macro'
import { Button, Logo } from './components'
import 'tailwindcss/dist/base.min.css'

const Wrap = styled('div')`
  ${tw`h-screen flex flex-col items-center justify-center`}
  ${tw`bg-gradient-to-b from-electric to-ribbon`};
`

const ButtonList = styled('div')(
  tw`flex flex-col justify-center h-full space-y-5`
)

export default {
  name: 'AppView',
  components: {
    Wrap,
    ButtonList,
    Button,
    Logo
  }
}
</script>
