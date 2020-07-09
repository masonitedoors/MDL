import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, boolean } from '@storybook/addon-knobs'
import ModalBackdrop from './react'
import Readme from './react.README.md'

storiesOf('ModalBackdrop', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    const show = boolean('Show', true)
    return (
      <ModalBackdrop show={show}>
        <p>Content shows in center</p>
      </ModalBackdrop>
    )
  })
