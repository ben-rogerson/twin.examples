import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import Button from './Button'

export default {
  title: 'Button',
  component: Button,
  argTypes: {
    variant: {
      description: 'The type of button',
      type: 'inline-radio',
      control: {
        type: 'inline-radio',
        options: ['primary', 'secondary'],
      },
    },
    isSmall: {
      description: 'A small version of the button',
      type: 'boolean',
    },
    children: {
      description: 'The button content',
      defaultValue: 'Button',
      type: { name: 'text', required: true },
    },
  },
}

const Template: Story = props => <Button {...props} />

export const Primary = Template.bind({})
Primary.args = { variant: 'primary' }

export const Secondary = Template.bind({})
Secondary.args = { variant: 'secondary' }

export const Small = Template.bind({})
Small.args = { isSmall: true }
