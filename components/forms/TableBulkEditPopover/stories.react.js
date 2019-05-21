import React from 'react'
import { storiesOf } from '@storybook/react'
import TableBulkEditPopover from './react'
import { React as TextField } from '../TextField'

let styles = {
 width:'40px',
 top:'5px',
 left:'6px',
 position:'relative'
};

storiesOf('TableBulkEditPopover', module).add('example', () => (
  <TableBulkEditPopover direction="left" cell={'4\'2"'}>
    <div style={styles}>
      <TextField onChange={() => { }} value="" variant="light" />
    </div>
  </TableBulkEditPopover>
))