import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { mVolume1 } from '@masonite/svg-icons'
import { withState } from '@dump247/storybook-state'
import Toggle from './react'
import Readme from './react.README.md'

storiesOf('Toggle', module)
  .addParameters({ readme: { sidebar: Readme } })
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
  .add(
    'large with icon',
    withState({ checked: true })(({ store }) => {
      const disabled = boolean('Disabled', false)
      return (
        <Toggle
          checked={store.state.checked}
          disabled={disabled}
          onChange={() => store.set({ checked: !store.state.checked })}
          icon={mVolume1}
          large
        />
      )
    }),
  )
