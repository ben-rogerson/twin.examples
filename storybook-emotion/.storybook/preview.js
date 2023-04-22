import React from 'react'
import { theme } from 'twin.macro' //what is GlobalStyles in twin.macro for? Wasn't able to find out. But it's not
                                   // these GlobalStyles we need here for the example to work
import GlobalStyles from '../src/styles/GlobalStyles' //that was one of the probs the example didn't work
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
  controls: { expanded: true },
}

export const decorators = [
  Story => (
    <CacheProvider value={cache}>
      <GlobalStyles />
      <Story />
    </CacheProvider>
  ),
]
