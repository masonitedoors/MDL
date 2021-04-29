import React from 'react'
import { Story, Meta } from '@storybook/react'
import Button from './react'

const Template = (args) => <Button {...args} />

export default {
  title: 'Button',
  component: Button,
} as Meta


export const Primary = Template.bind({})

Primary.args = {
  children: 'Lorem Button'
}
