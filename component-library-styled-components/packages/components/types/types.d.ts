import 'twin.macro'
import styledImport, { CSSProp, css as cssImport } from 'styled-components'

// Allow the 'as' prop for styled-components
declare global {
  namespace JSX {
    interface IntrinsicAttributes<T> extends DOMAttributes<T> {
      as?: string
    }
  }
}

// Allow interpolation: css`${MyStyledComponent}:hover & { //... }`
type Interpolation = ObjectInterpolation<undefined>

declare module 'twin.macro' {
  // The styled and css imports
  const styled: typeof styledImport | Interpolation
  const css: typeof cssImport | Interpolation
}

declare module 'react' {
  // The css prop
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp | Interpolation
  }
  // The inline svg css prop
  interface SVGProps<T> extends SVGProps<SVGSVGElement> {
    css?: CSSProp | Interpolation
  }
}
