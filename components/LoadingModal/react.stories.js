import React from 'react'
import { storiesOf } from '@storybook/react'
import LoadingModal from './react'
import Readme from './react.README.md'

storiesOf('LoadingModal', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('default', () => (
    <LoadingModal>
    
    </LoadingModal>
  ))
