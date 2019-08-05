import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Checkbox from './react'
import Readme from './react.README.md'

storiesOf('Checkbox', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add(
    'fully controlled',
    withState({ checked: true })(({ store }) => (
      <Checkbox
        checked={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
      />
    )),
  )
