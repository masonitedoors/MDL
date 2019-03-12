import React from 'react'
import { storiesOf } from '@storybook/react'
import classNames from 'classnames/bind'
import OverflowMenu from './react'
import Button from '../../forms/button/Button/react'
import storyStyles from './stories-style.module.scss'

const cx = classNames.bind(storyStyles)

storiesOf('Menu/Overflow Menu', module)
  .add(
    'default',
    () => (
      <OverflowMenu>
        <p>SAVED ON: 05/30/18<br />
          EDITED BY: LOREM IPSUM
        </p>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="light" fullWidth uppercase>My First Button</Button>
        </span>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="light" fullWidth uppercase>My Second Button</Button>
        </span>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="light" fullWidth uppercase>My Third Button</Button>
        </span>
      </OverflowMenu>
    ),
  )
