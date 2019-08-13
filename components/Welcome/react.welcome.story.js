import React from 'react'
import { storiesOf } from '@storybook/react'
import { withKnobs } from '@storybook/addon-knobs'
import classNames from 'classnames/bind'
import style from './style.module.scss'
import triangle from './triangle.svg'

const cx = classNames.bind(style)

console.log(triangle)

storiesOf('Welcome', module)
  .addDecorator(withKnobs)
  .add('Default', () => (
    <article className={cx('welcome')}>
      <section className={cx('shapes')}>
        <div className={cx('square')} />
        <div className={cx('circle')} />
        <div className={cx('triangle')} dangerouslySetInnerHTML={{ __html: triangle }} />
      </section>
      <h1>Masonite Digital Language</h1>
    </article>
  ))
