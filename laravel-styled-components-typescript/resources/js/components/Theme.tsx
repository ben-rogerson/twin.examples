import React from 'react'
import { ThemeProvider } from 'styled-components'
import resolveConfig from 'tailwindcss/resolveConfig'
import tailwindConfig from './../../../tailwind.config.js'

const { theme } = resolveConfig(tailwindConfig)

type ThemeProps = {
  children: React.ReactNode
}

const Theme = ({ children }: ThemeProps) => (
  <ThemeProvider {...{ theme, children }} />
)

export default Theme
