import React from 'react'
import { storiesOf } from '@storybook/react'
import SmallTitle from './react'
import Readme from './react.README.md'

storiesOf('SmallTitle', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => <SmallTitle>Small Title</SmallTitle>)
