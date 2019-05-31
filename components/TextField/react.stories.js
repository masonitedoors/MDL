import React from 'react'
import { storiesOf } from '@storybook/react'
import { mPhone } from '@masonite/svg-icons'
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import TextField from './react'
import Readme from './react.README.md'

storiesOf('TextField', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({ value: '' })(({ store }) => {
      const variant = select('Variant', { Light: 'light', Dark: 'dark' }, 'dark')
      const label = text('Label', 'Label')
      const error = boolean('Error State', false)
      const helper = error ? 'Something is wrong.' : ''
      const showTrailingIcon = boolean('Show Trailing Icon', true)
      const trailingIcon = showTrailingIcon && mPhone
      return (
        <TextField
          error={error}
          helper={helper}
          label={label}
          placeholder="Placeholder"
          onBlur={value => console.log('onBlur called, value: ', value)}
          onChange={value => store.set({ value })}
          trailingIcon={trailingIcon}
          value={store.state.value}
          variant={variant}
          removeMargin={false}
        />
      )
    }),
  )
  .add(
    'center',
    withState({ value: '' })(({ store }) => {
      const variant = select('Variant', { Light: 'light', Dark: 'dark' }, 'dark')
      const error = boolean('Error State', false)
      const helper = error ? 'Something is wrong.' : ''
      const showTrailingIcon = boolean('Show Trailing Icon', true)
      const trailingIcon = showTrailingIcon && mPhone
      return (
        <TextField
          error={error}
          helper={helper}
          placeholder="Placeholder"
          onBlur={value => console.log('onBlur called, value: ', value)}
          onChange={value => store.set({ value })}
          trailingIcon={trailingIcon}
          value={store.state.value}
          variant={variant}
          removeMargin={false}
          align="center"
        />
      )
    }),
  )
