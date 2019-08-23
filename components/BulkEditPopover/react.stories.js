import React from 'react'
import { storiesOf } from '@storybook/react'
import BulkEditPopover from './react'
import { React as TextField } from '../TextField'
import Readme from './react.README.md'

const styles = {
  width: '40px',
}

storiesOf('BulkEditPopover', module)
  .addParameters({ readme: { sidebar: Readme } })
  .add('example', () => (
    <div style={{ marginLeft: 100, marginTop: 100 }}>
      <BulkEditPopover direction="left" cell={'4\'2"'}>
        <div style={styles}>
          <TextField onChange={() => {}} value="" variant="light" removeMargin="true" />
        </div>
      </BulkEditPopover>
    </div>
  ))
