import React, { FC } from 'react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { Checkbox } from './react'
import Readme from './react.README.md'

export const Template = (args) => <Checkbox {...args} />

export default {
  title: 'Checkbox',
  component: Checkbox,
}

export const Example = Template.bind({})

Example.args = {
  checked: true,
}
