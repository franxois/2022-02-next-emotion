import '@emotion/react'
import { theme } from '../pages/_app'

type MyTheme = typeof theme

declare module '@emotion/react' {
  export interface Theme extends MyTheme {}
}
