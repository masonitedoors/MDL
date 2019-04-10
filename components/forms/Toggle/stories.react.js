import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Toggle from './react'

storiesOf('Toggle', module)
  .addDecorator(withKnobs)
  .add(
    'fully controlled',
    withState({ checked: true })(({ store }) => {
      const disabled = boolean('Disabled', false)
      return (
        <Toggle
          checked={store.state.checked}
          disabled={disabled}
          onChange={() => store.set({ checked: !store.state.checked })}
        />
      )
    }),
  )
  .add(
    'large',
    withState({ checked: true })(({ store }) => {
      const disabled = boolean('Disabled', false)
      return (
        <Toggle
          checked={store.state.checked}
          disabled={disabled}
          onChange={() => store.set({ checked: !store.state.checked })}
          large
        />
      )
    }),
  )
