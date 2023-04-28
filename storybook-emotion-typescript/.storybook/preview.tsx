import { Preview } from '@storybook/react'
import GlobalStyles from './../src/styles/GlobalStyles'
import { theme } from 'twin.macro'

const preview: Preview = {
  parameters: {
    actions: { argTypesRegex: '^on[A-Z].*' },
    controls: {
      matchers: {
        color: /(background|color)$/i,
        date: /Date$/,
      },
      expanded: true,
    },
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
  },
  decorators: [
    Story => (
      <>
        <GlobalStyles />
        <Story />
      </>
    ),
  ],
}

export default preview
