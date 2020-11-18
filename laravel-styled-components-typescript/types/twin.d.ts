import 'twin.macro'
import styledComponent, { css as cssProperty } from 'styled-components'

declare module 'twin.macro' {
  const css: typeof cssProperty
  const styled: typeof styledComponent
}
