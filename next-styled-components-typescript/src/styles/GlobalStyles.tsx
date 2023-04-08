import React from 'react'
import { createGlobalStyle, CSSObject } from 'styled-components'
import tw, { theme, globalStyles } from 'twin.macro'

const GlobalStyles = createGlobalStyle({
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
  ...(globalStyles as CSSObject),
})

export default GlobalStyles
