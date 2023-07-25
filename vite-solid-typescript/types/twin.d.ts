import 'twin.macro'
import type {
  keyframes,
  styled as styledImport,
  css as cssImport,
} from 'solid-styled-components'
import { TwStyle } from 'twin.macro'
import { CSSInterpolation } from '@emotion/serialize'

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport
  const css: typeof cssImport
}

declare module 'solid-js' {
  namespace JSX {
    // The css/tw props on JSX elements
    interface HTMLAttributes<T> {
      css?: CSSInterpolation
      tw?: string
    }
    // The css/tw props on SVG elements
    interface SvgSVGAttributes<T> {
      css?: CSSInterpolation
      tw?: string
    }
  }
}
