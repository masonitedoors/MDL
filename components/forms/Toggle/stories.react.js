import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Toggle from './react'

storiesOf('Forms/Toggle', module)
  .addDecorator(withKnobs)
  .add(
    'checked with a click event',
    withState({ checked: true })(({ store }) => (
      <Toggle
        checked={store.state.checked}
        onChange={() => store.set({ checked: !store.state.checked })}
      />
    )),
  )
