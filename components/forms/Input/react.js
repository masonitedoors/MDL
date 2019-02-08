import React, { Component } from 'react'
import classNames from 'classnames/bind'
import { mX } from '@masonite/svg-icons'
import s from './style.module.scss'

const cx = classNames.bind(s)

export default class Input extends Component {
  constructor(props) {
    super(props)
  }

  render() {
    const { error, variant } = this.props

    return (
      <div className={cx('input-wrapper')}>
        <input
          className={cx('input', {
            'input--dark': variant === 'dark',
            'input--error': error,
          })}
          type="text"
        />
        <div
          className={cx(['input-icon', { 'input-icon--error': error }])}
          dangerouslySetInnerHTML={{ __html: mX }}
        />
      </div>
    )
  }
}
