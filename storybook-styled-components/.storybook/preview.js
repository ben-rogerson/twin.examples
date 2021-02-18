import React from 'react'
import { GlobalStyles } from 'twin.macro'

export const parameters = {
  backgrounds: {
    default: 'default',
    values: [
      {
        name: 'default',
        value: '#F9F9F9',
      },
    ],
  },
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: { expanded: true },
  options: {
    storySort: (a, b) => {
      // We want the Welcome story at the top
      if (b[1].kind === 'Welcome') {
        return 1
      }

      // Sort the other stories by ID
      // https://github.com/storybookjs/storybook/issues/548#issuecomment-530305279
      return a[1].kind === b[1].kind
        ? 0
        : a[1].id.localeCompare(b[1].id, { numeric: true })
    },
  },
}

export const decorators = [
  Story => (
    <>
      <GlobalStyles />
      <Story />
    </>
  ),
]
