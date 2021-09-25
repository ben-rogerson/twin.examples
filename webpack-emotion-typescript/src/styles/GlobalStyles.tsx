import React from 'react'
import { Global } from '@emotion/react'
import tw, { theme, GlobalStyles as BaseStyles } from 'twin.macro'

const customStyles = {
  body: {
    ...tw`antialiased`,
    WebkitTapHighlightColor: theme`colors.purple.500`,
  },
}

const GlobalStyles = () => (
  <>
    <BaseStyles />
    <Global styles={customStyles} />
  </>
)

export default GlobalStyles
