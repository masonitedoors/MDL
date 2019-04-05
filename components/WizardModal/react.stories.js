import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import WizardModal from './react'

storiesOf('WizardModal', module)
  .addDecorator(withKnobs)
  .add(
    'fully controlled',
    withState({ checked: true })(({ store }) => {
      const disabled = boolean('Disabled', false)
      return (
        <WizardModal>
          <WizardModal.Header text="Hello World" />
        </WizardModal>
      )
    }),
  )
