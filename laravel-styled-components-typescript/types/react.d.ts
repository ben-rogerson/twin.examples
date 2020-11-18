// https://github.com/styled-components/styled-components/issues/2528#issuecomment-509780963

import { CSSProp } from 'styled-components'

declare module 'react' {
  interface HTMLAttributes<T> extends DOMAttributes<T> {
    css?: CSSProp
  }
}
