import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs'
import centered from '@storybook/addon-centered/react'
import { withState } from '@dump247/storybook-state'
import Tile from './react'
import Readme from './react.README.md'

storiesOf('Tile', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(centered)
  .add(
    'default',
    withState({ value: '' })(({ store }) => (
      <React.Fragment>
        <Tile label="The Tile Component" />
        <Tile label="The Tile Component" selected />
      </React.Fragment>
    )),
  )
