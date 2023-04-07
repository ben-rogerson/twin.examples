import type { Meta, StoryObj } from '@storybook/react'
import Button from './Button'

const meta: Meta<typeof Button> = {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'The type of button',
      control: 'inline-radio',
      options: ['primary', 'secondary'],
    },
    isSmall: {
      description: 'A small version of the button',
      type: 'boolean',
    },
  },
}

export default meta
type Story = StoryObj<typeof Button>

export const Primary: Story = {
  args: { variant: 'primary', children: 'Primary' },
}

export const Secondary: Story = {
  args: { variant: 'secondary', children: 'Secondary' },
}

export const Small: Story = {
  args: { isSmall: true, children: 'Small' },
}
