import { DefaultThemeMap } from '@stitches/react'

import tw, { theme, globalStyles } from 'twin.macro'
import { globalCss, CSS } from '../stitches.config'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  globalCss(customStyles)()
  globalCss(globalStyles as Record<any, any>)()
}

export default styles
