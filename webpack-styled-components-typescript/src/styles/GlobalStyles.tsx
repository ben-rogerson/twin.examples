import React from 'react'
import { createGlobalStyle } from 'styled-components'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const CustomStyles = createGlobalStyle({
  body: {
    ...tw`antialiased`,
    WebkitTapHighlightColor: theme`colors.purple.500`,
  },
})

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <CustomStyles />
  </>
)

export default GlobalStyles
