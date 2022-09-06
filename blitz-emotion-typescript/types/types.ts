import { Ctx as BlitzCtx } from 'blitz'

declare module 'blitz' {
  export interface Ctx extends BlitzCtx {}
}
