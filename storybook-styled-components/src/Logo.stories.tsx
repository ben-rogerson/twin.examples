import React from 'react'
import { Story } from '@storybook/react/types-6-0'
import { Logo } from './Logo'

export default {
  title: 'Logo',
  component: Logo,
}

export const Default: Story = props => <Logo {...props} />
