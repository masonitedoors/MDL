import React from 'react'
import { storiesOf } from '@storybook/react'
import AnimatedMasoniteLogo from './index'
import Readme from './react.README.md'

const stories = storiesOf('AnimatedMasoniteLogo', module)

stories
  .addParameters({ readme: { sidebar: Readme } })
  .add('Default', () => <AnimatedMasoniteLogo />)
