import React from 'react'
import { Story, Meta } from '@storybook/react'
import { mEntry } from '@masonite/svg-icons'
import Icon from './react'

const Template = (args) => <Icon svg={mEntry} />

export default {
  title: 'Icon',
  component: Icon,
} as Meta


export const Primary = Template.bind({})
