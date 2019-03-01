import React from 'react'
import { storiesOf } from '@storybook/react'
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import Input from './react'

storiesOf('Forms/Input', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({ value: '' })(({ store }) => {
      const variant = select('Variant', { Light: 'light', Dark: 'dark' }, 'light')
      const label = text('Label', 'Input Label')
      const error = boolean('Error State', false)
      return (
        <Input
          variant={variant}
          error={error}
          label={label}
          placeholder="Type something?"
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )
    }),
  )
