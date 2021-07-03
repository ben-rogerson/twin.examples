import tw, { theme, globalStyles } from 'twin.macro'
import { global } from '../stitches.config'

const customStyles = {
  body: {
    WebkitTapHighlightColor: theme`colors.purple.500`,
    ...tw`antialiased`,
  },
}

const styles = () => {
  global(customStyles)()
  global(globalStyles)()
}

export default styles
