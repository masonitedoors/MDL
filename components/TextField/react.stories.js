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
      const align = select('Align', { Left: 'left', Right: 'right', Center: 'center' }, 'left')
      const label = text('Label', 'Label')
      const labelAlwaysAbove = boolean('Label always above', false)
      const placeholder = text('Placeholder', 'Placeholder')
      const error = boolean('Error State', false)
      const helper = error ? 'Something is wrong.' : ''
      const showTrailingIcon = boolean('Show Trailing Icon', true)
      const disabled = boolean('Disabled', false)
      const readonly = boolean('Readonly', false)
      const removeMargin = boolean('Remove margins', false)
      const trailingIcon = showTrailingIcon && mPhone

      return (
        <TextField
          {...{
            align,
            disabled,
            error,
            helper,
            label,
            labelAlwaysAbove,
            placeholder,
            readonly,
            removeMargin,
            trailingIcon,
            variant,
          }}
          onBlur={value => {}}
          onChange={value => store.set({ value })}
          value={store.state.value}
        />
      )
    }),
  )
