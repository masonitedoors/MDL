import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs, select } from '@storybook/addon-knobs'
import classNames from 'classnames/bind'
import Button from 'components/Button/react'
import OverflowMenu from './react'
import storyStyles from './react.stories.module.scss'
import Readme from './react.README.md'

const cx = classNames.bind(storyStyles)

storiesOf('OverflowMenu', module)
  .addParameters({ readme: { sidebar: Readme } })
  .addDecorator(withKnobs)
  .add('default', () => {
    const variant = select(
      'Variant',
      {
        Light: 'light',
        Dark: 'dark',
      },
      'light',
    )

    return (
      <OverflowMenu variant={variant}>
        <p>
          saved on: 05/30/18
          <br />
          edited by: lorem ipsum
        </p>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="default" fullWidth uppercase>
            My First Button
          </Button>
        </span>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="default" fullWidth uppercase>
            My Second Button
          </Button>
        </span>
        <span className={cx('overflow-menu__button-wrapper')}>
          <Button variant="default" fullWidth uppercase>
            My Third Button
          </Button>
        </span>
      </OverflowMenu>
    )
  })
