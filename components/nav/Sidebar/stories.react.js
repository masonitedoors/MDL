import React, { Fragment } from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import Sidebar from './react'

storiesOf('Nav/Sidebar', module)
  .addDecorator(withKnobs)
  .add('Default', () => <Sidebar />)
