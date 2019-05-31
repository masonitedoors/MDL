import React from 'react'
import { storiesOf } from '@storybook/react'
import ModalBackdrop from './react'
import Readme from './react.README.md'

storiesOf('ModalBackdrop', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => (
    <ModalBackdrop>
      <div />
    </ModalBackdrop>
  ))
