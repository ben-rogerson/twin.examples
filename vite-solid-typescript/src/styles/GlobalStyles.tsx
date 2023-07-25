import { StylesArg, createGlobalStyles } from 'solid-styled-components'
import tw, { theme, globalStyles } from 'twin.macro'
import merge from 'ts-deepmerge'

const CustomStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const GlobalStyles = createGlobalStyles(
  merge(globalStyles, CustomStyles) as StylesArg,
)

export default GlobalStyles
