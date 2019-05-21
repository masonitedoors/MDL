import React from 'react'
import { storiesOf } from '@storybook/react'
import { mGlobe } from '@masonite/svg-icons'
import { React as ModalBackdrop } from 'components/ModalBackdrop'
import { React as PaginationDots } from 'components/PaginationDots'
import { React as SmallTitle } from 'components/SmallTitle'
import { React as TextField } from 'components/TextField'
import { React as Button } from 'components/Button'
import Modal from './react'

storiesOf('WizardModal', module).add('example', () => (
  <ModalBackdrop>
    <Modal>
      <Modal.Header
        title="Hello World"
        subtitle="Subtitle or Subheading"
        icon={mGlobe}
        onDismiss={() => { }}
      />
      <Modal.Body>
        <SmallTitle>Small Title as Field Label</SmallTitle>
        <TextField placeholder="Some Field" onChange={() => { }} value="" variant="light" />
      </Modal.Body>
      <Modal.Footer activePage={0} totalPages={4}>
        <Button variant="secondary" uppercase>
          Save
        </Button>
      </Modal.Footer>
    </Modal>
  </ModalBackdrop>
))
