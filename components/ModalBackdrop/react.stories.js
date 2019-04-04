import React from 'react'
import { storiesOf } from '@storybook/react'
import ModalBackdrop from './react'

storiesOf('ModalBackdrop', module).add('default', () => (
  <ModalBackdrop>
    <div />
  </ModalBackdrop>
))
