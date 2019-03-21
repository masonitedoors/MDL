import React from 'react'
import { storiesOf } from '@storybook/react'
import { mPhone } from '@masonite/svg-icons'
import {
  withKnobs, boolean, select, text,
} from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import TextField from './react'

storiesOf('Forms/TextField', module)
  .addDecorator(withKnobs)
  .add(
    'default',
    withState({ value: '' })(({ store }) => {
      const variant = select('Variant', { Light: 'light', Dark: 'dark' }, 'light')
      const label = text('Label', 'Label')
      const error = boolean('Error State', false)
      const helper = error ? 'Something is wrong.' : ''
      const trailingIcon = select('Trailing Icon', {
        Phone: <svg dangerouslySetInnerHTML={{ __html: mPhone }} />,
      })
      return (
        <TextField
          variant={variant}
          error={error}
          helper={helper}
          label={label}
          placeholder="Placeholder"
          onBlur={value => console.log('onBlur called, value: ', value)}
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )
    }),
  )
