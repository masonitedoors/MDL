import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, select } from '@storybook/addon-knobs'
import StatusIndicator from './react'
import Readme from './react.README.md'

storiesOf('StatusIndicator', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    const status = select('status', {
      inactive: 'inactive',
      active: 'active',
      pending: 'pending'
    })

    const readonly = boolean('readonly', false)

    return (
        <StatusIndicator
            status={status}
            handleStatusClick={() => console.log('status clicked')}
            readOnly={readonly}
        />
    )
  })

