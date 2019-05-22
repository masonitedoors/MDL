import React from 'react'
import { storiesOf } from '@storybook/react'
import TableBulkEditPopover from './react'
import { React as TextField } from '../../TextField'

let styles = {
 width:'40px'
};

storiesOf('TableBulkEditPopover', module).add('example', () => (
  <div style={{ marginLeft: 100, marginTop: 100 }}>
  <TableBulkEditPopover direction="left" cell={'4\'2"'}>
    <div style={styles}>
      <TextField onChange={() => { }} value="" variant="light" removeMargin= "true"/>
    </div>
  </TableBulkEditPopover>
  </div>
))
