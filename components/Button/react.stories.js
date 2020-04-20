import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import Button from './react'
import Readme from './react.README.md'

storiesOf('Button', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    const variant = select(
      'Variant',
      {
        Default: 'default',
        Base: '',
        Primary: 'primary',
        Secondary: 'secondary',
        Light: 'light',
      },
    )
    const size = select(
      'Size',
      {
        Small: 'small',
        Base: undefined,
        Large: 'large',
      },
      '',
    )

    const active = boolean('Active', false)

    const disabled = boolean('Disabled', false)

    const uppercase = boolean('Uppercase', false)
    return (
      <Button
        variant={variant}
        onClick={() => console.log('click')}
        size={size}
        uppercase={uppercase}
        disabled={disabled}
        active={active}
      >
        Lorem Button
      </Button>
    )
  })
