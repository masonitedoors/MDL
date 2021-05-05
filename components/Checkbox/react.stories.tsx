import React from 'react'
import Checkbox from './react'

const Template = (args) => <Checkbox {...args} />

export default {
  title: 'Checkbox',
  component: Checkbox,
} as Meta


export const Primary = Template.bind({})

Primary.args = {
  children: 'Lorem Button'
}
