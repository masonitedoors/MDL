import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import { withState } from '@dump247/storybook-state'
import { mGlobe } from '@masonite/svg-icons'
import { React as ModalBackdrop } from 'components/ModalBackdrop'
import { React as PaginationDots } from 'components/PaginationDots'
import { React as SmallTitle } from 'components/SmallTitle'
import WizardModal from './react'

storiesOf('WizardModal', module)
  .addDecorator(withKnobs)
  .add(
    'fully controlled',
    withState({ checked: true })(({ store }) => (
      <ModalBackdrop>
        <WizardModal>
          <WizardModal.Header
            title="Hello World"
            subtitle="Subtitle or Subheading"
            icon={mGlobe}
            onDismiss={() => {}}
          />
          <WizardModal.Body>
            <SmallTitle>Small Title as Field Label</SmallTitle>
            <p>Lorem ipsum paragraph</p>
          </WizardModal.Body>
          <WizardModal.Footer>
            <PaginationDots activePage={0} totalPages={4} />
          </WizardModal.Footer>
        </WizardModal>
      </ModalBackdrop>
    )),
  )
