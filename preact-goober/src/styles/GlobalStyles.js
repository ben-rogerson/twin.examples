import { createGlobalStyles } from 'goober/global'
import tw, { theme, globalStyles } from 'twin.macro'
import merge from 'lodash.merge'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const GlobalStyles = createGlobalStyles(merge(globalStyles, customStyles))

export default GlobalStyles
