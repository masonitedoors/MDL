import React from 'react'
import { storiesOf } from '@storybook/react'
import OverflowMenu from './react'
import Button from '../../forms/button/Button/react'

storiesOf('Menu/Overflow Menu', module)
  .add(
    'default',
    () => (
      <OverflowMenu>
        <p>SAVED ON: 05/30/18<br />
          EDITED BY: LOREM IPSUM
        </p>
        <Button variant="light" fullWidth uppercase>My First Button</Button>
        <Button variant="light" fullWidth uppercase>My Second Button</Button>
        <Button variant="light" fullWidth uppercase>My Third Button</Button>
      </OverflowMenu>
    ),
  )
