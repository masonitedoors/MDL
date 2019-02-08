import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import Button from './react'

storiesOf('Forms/Button/Button', module)
  .addDecorator(withKnobs)
  .add('default', () => {
    const variant = select(
      'Variant',
      {
        Light: 'light',
        Base: '',
        Dark: 'dark',
      },
      'light',
    )
    const size = select(
      'Size',
      {
        Small: 'small',
        Base: '',
      },
      '',
    )
    const uppercase = boolean('Uppercase', false)
    return (
      <Button variant={variant} size={size} uppercase={uppercase}>
        Lorem Button
      </Button>
    )
  })
