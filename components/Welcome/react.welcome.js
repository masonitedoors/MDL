import React from 'react'
import { storiesOf } from '@storybook/react'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import logo from './mdl-logo.svg'

const cx = classNames.bind(style)

storiesOf('Welcome', module)
  .addParameters({ options: { showPanel: false } })
  .add('Default', () => (
    <article className={cx('welcome')}>
      <div className={cx('logo')}>
        <div className={cx('logo__svg')} dangerouslySetInnerHTML={{ __html: logo }} />
        <h1 className={cx('logo__text')}>Masonite Digital Language</h1>
      </div>
    </article>
  ))
