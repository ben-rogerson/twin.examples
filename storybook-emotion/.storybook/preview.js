import React from 'react'
import { GlobalStyles, theme } from 'twin.macro'
import { CacheProvider } from '@emotion/react'
import createCache from '@emotion/cache'

const cache = createCache({ prepend: true, key: 'twin' })

export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  layout: 'centered',
  backgrounds: {
    default: 'electric-ribbon',
    values: [
      {
        name: 'electric-ribbon',
        value: `linear-gradient(180deg, ${theme`colors.electric`}, ${theme`colors.ribbon`})`,
      },
    ],
  },
}

export const decorators = [
  Story => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Story />
    </CacheProvider>
  ),
]
