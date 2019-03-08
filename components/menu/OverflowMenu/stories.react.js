import React from 'react'
import { storiesOf } from '@storybook/react'
import OverflowMenu from './react'
import Button from '../../forms/button/Button/react'

storiesOf('ActionMenu/ActionMenu', module)
  .add(
    'default',
    () => (
      <OverflowMenu>
        <p>SAVED ON: 05/30/18<br />
          EDITED BY: LOREM IPSUM
        </p>
        <Button variant="light" onClick={() => console.log('hello')} fullWidth uppercase>My Button</Button>
        <Button variant="light" onClick={() => console.log('hello')} fullWidth uppercase>My Button</Button>
        <Button variant="light" onClick={() => console.log('hello')} fullWidth uppercase>My Button</Button>
      </OverflowMenu>
    ),
  )
