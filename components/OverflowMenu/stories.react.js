import React from 'react'
import { storiesOf } from '@storybook/react'
import classNames from 'classnames/bind'
import Button from 'components/forms/button/Button/react'
import OverflowMenu from './react'
import storyStyles from './stories-style.module.scss'

const cx = classNames.bind(storyStyles)

storiesOf('OverflowMenu', module)
  .add(
    'default',
    () => (
      <OverflowMenu>
        <p>saved on: 05/30/18<br />
          edited by: lorem ipsum
        </p>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="default" fullWidth uppercase>My First Button</Button>
        </span>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="default" fullWidth uppercase>My Second Button</Button>
        </span>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="default" fullWidth uppercase>My Third Button</Button>
        </span>
      </OverflowMenu>
    ),
  )
